// Get the current year
let year = new Date().getFullYear();

// Create a readme Template

function generateREADME(answers) {
	//Set additional project links

	let additionalProjectLinks = '';

	if (answers.projectLinks) {
		additionalProjectLinks = answers.projectLinks.split(',').join('<br>');
	}

	//Set Screenshots template according to the user iniput
	let screenshots = '';
	if (answers.imageURL) {
		for (let i = 0; i < answers.imageURL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
		}
	}

	// Main README structure
	return ` 
  # ${answers.title.toUpperCase()}

  [![github-follow](https://img.shields.io/github/followers/${answers.username
      .trim()
      .toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.username.trim().toLowerCase()})
  [![project-languages-used](https://img.shields.io/github/languages/count/${answers.username
      .trim()
      .toLowerCase()}/${answers.repoName.trim()}?color=important)](https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()})
  [![project-top-language](https://img.shields.io/github/languages/top/${answers.username
      .trim()
      .toLowerCase()}/${answers.repoName.trim()}?color=blueviolet)](https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()})
  [![license](https://img.shields.io/badge/License-${answers.license
      .toUpperCase()
      .split('-')
      .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

  ## Table of Content
  * [ Project Links ](#Project-Links)
  * [ Screenshots / Demo ](#Screenshots)
  * [ Project Objective ](#Project-Objective)
  * [ User Story ](#User-Story)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Credits and Reference ](#Credits-and-Reference)
  * [ Tests ](#Tests)
  * [ Author Contact ](#Author-Contact)
  * [ License ](#License)
  #

  ##  Project Links
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}<br>
  ${additionalProjectLinks}

  ## Screenshots / Demo
  ${screenshots}
  
  ## Project Objective
  ${answers.objective}
  
  ## User Story
  ${answers.userStory}

  ## Technologies 
 
  ${ answers.technologies}
  
  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}
  
  ## Credits and Reference
  ${answers.credits}

  ## Tests
  ${answers.test}

  ## Author Contact
  Contact the author with any questions!<br>
  Github link: [${answers.username
		.trim()
		.toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})<br>
  Email: ${answers.email}

  ## License
  This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © ${year} [${answers.authorName.trim().toUpperCase()}]
  
  <hr>
  <p align='center'><i>
  This README was generated with ❤️ by ${answers.authorName.trim().toUpperCase()}
  </i></p>
  `;
}

module.exports = generateREADME;
