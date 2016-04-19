// Google Calendar登録

function addEvent() {
  var event = {
    "summary": "Event Title",
    "start": {
      "dateTime": "2016-04-20T13:00+08:00"
    },
    "end": {
      "dateTime": "2016-04-20T18:00+08:00"
    }
  }

  Calendar.Events.insert({
    "calendarId": "",
    "resource": event
  });
}
