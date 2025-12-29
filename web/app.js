var count = 0;
var thisCount = 0;

const handler = {
  startInitFunctionOrder(data) {
    count = data.count;
  },

  startDataFileEntries(data) {
    count = data.count;
  },

  performMapLoadFunction(data) {
    thisCount++;

  }
};

window.addEventListener("message", function (e) {
  (handler[e.data.eventName] || function () {})(e.data);
});
