var spreadsheet = SpreadsheetApp.getActive();
var sheetName = '候補曲';

function onOpen() {
  var menu = [
    { name: 'Youtube動画取得（候補曲シート用）', functionName: 'getYoutubeVideo' }
  ];
  spreadsheet.addMenu('Custom functions', menu);
}

function getYoutubeVideo() {
  var firstRow = 2;
  var songCol = 1;
  var musicalCol = 2;
  var youtubeCol = 7;
  var sheet = spreadsheet.getSheetByName(sheetName);
  var lastRow = sheet.getLastRow();
  for (var row = firstRow; row <= lastRow; row++) {
    var songTitle = urlEncode(sheet.getRange(row, songCol, 1, 1).getValue());
    var musicalTitle = urlEncode(sheet.getRange(row, musicalCol, 1, 1).getValue());
    var youtubeCell = sheet.getRange(row, youtubeCol, 1, 1);
    var youtubeLink = youtubeCell.getValue();
    if (songTitle !== '' && youtubeLink === '') {
      var parameters = {
        q: songTitle + '+' + musicalTitle,
        type: 'video',
        key: apiKey
      };
      var results = YouTube.Search.list('snippet', parameters);
      showDialog(results, songTitle + '+' + musicalTitle, youtubeCell.getRow(), youtubeCell.getColumn());
      break;
    }
  }
}

function showDialog(results, query, row, col) {
  var template = HtmlService.createTemplateFromFile('selectYoutubeLinkTemplate.html');
  template.results = results;
  template.query = query;
  template.row = row;
  template.col = col;
  var msgBox = template.evaluate();
  msgBox.setWidth(336);
  msgBox.setHeight(300);

  SpreadsheetApp.getUi().showModalDialog(msgBox, 'Youtube Linkの選択');
}

function setYoutubeLink(videoUrl, row, column) {
  spreadsheet.getSheetByName(sheetName).getRange(row, column).setValue(videoUrl);
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('次の曲のYoutube動画を検索しますか？', ui.ButtonSet.YES_NO);
  if (response == ui.Button.YES) {
    getYoutubeVideo();
  }
}

function urlEncode(string) {
  return string.replace(' ', '+', 'g');
}
