const expect = require('chai').expect;

const { ParseConfig, UserRepo } = require('../index');


describe('validate parse config', () => {
  it('should return correct config with default', () => {
    const http = 'https://github.com/gh-conf/gh-conf-parse';
    const ssh = 'git@github.com:gh-conf/gh-conf-parse';
    const configUrl = ParseConfig()['remote "origin"'].url.replace('.git', '');
    expect(configUrl).to.be.oneOf([http, ssh]);
  });
  it('should return correct config with input path', () => {
    const http = 'https://github.com/gh-conf/gh-conf-parse';
    const ssh = 'git@github.com:gh-conf/gh-conf-parse';
    const configUrl = ParseConfig('.')['remote "origin"'].url.replace('.git', '');
    expect(configUrl).to.be.oneOf([http, ssh]);
  });
});
describe('validates user repo', () => {
  it('should return correct user and repo name', () => {
    expect(UserRepo()).to.deep.equal({'repository': 'gh-conf-parse', 'username': 'gh-conf'});
  });
});
