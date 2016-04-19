// カスタムダイアログ作成

function showCustomDialog() {
  var html = HtmlService.createHtmlOutputFromFile('my_modal')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'カスタムダイアログ');
}


// カスタムイベントのコールバック
function onButtonClick() {
  Logger.log("button clicked!");
}
