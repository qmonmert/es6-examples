"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this._age = 0;
    }

    _createClass(Person, [{
        key: "whoIAm",
        value: function whoIAm() {
            console.log("Hello I'm " + this.name + " (" + this._age + ")");
        }
    }, {
        key: "age",
        get: function get() {
            return this._age;
        },
        set: function set(value) {
            this._age = value;
        }
    }]);

    return Person;
}();

var bob = new Person("Bob");
bob.age = 27;
bob.whoIAm(); // Hello I'm Bob (27)