const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    try {
        const bucket = core.getInput('bucket-name', { required: true });
        const bucketRegion = core.getInput('bucket-region', { required: true });
        const distFolder = core.getInput('dist-folder', { required: true });
        
        core.notice('Hello from my custom javscript action!!');
    
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();