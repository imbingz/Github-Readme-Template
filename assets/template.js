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
  Github Username: ${answers.username}

  ## License
  This project is [${answers.name}](https://choosealicense.com/licenses/${answers.value}/) licensed.<br />

  Copyright © ${year} [${answers.authorName}]

  `;

}

module.exports = generateREADME; 