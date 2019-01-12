const checkCleanUrl = require('../index');

const test = [
    ['http://facebook.com', false],
    ['www.google.com/?query=abc', false],
    ['www.twitter.com/user/home', false],
    ['www.redtuve.com', true],
    ['www.les-groses.net', true],
    ['www.nexxx.com', true],
    ['www.freesex.com', true]
]



console.log("Starting  Test Module");

for(let i of test) {
    console.log('Testing for',i[0],checkCleanUrl(i[0]), i[1]);
}

console.log("Test Module Finished");
