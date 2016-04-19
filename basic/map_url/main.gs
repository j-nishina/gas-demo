// Google Map Image作成

function doGet(event) {
   var map = Maps.newStaticMap()
       .setSize(600, 600)
       .setCenter('東京都渋谷区渋谷2-15-1');

   map.setMarkerStyle(Maps.StaticMap.MarkerSize.MID
     ,Maps.StaticMap.Color.RED, 'B');
   map.addMarker('東京都渋谷区渋谷2-15-1');

   var app = UiApp.createApplication().setTitle('ビズリーチ');
   app.add(app.createImage(map.getMapUrl()));
   return app;
 }
