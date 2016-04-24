'use strict';

function results(gold, silver, bronze, ...others) {
    console.log(`Podium : `, gold, silver, bronze);
    console.log(`The others : ` + others);
}

results('Angular', 'React', 'Ember', 'Backbone', 'Dojo');
// Podium :  Angular React Ember
// The others : Backbone,Dojo