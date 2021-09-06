const { performance } = require("perf_hooks");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

try {
  (async () => {
    const csvWriter = createCsvWriter({
      path: "files/timeRecord.csv",
      header: [
        { id: "number", title: "Number of items" },
        {
          id: "time",
          title: "execution time (sec)",
        },
      ],
    });
    const records = [{ number: null, time: "" }];

    let t0 = performance.now();

    const winner = (n) => {
      if (n == 0) {
        return true;
      }
      if (n == 1) {
        return false;
      }
      return !(winner(n - 1) && winner(n - 2));
    };

    for (let i = 0; i < 100; i++) {
      winner(i);
      t1 = performance.now();
      const executionTime = (t1 - t0) / 1000.0;
      records[0].number = i;
      records[0].time = executionTime;
      await csvWriter.writeRecords(records);
      console.log("time is " + executionTime + " s");
    }
  })();
} catch (err) {
  console.error(err);
  throw err;
}
