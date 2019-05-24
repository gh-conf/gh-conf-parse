const iniParser = require('iniparser');
const { GH_PATH } = require('@gh-conf/gh-conf-constants');


const parseConfig = () => {
  return iniParser.parseSync(GH_PATH.CONFIG);
};


module.exports = parseConfig;
