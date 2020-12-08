import sortArrayOfObjects from '../../helpers/sortArrayOfObjects';
import {
  getGuardsSummary,
  getSummaryAndGuardsList,
  initialFormat,
} from '../helpers';

const part2 = (inputData) => {
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

  const data = initialFormat(inputData);

  const { guards, summary } = getSummaryAndGuardsList(data);

  const guardsSummary = getGuardsSummary(guards, summary);

  const hours = [];
  guardsSummary.forEach((g) => {
    for (let i = 0; i < 60; i++) {
      const filtered = guardsSummary[
        guardsSummary.length - 1
      ].timesAsleep.filter((t) => t.start <= i && t.end > i);
      hours.push({
        guard: g.guard,
        h: i,
        count: g.timesAsleep.filter((t) => t.start <= i && t.end > i).length,
      });
    }
  });

  const sortedHours = sortArrayOfObjects(hours, 'count');

  return (
    sortedHours[sortedHours.length - 1].h *
    sortedHours[sortedHours.length - 1].guard
  );
};

export default part2;
