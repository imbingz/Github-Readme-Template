/* GLOBAL VARIALBES ==================================================================================================== */

//Import inquirer and node modules
const inquirer = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

//Import questions.js 
const questions = require('./assets/questions')

// Import template.js
const generateREADME = require('./assets/template')


// Wrap fs.writeFile inside util.promisify
const writeFileAsync = promisify(writeFile);





/* FUNCTIONS ==================================================================================================== */

// Inital welcome message
console.log('Welcome to Github README generator');

//Create a function to prompt user questions
function promptUser() {
	return inquirer.prompt(questions);
}

// Use async... await
async function init() {
  //try ... catch block
	try {
    const answers = await promptUser();
    
    console.log(JSON.stringify(answers, null, '\t'));

		const readme = generateREADME(answers);

    await writeFileAsync('README.md', readme);

		console.log('Successfully wrote to README.md');
	} catch (err) {
		console.log(err);
	}
}

init();
