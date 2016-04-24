'use strict';

var myPromise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise 1 resolved");
    }, 2000);
});

var myPromise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Promise 2 rejected');
    }, 2000);
});

myPromise1.then(function (data) {
    return console.log('success 1 : ', data);
}).catch(function (error) {
    return console.log('error 1 : ', error);
});
// success 1 :  Promise 1 resolved

myPromise2.then(function (data) {
    return console.log('success 2 : ', data);
}).catch(function (error) {
    return console.log('error 2 : ', error);
});
// error 2 :  Promise 2 rejected