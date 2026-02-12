export function getAllData(database) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(database);
      }, 1000);
    });
  
    return Promise.all([promise]).then((result) => result[0]);
  }
  