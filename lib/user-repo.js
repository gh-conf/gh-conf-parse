const _ = require('lodash');
const removeTrailingSlash = require('remove-trailing-slash');
const { GH_GENERAL } = require('@gh-conf/gh-conf-constants');

const ParseConfig = require('./parse-config');

const getCurrRepo = () => {
  let currConfig = ParseConfig();
  return _.get(currConfig, GH_GENERAL.ORIGIN_KEY);
};

const userRepo = (currentPath = getCurrRepo()) => {
  let currRepo = removeTrailingSlash(_.get(currentPath, 'url'));
  if (!currRepo) {
    return;
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
