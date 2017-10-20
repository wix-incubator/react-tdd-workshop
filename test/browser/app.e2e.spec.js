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

  it('should show "X" when first user plays', async () => {
    await page.goto(testBaseUrl);
    (await page.$$('[data-hook="cell"]'))[0].click();
    expect(await page.$$eval('[data-hook="cell"]', elems => elems[0].innerText)).to.equal('X');
  });
});
