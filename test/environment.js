import server from '../src/server';
import {spawn} from 'child_process';
import {sleep} from 'sleep';

const app = server();
export const beforeAndAfter = (port = 3100) => {
  let expressServer;
  let cdnServer;

  before(() => new Promise(resolve => expressServer = app.listen(port, resolve)));

  after(() => expressServer.close());

  if (process.env.WIX_NODE_BUILD_WATCH_MODE !== 'true') {
    before(() => {
      cdnServer = spawn('node', ['./dist/test/browser/mock/cdn-server.js'], {stdio: 'inherit'});
      sleep(1);
    });

    after(() => {
      cdnServer.kill();
    });
  }
};
