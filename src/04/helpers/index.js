const initialFormat = (inputData) => {
  return [...inputData.sort()].map((d) => {
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
};

const getSummaryAndGuardsList = (data) => {
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
  return { guards, summary };
};

const getGuardsSummary = (guards, summary) => {
  return guards
    .reduce((acc, guard) => {
      const guardSummaryObj = { guard, timeAsleep: 0, timesAsleep: [] };

      const filtered = summary.filter((s) => {
        return s.guard === guard;
      });
      filtered.forEach((item) => {
        guardSummaryObj.timeAsleep += item.timeAsleep;
        guardSummaryObj.timesAsleep.push(...item.timesAsleep);
      });

      acc.push(guardSummaryObj);
      return acc;
    }, [])
    .sort(function (a, b) {
      return a.timeAsleep > b.timeAsleep;
    });
};

export { initialFormat, getSummaryAndGuardsList, getGuardsSummary };
