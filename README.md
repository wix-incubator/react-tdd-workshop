# React Tdd Workshop

[![Build Status](https://travis-ci.org/wix/react-tdd-workshop.svg?branch=master)](https://travis-ci.org/wix/react-tdd-workshop)

Welcome to my React TDD workshop!

# Getting started

### Working locally

All you need is a mac + node > 6.X.X:

1. `git clone git@github.com:wix/react-tdd-workshop.git`
2. `npm install`
3. `npm test`
4. Start working :sunglasses:

### Working on a web environment

We have a full online environment which you can use for everything you need!

1. Go to [Cloud 9](https://c9.io) and create an account / login using your Github account
2. Ask me for permissions and link to a workspace
3. `git checkout steps-5`
3. npm test
4. Start working :sunglasses:

An alternative Cloud9 setup (If you are not part of this workshop and want to play with it):

1. Create a new workspace in Cloud9
2. Mark it as "node" environment
3. In "Clone from Git or Mercurial URL (optional)" add my github url: `git@github.com:wix/react-tdd-workshop.git`
4. Create workspace
5. Move to the relevant branch: `git checkout steps-5-cloud-9`
5. npm install
6. npm test

* This alternative setup will require that you will login using your Github account

# What is this workshop about?

We will be building the [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game, using React + Mocha + Puppeteer, all TDD, (almost) without openning the browser!

The end result will be something like this:

<img width="241" src ="assets/tic-tac-toe.png" />


# Workshop

### What we had so far (or: the parts that I'm showing during the workshop)

1. Browser test for displaying 'X' after first user click.
2. Browser test for 'X' user winning the game.
3. Component test for displaying 'O' after second user click.
4. Component test for 'O' user winning the game.
5. Refactor winning logic to a separate method + add unit test for it.

### Workshop tasks

1. Complete game winning logic: write unit tests for the different game winning scenarios (all rows, columns/diagonals/tie).
2. Write a component test verifiying a user cannot press a non empty cell.
3. Write a component test for a tie (show a "It's a tie!" message).
4. Write a browser test for marking next user in a special color (show 'X' and 'O' users and mark next user in special color).
5. Write a component test for displaying the number of wins next to each user: Win a game. Press a "new game" button, and win the game again.


<details>
  <summary><B>Bonuses</B></summary>
  <p>
  
  _Bonus1: Add a server for game winning counter persistance_

  1. Write a browser test: 
      
      a. Win a game.
      
      b. Refresh the page.
      
      c. Test for winning count.
      
   2. Write an integration test for server api endpoints
   3. Optional: write a component test for:
      
      a. Sending a post request on win.
      
      b. Displaying saved winnings on load.
   
 _Bonus 2: Add an option to save/load an existing game (using save/load buttons)_

</details>
