var myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

var myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 2000);
});

myPromise1
    .then((data) => console.log('success 1 : ', data))
    .catch((error) => console.log('error 1 : ', error));
// success 1 :  Promise 1 resolved

myPromise2
    .then((data) => console.log('success 2 : ', data))
    .catch((error) => console.log('error 2 : ', error));
// error 2 :  Promise 2 rejected