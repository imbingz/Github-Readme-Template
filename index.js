const inquirer = require('inquirer');

let date = new Date().getFullYear();

console.log(date);

console.log('Welcome to Github README generator');

const questions = [
  {
    type: 'input',
    message: 'Enter the name(s) of the project author(s)',
    name: 'authorName',
  },
	{
		type: 'input',
		message: 'Enter your github username.',
		name: 'username',
	},
	{
		type: 'input',
		message: 'Enter your Github Project Repo name?',
		name: 'repoName',
	},
	{
		type: 'confirm',
		message: 'Do you want to use your Repo Name as your project title?',
		name: 'useRepoName',
		default: true,
	},
	{
		type: 'input',
		message: 'Enter your project title',
		name: 'title',
		when: function(answers) {
			return answers.useRepoName !== true;
		},
  },
  {
    type: 'confirm',
    name: 'screenshots',
    message: 'Would you like to add screenshots or demo to README?',
    default: false,
  },
  {
    type: 'input',
    name: 'imageURL',
    message: 'Enter the image paths or urls of screenshots or demo',
    when: function(answers) {
      return answers.screenshots !== false;
    },
  },
  {
    type: 'input',
    message: 'What is your project objective?',
    name: 'objective',
  },
	{
		type: 'input',
		message: 'Provide the User Story for your propject',
		name: 'userStory',
  },
  {
    type: 'input',
    message: 'List the technologies used for the Project',
    name: 'technologies',
  },
	{
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'Provide instructions on how to use your project.',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Enter the parties and links you like to give credits to',
		name: 'credits',
	},
	{
		type: 'input',
		message: 'How do you test your project?',
		name: 'test',
	},
	{
		type: 'list',
		message: 'Select license',
		name: 'license',
		choices: [ 'MIT', 'GNU-GPLv3', 'APACHE 2.0', 'Mozilla Public 2.0' ],
		default: 'MIT',
	},
	
];

inquirer.prompt(questions).then((answers) => {
	console.log(JSON.stringify(answers, null, '\t'));
});
