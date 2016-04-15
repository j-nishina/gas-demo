# Youtube Video Searcher

## ミュージカル曲のコピーバンドのセットリスト管理シート

こんな感じ：

![setlist screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/setlist.png)

## 使ったGASクラス
- SpreadsheetApp
Google Spreadsheetを操るクラス
- UrlFetchApp
http/sのリクエストを投げたり、レスポンスを受けたりするクラス
※要するに、APIとやりとりするためのクラス
- HtmlService
GUIを作成するクラス

## デモ
### Spreadsheetを操作
- onOpenでメニューを追加
```javascript
var spreadsheet = SpreadsheetApp.getActive(); 

function onOpen() {
  var menu = [
    { name: 'Test', functionName: 'test' }
  ];
  spreadsheet.addMenu('Custom functions', menu);
}
```

### Youtube APIで動画の情報を取得
### GUIで使いやすくする
