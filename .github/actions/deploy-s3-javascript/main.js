const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    try {
    
        core.notice('Hello from my custom javscript action!!');
    
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();