'use strict';

function results(gold, silver, bronze) {
    console.log('Podium : ', gold, silver, bronze);

    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
    }

    console.log('The others : ' + others);
}

results('Angular', 'React', 'Ember', 'Backbone', 'Dojo');
// Podium :  Angular React Ember
// The others : Backbone,Dojo