import {expect} from 'chai';
import 'babel-polyfill';
import puppeteer from 'puppeteer';
import {beforeAndAfter} from '../environment';
import {testBaseUrl} from '../test-common';


describe('React application', () => {
  let browser, page;
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  describe('open page', () => {
    it('should display title', async () => {
      await page.goto(testBaseUrl);
      expect(await page.$eval('h2', elem => elem.innerText)).to.eql('Hello World!');
    });
  });
});
