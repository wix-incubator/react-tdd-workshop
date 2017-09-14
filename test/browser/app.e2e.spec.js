import {expect} from 'chai';
import 'babel-polyfill';
import puppeteer from 'puppeteer';
import {beforeAndAfter} from '../environment';
import {testBaseUrl} from '../test-common';

let browser, page;
const navigate = (url = '') => page.goto(`${testBaseUrl}${url}`);
const clickCellAt = async index => (await page.$$('[data-hook="cell"]'))[index].click();
const getCellContentAt = async index => (await page.$$('[data-hook="cell"]'))[index].evaluate(elem => elem.innerText);
const getWinnerMessage = () => page.$eval('[data-hook="winner-message"]', elem => elem.innerText);
const isWinnerMessageVisible = async () => (await page.$('[data-hook="winner-message"]')) !== null;

describe('React application', () => {
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  it('should have an "X" after first use plays', async () => {
    await navigate();
    expect(await getCellContentAt(0)).to.equal('');
    await clickCellAt(0);
    expect(await getCellContentAt(0)).to.equal('X');
  });

  it('player "X" should win the game', async () => {
    await navigate();
    await clickCellAt(0);
    await clickCellAt(3);
    expect(await isWinnerMessageVisible()).to.equal(false);
    await clickCellAt(1);
    await clickCellAt(4);
    await clickCellAt(2);
    expect(await getWinnerMessage()).to.equal('X wins!');
  });
});
