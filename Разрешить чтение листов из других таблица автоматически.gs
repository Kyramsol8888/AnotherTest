function addImportrangePermission(donorId) {
  // id таблицы куда импортируем, где надо дать доступ
  const ssId = SpreadsheetApp.getActiveSpreadsheet().getId();

  // специальная ссылка для предоставления доступа
  const url = `https://docs.google.com/spreadsheets/d/${ssId}/externaldata/addimportrangepermissions?donorDocId=${donorId}`;

  const token = ScriptApp.getOAuthToken();

  const params = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    muteHttpExceptions: true
  };
  
  UrlFetchApp.fetch(url, params);
}