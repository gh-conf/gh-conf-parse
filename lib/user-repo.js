const _ = require('lodash');
const removeTrailingSlash = require('remove-trailing-slash');
const { GH_GENERAL } = require('@gh-conf/gh-conf-constants');

const ParseConfig = require('./parse-config');

const getCurrRepo = (currConfig) => {
  return _.get(currConfig, GH_GENERAL.ORIGIN_KEY);
};

const userRepo = (currentPath) => {
  let currOrigin = currentPath || getCurrRepo(ParseConfig());
  let currRepo = removeTrailingSlash(_.get(currOrigin, 'url'));
  if (!currRepo) {
    return undefined;
  }

  // removing .git suffix from github url in config
  currRepo = currRepo.replace('.git', '');
  
  const [ username, repository ] = currRepo.split('/').slice(-2);
  return {
    repository,
    username
  };
};


module.exports = userRepo;
