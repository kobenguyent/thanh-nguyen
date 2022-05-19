import data from "./data";

module.exports = function() {
  return actor({
    waitAndTap(locator, secs = data.smallWaitingTimeInSecs) {
      this.wait(secs);
      this.tap(locator);
    },

    waitAndSeeText(text, secs = data.smallWaitingTimeInSecs) {
      this.wait(secs);
      this.see(text);
    },

  });
}
