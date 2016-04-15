# Youtube Video Searcher

## ミュージカル曲のコピーバンドのセットリスト管理シート

こんな感じ：

![setlist screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/setlist.png)

## 使ったGASクラス
- SpreadsheetApp
- YouTube API
※UrlFetchAppでも可
- HtmlService

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
- Spreadsheetを編集
```javascript
function test() {
  spreadsheet.getRange('A2').setValue('test');
}
```

### YouTube APIで動画の情報を取得
- YouTube APIを有効にする
    - Google Apps Scriptのリソースを追加

![google extensions screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/google_extensions.png)

    - Google デベロッパー コンソールを設定

![google developer console screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/google_developer_console.png)

![google developer console screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/google_developer_console_2.png)

![google developer console screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/google_developer_console_3.png)

![google developer console screenshot](https://github.com/j-nishina/gas-demo/blob/master/basic/YoutubeVideoSearcher/images/google_developer_console_4.png)
- YouTube.Search.listで動画検索
```javascript

```
※ YouTube APIのメソッドを試すには https://developers.google.com/apis-explorer/?hl=ja#p/youtube/v3/

### GUIで使いやすくする
