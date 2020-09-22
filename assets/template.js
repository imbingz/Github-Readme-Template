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
    <a href="https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}" target="_blank">
      <img src="https://img.shields.io/github/languages/count/${answers.username
        .trim()
        .toLowerCase()}/${answers.repoName.trim()}?color=important" alt="project-languages-used">
    </a>
    <a href="https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}" target="_blank">
      <img src="https://img.shields.io/github/languages/top/${answers.username
        .trim()
        .toLowerCase()}/${answers.repoName.trim()}?color=blueviolet" alt="project-top-language">
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
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}

  ## Screenshots / Demo
  <kbd>![screenshot-demo](${answers.imageURL})</kbd>
  

  ## Project Objective
  ${answers.objective}
  
  ## User Story
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
