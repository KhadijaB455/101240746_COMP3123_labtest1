//Question 2: Promises


  const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { message: 'delayed success!' }; // it output this message
        resolve(success);
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('{error: delayed exception!}');// outputs this error message
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  };
  
  async function main() {
    try {
      const output = await resolvedPromise();
      console.log(output);
    } catch (e) {
      console.error(e.message);
    }
  
    try {
      const except = await rejectedPromise();
      console.log(except);
    } catch (e) {
      console.error(e.message);
    }
  }
  
  main();
  