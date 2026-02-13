/**
 * Submit form data to a Google Apps Script Web App endpoint.
 *
 * HOW TO SET UP (one-time — takes ~10 minutes):
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *    - Name it e.g. "WiMN+AI Form Submissions"
 *    - Create 3 sheets (tabs) at the bottom:
 *        Sheet1 → rename to "Speakers"
 *        Sheet2 → rename to "Partners"
 *        Sheet3 → rename to "Subscribers"
 *
 * 2. In each sheet, add a header row (Row 1) with these columns:
 *
 *    Speakers:
 *    | Timestamp | Full Name | Email | Affiliation | Interest Type | Preferred Format | Proposed Title | Short Description | Links |
 *
 *    Partners:
 *    | Timestamp | Organization | Contact Name | Email | Partnership Interest | Message |
 *
 *    Subscribers:
 *    | Timestamp | Email | Name | Affiliation | Updates | Speaker Links |
 *
 * 3. Go to Extensions → Apps Script. Delete the default code and paste:
 *
 * ───────── Apps Script Code (copy everything below) ─────────
 *
 * function doPost(e) {
 *   const lock = LockService.getScriptLock();
 *   lock.tryLock(10000);
 *
 *   try {
 *     const data = JSON.parse(e.postData.contents);
 *     const ss = SpreadsheetApp.getActiveSpreadsheet();
 *     const sheet = ss.getSheetByName(data.sheetName);
 *
 *     if (!sheet) {
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ result: "error", error: "Sheet not found: " + data.sheetName }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *
 *     sheet.appendRow([new Date(), ...data.values]);
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ result: "success" }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } finally {
 *     lock.releaseLock();
 *   }
 * }
 *
 * ───────── End of Apps Script Code ─────────
 *
 * 4. Click "Deploy" → "New deployment"
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy → Authorize access → Allow
 *    - Copy the Web app URL (looks like https://script.google.com/macros/s/ABCDEF.../exec)
 *
 * 5. Paste that URL below as APPS_SCRIPT_URL.
 *
 * 6. Done! All 3 forms will write to the same spreadsheet, each to its own tab.
 */

// ⬇️ PASTE YOUR APPS SCRIPT WEB APP URL HERE ⬇️
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPpDNfUG1D922FBbi6O54WhEWjMRI-M1zTPHU4BikNO1ii6yzMz15sGRHO3M9-ORGd/exec";

export type FormSheet = "Speakers" | "Partners" | "Subscribers";

export async function submitToGoogleSheet(
  sheetName: FormSheet,
  values: (string | boolean)[]
): Promise<{ success: boolean; error?: string }> {
  if (!APPS_SCRIPT_URL) {
    console.warn(
      "Google Sheets integration not configured. Set APPS_SCRIPT_URL in src/lib/submitForm.ts"
    );
    // Return success so the UI still works during development
    return { success: true };
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ sheetName, values }),
    });

    const result = await response.json();

    if (result.result === "success") {
      return { success: true };
    }
    return { success: false, error: result.error };
  } catch (err) {
    console.error("Form submission error:", err);
    return { success: false, error: String(err) };
  }
}
