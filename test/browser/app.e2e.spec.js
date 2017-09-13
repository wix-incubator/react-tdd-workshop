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

  it('should have an "X" after first use plays', async () => {
    await page.goto(testBaseUrl);
    const cells = await page.$$('[data-hook="cell"]');
    await cells[0].click();
    expect(await cells[0].evaluate(elem => elem.innerText)).to.equal('X');
  });
});
