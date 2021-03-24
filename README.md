# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Maria Babcock**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/simon-game-mariab

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](simon-game.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used https://www.w3schools.com/ to look up different values I could input for certain css properties.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I faced in creating this submission was getting images to appear on the buttons while they are being clicked. In my first attempt I added the images to the buttons, and I added JavaScript functions that would make the images appear when mouse was down and disappear when mouse was up. I found that when an image would appear the button would move and be spaced differently than the rest of the buttons. My next attempt was to try to execute the same thing through CSS, but that had the same result. I noticed that if I let all the images display on the buttons at the same time, there was no spacing issue. From that I was able to determine that it must have been an issue with the default display property of an image. So, my next instinct was to try different display property values that I looked up and found at w3schools.com. No matter which value I tried still had the same spacing problem. It was at this point in time that I took a step back to assess other solutions I could possibly think of. I knew that if an image was displayed on every button at the same time there was no issue, so a solution I came up with was to just have a transparent image displayed on each button when an actual image was not being displayed. That way some image would be displayed on every button at all times, and I would no longer have a spacing issue. I used the method I used in my first attempt, with JavaScript functions, to implement this. But I simply added extra lines that would hide or show the transparent images accordingly. To my excitement, that was the solution that worked and as it was not too complex, it was the solution I stuck with to get images to appear on the button as they are being clicked without changing the button arrangement.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, I have quite a few questions about web development. My first one being, how could I implement scripts in other languages besides JavaScript? With this question I had scripts that may be more computationally heavy in mind, which led me to my next question. For more computationally heavy tasks, should those be implemented using JavaScript or another language such as python? On another topic, I was curious about data storage. How could a website store user data permanently? For example, how would I go about implementing a way to record how many times a certain user has lost the memory game? Another question that I encountered was how would I implement another page on the website that maybe held another game? Would it be more effective to direct to another HTML doc or to hide all elements of the previous page and show the ones for the next? I have many other questions about web development, but these were the biggest questions I encountered while working on my submission. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, the first thing I would do is make the program more robust. While testing my project, I found a few ways to break the game where a button would simply continue pressing or the clue sequence would flash some of the clues. These were cause by me pressing buttons at the wrong times. So, I think a worthy effort to pursue would be to make the program more robust and work properly even through user input errors. The next things I would spend more hours working on would be new features. I would add a feature that showed a user how many times they have played, won, and lost. I would also add a feature that would turn the game into a scoring game. For this I would generate the next clue in the pattern every turn instead of determining the entire pattern at the beginning of the game. Every time a user completes a sequence or turn, that would be one point. So theoretically, the game could be played forever. This would make the game pretty fun because there would be more competitive aspect to the game by adding scoring, and it would be interesting to see just how long of a pattern a user could memorize. If I had even more time after implementing all of that, I would then go ahead and try to add some sort of high scores or record feature, so that a user could know what their scoring record is, which they could then try to beat. Those are all the efforts I would most likely pursue if I had more time to work on this project.



## License

    Copyright [Maria Babcock]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
