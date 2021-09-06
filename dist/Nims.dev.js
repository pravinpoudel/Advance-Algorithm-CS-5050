"use strict";

var _require = require("perf_hooks"),
    performance = _require.performance;

var createCsvWriter = require("csv-writer").createObjectCsvWriter;

try {
  (function _callee() {
    var csvWriter, records, t0, winner, i, executionTime;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            csvWriter = createCsvWriter({
              path: "files/timeRecord.csv",
              header: [{
                id: "number",
                title: "Number of items"
              }, {
                id: "time",
                title: "execution time (sec)"
              }]
            });
            records = [{
              number: null,
              time: ""
            }];
            t0 = performance.now();

            winner = function winner(n) {
              if (n == 0) {
                return true;
              }

              if (n == 1) {
                return false;
              }

              return !(winner(n - 1) && winner(n - 2));
            };

            i = 0;

          case 5:
            if (!(i < 100)) {
              _context.next = 17;
              break;
            }

            winner(i);
            t1 = performance.now();
            executionTime = (t1 - t0) / 1000.0;
            records[0].number = i;
            records[0].time = executionTime;
            _context.next = 13;
            return regeneratorRuntime.awrap(csvWriter.writeRecords(records));

          case 13:
            console.log("time is " + executionTime + " s");

          case 14:
            i++;
            _context.next = 5;
            break;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    });
  })();
} catch (err) {
  console.error(err);
  throw err;
}
//# sourceMappingURL=Nims.dev.js.map
