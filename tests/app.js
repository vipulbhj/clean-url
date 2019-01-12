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


function printTestInfo(url, expected, output) {
    const templateStr = `
        Running test for ${url}
        Status ${expected === output ? 'SUCCESS': 'FAILED'}
        Expected Result ${expected}
        Output ${output}
    `;

    console.log(templateStr);
}


console.log('The Urls are tested with checkCleanUrl function exposed by this module');

console.log("Starting  Test Module");
for(let i of test) {
    printTestInfo(i[0], i[1], checkCleanUrl(i[0]));
}

console.log("Test Module Finished");
