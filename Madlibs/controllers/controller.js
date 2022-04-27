// Requires
const { getMLnames, getMLlastNames, getMLpronoun, getMLtown, getMLfamily, getMLraised, getMLambition, getMLcondition, getMLresult, getMLage, getMLdeath, getMLadvice } = require('./arrays');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();


// Convert text string into ascii values per character and turn numbers into one int.
function getCharCodes(nameString, age){
    let nameSum = 0;
    let base = 0;
    let baseAdd = 0;
    let slength = nameString.length;
    if (slength > 10) {
        slength = 10;
    }
    for(let i = 0; i < slength; i++){
        let code = nameString.charCodeAt(i);
        base = Math.pow(10, i);
        baseAdd = code * base;
        nameSum = nameSum + baseAdd;
    }
    return nameSum * age;
}


// Generate MadLib
/* In a past life <input name> was born <name> <last name>.
** <name> was born in <town> to a family of <family>.
** Raised by <raised>, <name>'s life ambition was to
** <ambition>, <condition> <result>
**
** Sadly, <name> passed away at the age of <old age> <cause of death>.  On
** <his / her> tombstone is written the sage advice:
**
** <adice from outside API> */
function getStoryAPI (v, inputName) {
    let story = "In a past life, " + inputName + " was born " + getMLnames(v) + " " + getMLlastNames(v) + ".  ";
    story = story + getMLnames(v) +  " was born in " + getMLtown(v) + " to a family of " + getMLfamily(v) + ".  ";
    story = story + "Raised by " + getMLraised(v) + ", " + getMLnames(v) + "'s life ambition was to ";
    story = story + getMLambition(v) + ", " + getMLcondition(v) + " " + getMLresult(v) + ".  Sadly, ";
    story = story + getMLnames(v) +  " passed away at the age of " + getMLage(v) + " " + getMLdeath(v) + ".  On ";
    story = story + getMLpronoun(v) + " tombstone is written the sage advice: " + getMLadvice(v);
    return story;
}
function getStoryP1 (v, inputName) {
    let story = "In a past life, " + inputName + " was born " + getMLnames(v) + " " + getMLlastNames(v) + ".  ";
    story = story + getMLnames(v) +  " was born in " + getMLtown(v) + " to a family of " + getMLfamily(v) + ".  ";
    story = story + "Raised by " + getMLraised(v) + ", " + getMLnames(v) + "'s life ambition was to ";
    story = story + getMLambition(v) + ", " + getMLcondition(v) + " " + getMLresult(v) + ".";
    return story;
}

function getStoryP2 (v, inputName) {
    let story = "Sadly, "  + getMLnames(v) +  " passed away at the age of " + getMLage(v) + " " + getMLdeath(v) + ".  On ";
    story = story + getMLpronoun(v) + " tombstone is written the sage advice:";
    return story;
}

function getStoryAdvice (v, inputName) {
    return getMLadvice(v);
}

module.exports = { getStoryAPI, getStoryP1, getStoryP2, getStoryAdvice, getCharCodes };