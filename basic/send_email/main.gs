// Email送信

function sendMail() {
  GmailApp
    .sendEmail(
      "send_to@bizreach.co.jp"
      , "Test件名"
      , "test本文"
      , {
          from: "from@bizreach.co.jp",
          name: "GAS TEST"
      }
    );
}
