//Question 1: ES6 Features


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (array) => {
  return new Promise((resolve, reject) => {
    const filter = array
      .filter(item => typeof item === 'string')
      .map(item => item.toLowerCase());

    if (filter.length > 0) {
      resolve(filter);
    } else {
      reject("No lowercase was found.");
    }
  });
}

lowerCaseWords(mixedArray)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
