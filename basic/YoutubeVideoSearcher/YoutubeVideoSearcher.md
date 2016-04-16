# Youtube Video Searcher

## ミュージカル曲のコピーバンドのセットリスト管理シート

こんな感じ：

![setlist screenshot](/basic/YoutubeVideoSearcher/images/setlist.png)

## 使ったGASクラス
- SpreadsheetApp
- YouTube API（UrlFetchAppでも可）
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
- YouTube APIを有効にする: Google Apps Scriptのリソースを追加

![google extensions screenshot](/basic/YoutubeVideoSearcher/images/google_extensions.png)

- YouTube APIを有効にする: Google デベロッパー コンソールを設定

![google developer console screenshot](/basic/YoutubeVideoSearcher/images/google_developer_console.png)

![google developer console screenshot](/basic/YoutubeVideoSearcher/images/google_developer_console_2.png)

![google developer console screenshot](/basic/YoutubeVideoSearcher/images/google_developer_console_3.png)

![google developer console screenshot](/basic/YoutubeVideoSearcher/images/google_developer_console_4.png)

- YouTube APIで動画検索（https://developers.google.com/youtube/v3/docs/search/list）
```javascript
var parameters = {
  q: 'test',
  type: 'video',
  key: apiKey
}

// YouTube.Search.listを使う場合
var results = YouTube.Search.list('snippet', parameters);
// UrlFetchAppを使う場合
var results = UrlFetchApp.fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&type=video&key=' + apiKey).getContentText();
```

結果：
```
{
 "kind": "youtube#searchListResponse",
 "etag": "\"dcqYJX7VLF4yxRrCehaDvw0InzY/zCugmcp6sBdR92GNTdbfltlKHbs\"",
 "nextPageToken": "CAUQAA",
 "regionCode": "US",
 "pageInfo": {
  "totalResults": 1000000,
  "resultsPerPage": 5
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"dcqYJX7VLF4yxRrCehaDvw0InzY/PvzLERDCIQZcyMpVmbepdsb4kVY\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "iFtmrUscNqA" // ← これ
   },
   "snippet": {
    "publishedAt": "2016-04-14T15:00:02.000Z",
    "channelId": "UCp68_FLety0O-n9Qu6phsgw",
    "title": "Lets make a Flying Machine-Thrust Test",
    "description": "The 2nd stage of the Furze Ford Unlearn Flying Machine project....So will these paramotors actually lift me off the ground, time to test how much weight they can ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/iFtmrUscNqA/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/iFtmrUscNqA/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/iFtmrUscNqA/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "colinfurze",
    "liveBroadcastContent": "none"
   }
  },

...

```

### GUIで使いやすくする
gsファイル
```javascript
var template = HtmlService.createHtmlTemplateFromFile('test.html');
template.param = 'test';
var html = template.evaluate();

SpreadsheetApp.getUi().showModalDialog(html, 'Test Title');
```

HTMLファイル
```html
<body>
  <input type="button" value="<?= param ?>" onclick="google.script.run.withSuccessHandler(google.script.host.close).test();">
</body>
```
