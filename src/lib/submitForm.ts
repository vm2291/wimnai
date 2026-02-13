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
 * 3. Go to Extensions → Apps Script. Delete ALL existing code and paste:
 *
 * ───────── Apps Script Code (copy everything below) ─────────
 *
 * function doPost(e) {
 *   var lock = LockService.getScriptLock();
 *   lock.tryLock(10000);
 *
 *   try {
 *     var sheetName = e.parameter.sheetName;
 *     var values = JSON.parse(e.parameter.values);
 *     var ss = SpreadsheetApp.getActiveSpreadsheet();
 *     var sheet = ss.getSheetByName(sheetName);
 *
 *     if (!sheet) {
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ result: "error", error: "Sheet not found: " + sheetName }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *
 *     sheet.appendRow([new Date()].concat(values));
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
 * 4. Click "Deploy" → "Manage deployments" → edit the existing one
 *    - Version: New version
 *    - Click Deploy
 *    - Copy the Web app URL
 *
 * 5. Paste that URL below as APPS_SCRIPT_URL.
 *
 * 6. Done! All 3 forms will write to the same spreadsheet, each to its own tab.
 */

// ⬇️ PASTE YOUR APPS SCRIPT WEB APP URL HERE ⬇️
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPpDNfUG1D922FBbi6O54WhEWjMRI-M1zTPHU4BikNO1ii6yzMz15sGRHO3M9-ORGd/exec";

export type FormSheet = "Speakers" | "Partners" | "Subscribers";

/**
 * Submits form data via a hidden <form> + <iframe>.
 * This avoids all CORS/redirect issues with Google Apps Script.
 */
export async function submitToGoogleSheet(
  sheetName: FormSheet,
  values: (string | boolean)[]
): Promise<{ success: boolean; error?: string }> {
  if (!APPS_SCRIPT_URL) {
    console.warn(
      "Google Sheets integration not configured. Set APPS_SCRIPT_URL in src/lib/submitForm.ts"
    );
    return { success: true };
  }

  return new Promise((resolve) => {
    try {
      // Create a hidden iframe to receive the form response
      const iframeName = "sheet-submit-" + Date.now();
      const iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      // Create a hidden form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = APPS_SCRIPT_URL;
      form.target = iframeName;
      form.style.display = "none";

      // Add hidden fields
      const addField = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField("sheetName", sheetName);
      addField("values", JSON.stringify(values));

      document.body.appendChild(form);
      form.submit();

      // Clean up after submission
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        resolve({ success: true });
      }, 2000);
    } catch (err) {
      console.error("Form submission error:", err);
      resolve({ success: false, error: String(err) });
    }
  });
}
