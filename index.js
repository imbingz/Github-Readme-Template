/* GLOBAL VARIALBES ==================================================================================================== */

//Import inquirer and node modules 
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util')

// Wrap fs.writeFile inside util.promisify
const writeFileAsync = util.promisify(fs.writeFile)

// Get the current year 
let year = new Date().getFullYear();


// Set inquirer prompt questions
console.log('Welcome to Github README generator');

const questions = [
  {
    //Author Name
		type: 'input',
		message: 'Enter the full name(s) of the project author(s)',
		name: 'authorName',
		validate: function(name) {
			console.log(name.split(' ').length);
			if (name.split(' ').length >= 2) {
				return true;
			}

			return 'Please enter the FULL name(s) of the project author(s)';
		},
	},
  {
    //Github Username
		type: 'input',
		message: 'Enter your github username',
		name: 'username',
		validate: function(username) {
			if (username) {
				return true;
			}

			return 'Enter your github username';
		},
	},
  {
    // Github REPO name
		type: 'input',
		message: 'Enter your Github Project Repo name',
		name: 'repoName',
		validate: function(reponame) {
			if (reponame) {
				return true;
			}

			return 'Enter your Github Project Repo name';
		},
	},
  // {
  //   //Check on title 
	// 	type: 'confirm',
	// 	message: 'Do you want to use your Repo Name as your project title?',
	// 	name: 'useRepoName',
	// 	default: true,
	// },
  // {
    // Enter Title if different from REPO name
	// 	type: 'input',
	// 	message: 'Enter your project title',
	// 	name: 'title',
	// 	when: function(answers) {
	// 		return answers.useRepoName !== true;
	// 	},
	// 	validate: function(title) {
	// 		if (title) {
	// 			return true;
	// 		}

	// 		return 'Enter your project title';
	// 	},
	// },
  {
    //Check on Screenshots and/or Demo
		type: 'confirm',
		name: 'screenshots',
		message: 'Would you like to add screenshots or demo to README?',
		default: false,
	},
  {
    // Get image path and/or URL
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or urls of screenshots or demo',
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Enter the image paths or urls of screenshots or demo';
		},
	},
  {
    //Project objective
		type: 'input',
		message: 'What is your project objective?',
		name: 'objective',
		validate: function(objective) {
			if (objective) {
				return true;
			}

			return 'What is your project objective?';
		},
	},
  {
    // Project user-story
		type: 'input',
		message: 'Provide the User Story for your propject',
		name: 'userStory',
		validate: function(userstory) {
			if (userstory) {
				return true;
			}

			return 'Provide the User Story for your propject';
		},
	},
  {
    //Technologies used
		type: 'input',
		message: 'List the technologies used for the Project',
		name: 'technologies',
		validate: function(tech) {
			if (tech) {
				return true;
			}

			return 'List the technologies used for the Project';
		},
	},
  {
    //Installation
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
		validate: function(install) {
			if (install) {
				return true;
			}

			return 'What are the steps required to install your project?';
		},
	},
  {
    // How to use
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		validate: function(use) {
			if (use) {
				return true;
			}

			return 'Provide instructions on how to use your project';
		},
	},
  {
    //Credits / Reference (optional)
		type: 'input',
		message: 'Enter the parties and links you like to give credits to',
		name: 'credits',
	},
  {
    // Tests (optional)
		type: 'input',
		message: 'How do you test your project?',
		name: 'test',
	},
  {
    // License 
		type: 'list',
		message: 'Select license',
		name: 'license',
		choices: [ 'MIT', 'GNU-GPLv3', 'APACHE 2.0', 'Mozilla Public 2.0' ],
		default: 'MIT',
	},
];


/* FUNCTIONS ==================================================================================================== */


// inquirer.prompt(questions).then((answers) => {
// 	console.log(JSON.stringify(answers, null, '\t'));
// });

//Create a function to prompt user questions 
function promptUser() {
  return inquirer.prompt(questions)
}

// Create a function to generate README.md
function generateREADME(answers) {
  return `
  
  # ${answers.repoName}

  <p>
  <a href="https://github.com/{answers.username}" target="_blank">
    <img src="https://img.shields.io/github/followers/{answers.username}?label=Follow&logoColor=purple&style=social" alt="github-follow">
  </a>
  <a href="https://choosealicense.com/licenses/mit/" target="_blank">
    <img alt="license-mit" src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
  </a>
  <a href="https://choosealicense.com/licenses/mpl-2.0/" target="_blank">
    <img alt="license-mozilla" src="https://img.shields.io/badge/License-Mozilla%20PL%202.0-blue.svg" />
  </a>
  <a href="https://choosealicense.com/licenses/apache-2.0/"  target="_blank">
    <img alt="license-apache" src="https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg" />
  </a>
  <a href="https://choosealicense.com/licenses/gpl-3.0/"  target="_blank">
    <img alt="license-gnu" src="https://img.shields.io/badge/License-GNU%20GPLv3-success.svg" />
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img alt="node.js" src="https://img.shields.io/node/v/c?color=blueviolet" />
  </a>
  <a href="https://www.npmjs.com/package/inquirer" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/npm?color=important&logo=npm" />
  </a>
  <a href="https://twitter.com/imbingz" target="_blank">
    <img alt="twitter-follow" src="https://img.shields.io/twitter/follow/imbingz?label=Follow&style=social" />
  </a>
</p>

  ## Table of Content
  * [ Project Links ](#Project-Links)
  * [ Screenshots / Demo ](#Screenshots)
  * [ Description ](#Desciption)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Credits and Reference ](#Credits-and-Reference)
  * [ Tests ](#Tests)
  * [ Author Info ](#Author-info)
  * [ License ](#License)
  #

  ##  Project Links
  https://github.com/${answers.username}/${answers.repoName}

  ## Screenshots / Demo
  <kbd>![screenshot-demo](./assets/images/m1.png)</kbd>
  
  ## Description 

  #### Project Objective
  ${answers.objective}
  
  #### User Story
  ${answers.userStory}

  ## Technologies 
  ${answers.tech}

  ## Installation
  ${answers.install}

  ## Usage 
  ${answers.use}
  
  ## Credits and Reference
  ${answers.credits}

  ## Tests
  ${answers.test}

  ## Author Info
  Contact the author with any questions! < /br>
  Github Username: ${answers.username}

  ## License
  This project is [${answers.license}](https://choosealicense.com/licenses/mit/) licensed.<br />

  Copyright © ${year} [${answers.authorName}]

  `
}