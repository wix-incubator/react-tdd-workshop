import {expect} from 'chai';
import fetch from 'node-fetch';
import {testBaseUrl} from '../test-common';
import {beforeAndAfter} from '../environment';

describe('When rendering', () => {

  beforeAndAfter();

  it('should save a game', async () => {
    const aGame = {board: [['X', 'O', ''], ['', '', ''], ['', '', '']]};
    await fetch(`${testBaseUrl}/api/game`, {
      method: 'POST',
      body: JSON.stringify(aGame),
      headers: {'Content-Type': 'application/json'},
    });
    const response = await fetch(`${testBaseUrl}/api/game`);
    expect(await response.json()).to.eql(aGame);
  });
});
