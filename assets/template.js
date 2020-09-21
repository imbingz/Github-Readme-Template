// Get the current year
let year = new Date().getFullYear();

// Create a readme Template

function generateREADME(answers) {
	return ` 
  # ${answers.title}

  <p>
  <a href="https://github.com/${answers.username}" target="_blank">
    <img src="https://img.shields.io/github/followers/${answers.username}?label=Follow&logoColor=purple&style=social" alt="github-follow">
  </a>
  <a href="https://choosealicense.com/licenses/${answers.license}/" target="_blank">
    <img alt="license-mit" src="https://img.shields.io/badge/License-${answers.license.toUpperCase()}-brightgreen.svg" />
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img alt="node.js" src="https://img.shields.io/node/v/c?color=blueviolet" />
  </a>
  <a href="https://www.npmjs.com/package/inquirer" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/npm?color=important&logo=npm" />
  </a>
  <a href="https://twitter.com/${answers.twitterName}" target="_blank">
    <img alt="twitter-follow" src="https://img.shields.io/twitter/follow/${answers.twitterName}?label=Follow&style=social" />
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

  ## Author Info
  Contact the author with any questions! < /br>
   Github link: [${answers.username}](https://github.com/${answers.username})

  ## License
  This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © ${year} [${answers.authorName}]

  `;
}

module.exports = generateREADME;
