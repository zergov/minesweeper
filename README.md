# Introduction

As Merinio forays into the regulated world of unionized military installations, one of our potential customers has requested that we add a war situation simulator to our software. In the spirit of learning React, we have decided to host an internal RFP (Request for proposal) to provide them with the ideal solution.

They have specifically asked for a minefield simulator, not unlike the original minesweeper that could be found on every PC in existence. Being a governement entity, they have a long list of requirements and have even included some bonus features that would improve our standing.

# Requirements

In order to be considered in the RFP, your software must have at least the list of basic requirements, but would be better off with all the advanced requirements. It must also conform to the stringent IT requirements of the National Defence, otherwise they will block the project on grounds that it threatens national security.

### Basic Requirements (350 Points)

A recruit must be:

- able to see how many bombs remain.
- able to see how much time they have taken to locate all the bombs.
- able to reset the simulation at any time, losing all progress.
- able to click on a location to reveal it's contents.
- warned if they have clicked on a bomb, this ends the game unless bomb defusal has been be developed.
- informed of the number of adjacent bombs there are on a revealed cell, if there are no adjacent bombs, you can indicate this in the way you see fit.

### Advanced Requirements

A recruit must be:

- able to flag locations as suspected bomb sites. (25pts)
- able to set the level of difficulty. (25pts)

The game must:

- be able to expand the clicked location to make sure all unrevealed locations are surrounded by numbers. (50pts)
- Automatically flag all locations once there are as many unrevealed locations as there are bombs. (25pts)
- Show the classic smiley at the top of the window. (25pts)
- Make a noise when a bomb explodes. (25pts)

### IT Requirements

Due to internal security requirements, this application must:

- use the latest version of React.
- use Node.js if a server is required.
- run on the latest version of chrome.
- have no game breaking bugs.

### Bonus

A recruit must be:

- able to defuse a bomb if you click on one by accident, this should be accompanied by a skill test. (75pts)
- able to change the colors of the interface. (50pts)
- able to set a custom map size and number of bombs. (50pts)

The game must:

- Add an extreme difficulty where it is possible to have multiple bombs per location. (75pts)

### Extreme Bonus (requires a back end)

- Add a log in system (100pts)
- Add a score board with monthly, yearly and all time high scores. (100pts)
- Add a training system that shows probability of there being a bomb in a location. (100pts)
- Add a timed competitive mode that works like chess game timers and has both players on identical maps. (150pts)

### Subjective points (Total of 50pts)

If you have an amazing score in one category, it can cancel out another.

- Level of fun while playing
- Beauty/Originality of the interface
- Balance of the difficulty slope
- Intuitiveness of the interface

# How to run

To run this, run `cd client/ && yarn && cd .. && cd server/ && yarn && cd ..`, after in two separate tabs `cd client/ && yarn start` and `cd server && node index.js`. If that doesn't work, I don't know what you did wrong.
