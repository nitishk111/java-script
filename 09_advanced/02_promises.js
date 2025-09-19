// First type
const myPromise = new Promise((resolve, reject) => {
  //Do async task
  setTimeout(() => {
    console.log("Async task done");
    resolve();
  }, 6000);
});
myPromise.then(() => console.log("Promised Consumed")); // first async tak is completed then resolve() executen, then, function inside of then runs

// 2nd Type
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
  }, 5000);
}).then(() => {
  console.log("Async task 2 done");
});

//Third promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello! Promise Resolved");
  }, 2000);
});
promise3.then((x) => {
  console.log(x);
});

// Fourth type
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      resolve({ userName: "Nitish", age: 12 });
    } else {
      reject("Error");
    }
  });
});

promise4
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => console.log(userName))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise 4 is completed"));

// Promise 5

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ userName: "Nitish", age: 12 });
    } else {
      reject("Error");
    }
  }, 1000);
});

async function consumePrommise5() {
  try {
    const resp = await promise5;
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

async function getUser() {
  try {
    const resp = await fetch("https://api.github.com/users/nitishk111");
    const data = await resp.json();
    console.log(data);
  } catch (e) {
    console.log(e); // as await is async, this block will not get executed, if problem is there
  }
}
// getUser();

fetch("https://api.github.com/users/nitishk111") // fetch gets priority; as micro task queue have more priority
  .then((resp) => resp.json())
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message))
  .finally("link Fetched");
