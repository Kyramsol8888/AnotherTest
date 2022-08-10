  function addTriggers(spreadsheetId) {

  /* ScriptApp.newTrigger('FacebookBuyingContentTools.initialization')
    .forSpreadsheet(spreadsheetId)
    .onOpen()
    .create(); */

    ScriptApp.newTrigger('FacebookBuyingContentTools.validate')
    .forSpreadsheet(spreadsheetId)
    .onEdit()
    .create(); 
 
}

