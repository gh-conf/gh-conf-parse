const iniParser = require('iniparser');
const { GH_PATH } = require('@gh-conf/gh-conf-constants');


const parseConfig = (currentPath) => {
  
  let path = GH_PATH.CONFIG;
  if (currentPath) {

    path = `${currentPath}/${path}`;
  }

  return iniParser.parseSync(path);
};


module.exports = parseConfig;
