function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function importCSV(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var csvData = Utilities.parseCsv(data);
  sheet.getRange(sheet.getLastRow() + 1, 1, csvData.length, csvData[0].length).setValues(csvData);
}
