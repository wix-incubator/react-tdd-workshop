import {expect} from 'chai';
import 'babel-polyfill';
import puppeteer from 'puppeteer';
import {beforeAndAfter} from '../environment';
import {testBaseUrl, eventually} from '../test-common';

let browser, page;
const navigate = () => page.goto(testBaseUrl);
const clickCellAt = async index => (await page.$$('[data-hook="cell"]'))[index].click();
const getCellText = index => page.$$eval('[data-hook="cell"]', (elems, index) => elems[index].innerText, index);
const getWinnerMessage = () => page.$eval('[data-hook="winner-message"]', elem => elem.innerText);
const isWinnerMessageVisible = async () => (await page.$('[data-hook="winner-message"]')) !== null;
const save = async () => page.click('[data-hook="save"]');
const load = async () => page.click('[data-hook="load"]');

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

  it('Player "X" should win', async () => {
    await navigate();
    await clickCellAt(0);
    expect(await isWinnerMessageVisible()).to.equal(false);
    await clickCellAt(3);
    await clickCellAt(1);
    await clickCellAt(4);
    await clickCellAt(2);
    expect(await getWinnerMessage()).to.equal('X Wins!');
  });

  it('should save a game', async () => {
    await navigate();
    await clickCellAt(0);
    await save();
    await navigate();
    await load();
    return eventually(async () => {
      expect(await getCellText(0)).to.equal('X');
    });
  });
});
