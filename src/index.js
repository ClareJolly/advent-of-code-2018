import yargs from 'yargs';
const argv = yargs.argv;

const run = async () => {
  const day = argv.day || argv.d;
  const { default: dayFunc } = await import(`./${day}`);
  dayFunc();
};

run();
