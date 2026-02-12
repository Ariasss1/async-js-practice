export function summarize(...promises) {
    return Promise.all(promises)
      .then(results => results.reduce((total, num) => total + num, 0));
  }
  