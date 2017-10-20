import {expect} from 'chai';
import 'babel-polyfill';
import puppeteer from 'puppeteer';
import {beforeAndAfter} from '../environment';
import {testBaseUrl} from '../test-common';

let browser, page;
const navigate = () => page.goto(testBaseUrl);
const clickCellAt = async index => (await page.$$('[data-hook="cell"]'))[index].click();
const getCellText = index => page.$$eval('[data-hook="cell"]', (elems, index) => elems[index].innerText, index);

describe('React application', () => {
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  it('should show "X" when first user plays', async () => {
    await navigate();
    expect(await getCellText(0)).to.equal('');
    await clickCellAt(0);
    expect(await getCellText(0)).to.equal('X');
  });
});
