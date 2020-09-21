const questions = [
	{
		//Author Name
		type: 'input',
		message: 'Enter your FULL name',
		name: 'authorName',
		validate: function(name) {
			// console.log(name.split(' ').length);
			if (name.trim().split(' ').length >= 2) {
				return true;
			}

			return 'It is required to enter your FULL name.';
		},
	},
	{
		//Author Email
		type: 'input',
		message: 'Enter your email',
		name: 'authorName',
		validate: function(email) {
			// console.log(name.split(' ').length);
			if (email) {
				return true;
			}

			return 'It is required to enter your email.';
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

			return 'It is required to enter your github username.';
		},
	},
	{
		// Github REPO name
		type: 'input',
		message: 'Enter your Project Github Repo name (Be sure your input is the SAME as the REPO name on Github.)',
		name: 'repoName',
		validate: function(reponame) {
			if (reponame) {
				return true;
			}

			return 'It is required to enter your Github Project Repo name.';
		},
	},
	//  Project Title
	{
		type: 'input',
		message: 'Enter your project title',
		name: 'title',
		when: function(answers) {
			return answers.useRepoName !== true;
		},
		validate: function(title) {
			if (title) {
				return true;
			}

			return 'It is required to enter your project title.';
		},
	},
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
		message: 'Enter the image paths or urls of screenshots or demo.',
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Provide the image paths or urls of screenshots or demo.';
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

			return 'It is required to provide your project objective.';
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

			return 'It is required to provide the User Story for your propject.';
		},
	},
	{
		//Technologies used
		type: 'input',
		message: 'List the technologies used for the Project. (Use comma "," to separate each technology)',
		name: 'technologies',
		validate: function(tech) {
			if (tech) {
				return true;
			}

			return 'It is required to list the technologies used for the Project.';
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

			return 'It is required to provide steps to install your project.';
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

			return 'It is required to provide instructions on how to use your project.';
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
		message: 'Please select a license for your project.',
		name: 'license',
		choices: [
			{
				name: 'MIT',
				value: 'mit'
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0'
			},
			{
				name: 'GNU AGPLv3',
				value: 'agpl-3.0'
			},
			{
				name: 'GNU LGPLv3',
				value: 'lgpl-3.0'
			},
			{
				name: 'APACHE 2.0',
				value: 'apache-2.0'
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0'
			},
			{
				name: 'The Unlicense',
				value: 'unlicense'
			},
			{
				name: 'Boost Software 1.0 ',
				value: 'bsl-1.0'
			}
		],
	},
	{
		//Check on Twitter follow
		type: 'confirm',
		name: 'twitter',
		message: 'Would you like others to connect with you on Twitter?',
		default: false,
	},
	{
		// Get twitter username
		type: 'input',
		name: 'twitterName',
		message: 'Enter your Twitter username',
		when: function(answers) {
			return answers.twitter !== false;
		},
		validate: function(twitterName) {
			if (twitterName) {
				return true;
			}

			return 'Enter your Twitter username for others to connect with you on Twitter';
		},
	},
];

module.exports = questions;
