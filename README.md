# gh-conf-parse

[![Build](https://img.shields.io/travis/com/gh-conf/gh-conf-parse.svg)](https://travis-ci.com/gh-conf/gh-conf-parse/)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/gh-conf-parse.svg)](https://github.com/gh-conf/gh-conf-parse)
[![LICENSE](https://img.shields.io/npm/l/@gh-conf/gh-conf-parse.svg)](https://github.com/gh-conf/gh-conf-parse/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/@gh-conf/gh-conf-parse.svg)](https://www.npmjs.com/package/@gh-conf/gh-conf-parse)

Parser for parsing information from github config file

## Install

```
npm install @gh-conf/gh-conf-parse
```

## Usage

```js
const { ParseConfig, UserRepo } = require('@gh-conf/gh-conf-parse');

const CurrConfig = ParseConfig();

// Output
// {
//    core:{
//       repositoryformatversion:'0',
//       filemode:'true',
//       bare:'false',
//       logallrefupdates:'true',
//       ignorecase:'true',
//       precomposeunicode:'true'
//    },
//    'remote "origin"':{
//       url:'https://github.com/gh-conf/gh-conf-parse.git',
//       fetch:'+refs/heads/*:refs/remotes/origin/*'
//    },
//    'branch "master"':{
//       remote:'origin',
//       merge:'refs/heads/master'
//    }
// }


const userRepo = UserRepo();

// Output
// {
//   repository:'gh-conf-parse',
//   username:'gh-conf'
// }

```

## API

#### `ParseConfig`

- Returns complete git config as JSON

#### `UserRepo`

- Returns repo owner name and repository name

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-conf-parse/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
