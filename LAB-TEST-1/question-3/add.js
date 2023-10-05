//Question three
// Adding a log files 
const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname, 'Logs');


if (!fs.existsSync(logs)) {
  fs.mkdirSync(logs);
}


process.chdir(logs);

console.log('Creating log files...');

// I made a loop for adding the logs name having some text in it
for (let i = 1; i <= 10; i++) {
  const logName = `log${i}.txt`;
  const logContent = `This is log file ${i}.`;

  fs.writeFileSync(logName, logContent);
  console.log(`Created ${logName}`);
}


