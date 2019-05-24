const expect = require('chai').expect;

const { ParseConfig, UserRepo } = require('../index');


describe('validate parse config', () => {
  it('should return correct config', () => {
    expect(ParseConfig()['remote "origin"'].url).to.equal('https://github.com/gh-conf/gh-conf-parse.git');
  });
});

describe('validates user repo', () => {
  it('should return correct user and repo name', () => {
    expect(UserRepo()).to.deep.equal({'repository': 'gh-conf-parse', 'username': 'gh-conf'});
  });
});
