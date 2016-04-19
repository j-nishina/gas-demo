// URL Shortener
function shortenUrl() {
  var url = UrlShortener.Url.insert({
    longUrl: 'https://www.bizreach.jp'
  });
  Logger.log('Shortened URL is "%s".', url.id);
}

function getClicks() {
  var shortUrl = "https://goo.gl/4Vwqb2";
  var url = UrlShortener.Url.get(shortUrl, {
    projection: 'ANALYTICS_CLICKS'
  });
  Logger.log('The URL received %s clicks this week.', url.analytics.week.shortUrlClicks);
}
