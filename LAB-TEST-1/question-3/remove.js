//Question Three
//removing the logs files
const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname, 'Logs');


if (fs.existsSync(logs)) {
  
  const files = fs.readdirSync(logs);

  console.log('Files that are being deleted:');
  files.forEach((text) => {
    
    fs.unlinkSync(path.join(logs, text));
    console.log(`deleting file..${text}`)
  });

  
  fs.rmdirSync(logs);
  console.log('Logs directory has been removed.');
} else {
  console.log('The directory does not exist.');
}


