// Get the current year
let year = new Date().getFullYear();

// Create a readme Template

function generateREADME(answers) {
	return ` 
  # ${answers.title.toUpperCase()}

  <p>
  <a href="https://github.com/${answers.username.trim().toLowerCase()}" target="_blank">
    <img src="https://img.shields.io/github/followers/${answers.username
			.trim()
			.toLowerCase()}?label=Follow&logoColor=purple&style=social" alt="github-follow">
  </a>
  <a href="https://choosealicense.com/licenses/${answers.license}/" target="_blank">
    <img alt="license-mit" src="https://img.shields.io/badge/License-${answers.license
			.toUpperCase()
			.split('-')
			.join('v')}-brightgreen.svg" />
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
  * [ Contact Author ](#Contact-Author)
  * [ License ](#License)
  #

  ##  Project Links
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}

  ## Screenshots / Demo
  <kbd>![screenshot-demo](${answers.imageURL})</kbd>
  
  ## Description 

  #### Project Objective
  ${answers.objective}
  
  #### User Story
  ${answers.userStory}

  ## Technologies 
  ${answers.technologies}

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}
  
  ## Credits and Reference
  ${answers.credits}

  ## Tests
  ${answers.test}

  ## Contact Author
  Contact the author with any questions! < /br>
  Github link: [${answers.username.trim().toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})
  Email: ${answers.email}

  ## License
  This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © ${year} [${answers.authorName.trim().toUpperCase()}]

  _This README was generated with ❤️ by [${answers.username
		.trim()
		.toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})_

  `;
}

module.exports = generateREADME;
