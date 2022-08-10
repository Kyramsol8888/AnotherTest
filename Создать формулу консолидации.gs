function addUI() {
  SpreadsheetApp.getUi()
    .createMenu("Администрирование")
    .addItem("Подключить баеров", "connectNewBuyers")
    .addToUi()
}

function connectNewBuyers() {
  getSpreadsheetsLinks();
  createConsolidationQueries();
}

function getSpreadsheetsLinks() {
  var files = DriveApp.getFolderById("1D5HJh54zWC4GTatkaUtkgUbtG1J75AWO").getFiles();
  var links = [];
  var oldLinks = [];
  var linksSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки");

  while (files.hasNext()) {
    var element = files.next().getId();
    links.push([getBuyersNameByID(element), element])
  }

  if (linksSheet.getLastRow() > 0) {
    oldLinks = linksSheet.getRange(1, 1, linksSheet.getLastRow(), 1).getValues()
    oldLinks = oldLinks.flat()
  }

  for (var i = 0; i < links.length; i++)
    if (!oldLinks.includes(links[i][0])) {
      addImportrangePermission(links[i][1]);
    }


  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки").getRange(1, 1, links.length, 2).setValues(links)
}


function createConsolidationQueries() {

  var linksSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var links = linksSheet.getRange(1, 1, linksSheet.getLastRow(), 2).getValues();
  var queries = [];
  var countOfBuyers = links.length;
  for (var i = 0; i < countOfBuyers; i++) {
    var query = "Query(IMPORTRANGE(\"" + links[i][1] + "\", $I$2), \"" +
      "select Col1, '" + links[i][0] + "', '\"&$I$3&\"', \"&$I$4&\" label '" + links[i][0] + "' '', '\"&$I$3&\"' ''\")"
    if (i < countOfBuyers - 1)
      query = query + ";"
    queries.push(query)
  }
  var finalQuery = "=query(\n{" + queries.join("\n") + "\n},\n $I$1)"

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Facebook").getRange(26, 1).setValue(finalQuery);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TikTok").getRange(26, 1).setValue(finalQuery);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("In-app").getRange(26, 1).setValue(finalQuery);
}
