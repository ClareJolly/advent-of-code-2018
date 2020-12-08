const part1 = (inputData) => {
  const testData = [
    '[1518-11-01 00:00] Guard #10 begins shift',
    '[1518-11-01 00:05] falls asleep',
    '[1518-11-01 00:25] wakes up',
    '[1518-11-01 00:30] falls asleep',
    '[1518-11-01 00:55] wakes up',
    '[1518-11-01 23:58] Guard #99 begins shift',
    '[1518-11-02 00:40] falls asleep',
    '[1518-11-02 00:50] wakes up',
    '[1518-11-03 00:05] Guard #10 begins shift',
    '[1518-11-03 00:24] falls asleep',
    '[1518-11-03 00:29] wakes up',
    '[1518-11-04 00:02] Guard #99 begins shift',
    '[1518-11-04 00:36] falls asleep',
    '[1518-11-04 00:46] wakes up',
    '[1518-11-05 00:03] Guard #99 begins shift',
    '[1518-11-05 00:45] falls asleep',
    '[1518-11-05 00:55] wakes up',
  ];

  const data = [...inputData.sort()].map((d) => {
    var initialRegex = /(\[(.*)\]) (((Guard) #(\d{1,}) (.*))|(.*))/g;
    var match = initialRegex.exec(d);
    const datetime = new Date(match[2]);
    return {
      dateString: match[2],
      date: datetime.toLocaleDateString('en-us'),
      hour: datetime.getHours(),
      minutes: datetime.getMinutes(),
      guard: match[6],
      action: match[8] || match[7],
    };
  });

  let guards = [];

  const summary = data.reduce((acc, item, idx) => {
    const { guard, ...rest } = item;
    const basicItem = {
      ...rest,
    };
    if (guard) {
      if (!guards.includes(guard)) guards.push(guard);
      acc.push({
        guard,
        timesAsleep: [],
        timeAsleep: 0,
        data: [basicItem],
      });
    } else {
      if (item.action === 'wakes up') {
        acc[acc.length - 1].timesAsleep.push({
          start: data[idx - 1].minutes,
          end: item.minutes,
          total: item.minutes - data[idx - 1].minutes,
        });
        acc[acc.length - 1].timeAsleep += item.minutes - data[idx - 1].minutes;
        acc[acc.length - 1].data.push(basicItem);
      }
    }
    return acc;
  }, []);
  guards = [...new Set(guards)];
  //   console.log('🚀 ~ file: index.js ~ line 71 ~ part1 ~ guards', guards);

  const guardsSummary = guards
    .reduce((acc, guard) => {
      const guardSummaryObj = { guard, timeAsleep: 0, timesAsleep: [] };

      const filtered = summary.filter((s) => {
        return s.guard === guard;
      });
      filtered.forEach((item) => {
        guardSummaryObj.timeAsleep += item.timeAsleep;
        guardSummaryObj.timesAsleep.push(...item.timesAsleep);
      });

      // guardSummary.timeAsleep = filtered;
      acc.push(guardSummaryObj);
      return acc;
    }, [])
    .sort(function (a, b) {
      return a.timeAsleep > b.timeAsleep;
    });

  const hours = [];
  for (let i = 0; i < 60; i++) {
    hours.push({
      h: i,
      count: guardsSummary[guardsSummary.length - 1].timesAsleep.filter(
        (t) => t.start <= i && t.end > i
      ).length,
    });
  }

  const sortedHours = hours.sort(function (a, b) {
    return a.count > b.count;
  });
  return (
    sortedHours[sortedHours.length - 1].h *
    guardsSummary[guardsSummary.length - 1].guard
  );
  //   });
};

export default part1;
