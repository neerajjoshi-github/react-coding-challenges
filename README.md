# React Coding Challenges

This repo contains 8 react coding challenges. And my solutions for all those challenges.
You can explore the deployed version of all these challenges by visiting [React Coding Challenges.](https://react-coding-challenges-eosin.vercel.app/)

## Solution Structure

To navigate through the solutions:

- The React code for each challenge resides within the `src/pages` folder.
- Inside the `src/pages` directory, you'll discover individual files, each named after a specific challenge.
- Every file corresponds to a distinct challenge and contains the solution for that particular problem.

## Tools

I have used **React**, **Tailwind Css**, **React Icons** and **Vite** for this project.

## Index

1. [Hex Guesser Game](#1-hex-guesser-game)
2. [Make Points](#2-make-points)
3. [Memory Card Game](#3-memory-card-game)
4. [Text Analyzer](#4-text-analyzer)
5. [Stopwatch](#5-stopwatch)
6. [Analog Clock](#6-analog-clock)
7. [Pomodoro Timer](#7-pomodoro-timer)
8. [Breaking Bad](#8-breaking-bad)

## 1. Hex Guesser Game

### Description

Create a hex color code guesser game where the user can interact with color options and guess the correct color code.

<div align="center">
  <img src="/public/images/readme/hex-guesser.gif" alt="Hex Guesser Game" width="95%" />
</div>

### Features

- **Display the Color:** Show the hex color code to the user.

- **Provide Options:** Offer multiple color options for the user to choose from.

- **Correct Option:** Ensure that one of the options is the correct hex color code.

- **User Feedback:** Provide feedback to the user indicating whether their chosen color is correct or wrong.

- **Reset or Next Question:** After receiving feedback, reset the game or provide an option to move to the next question.

### Optional Features

- **Win Streak Display:** Display the win streak of the player to enhance the gaming experience.

- **Responsiveness:** Make the game responsive to ensure a consistent user experience across different devices.

- **Color Information:** Optionally, provide information to the user about the correct and incorrect color options.

## 2. Make Points

### Description

Create an interactive application where users can add points by clicking on the screen. Implement undo and redo functionality to remove and add points, respectively.

<div align="center">
  <img src="/public/images/readme/make-points.gif" alt="Make Points" width="95%" />
</div>

### Features

- **Undo Button:** Provide a button to remove the last point created by the user.

- **Redo Button:** Include a button to add the last point removed by the user.

- **Click to Add Point:** Allow users to click anywhere on the screen (or you can have a region) to add a point.

### Optional Features

- **Point Counter:** Display a counter indicating the number of points on the screen.

- **Reset Button:** Optionally, include a button to reset the points and start over.

## 3. Memory Card Game

## Description

Your task is to create a memory card game with a 2 x 3 grid, consisting of 6 cards. There should be pairs of cards with the same values, and each pair should appear only once in the entire set.

At the start, all card values are concealed. The gameplay involves revealing the values of cards by clicking on them. When two cards with matching values are clicked, they are removed from the screen. In case of a mismatch, the cards are closed. The objective is to successfully match and remove all cards to achieve victory.

<div align="center">
  <img src="/public/images/readme/memory-card-game.gif" alt="Memory Card Game" width="95%" />
</div>

## Features

- **Card Value Display:** Allow users to click on a card to reveal its value.

- **Pair Matching:** Implement logic to identify and remove pairs of cards with identical values.

- **Winning Condition:** Declare victory when all cards have been successfully matched and removed.

## Optional Features

- **Move Counter:** Implement a move counter to track the number of moves it takes for the player to win.

- **Variable Card Selection:** Provide an option for users to customize the game by selecting a different number of cards, enhancing the difficulty level.

- **Card Shuffling:** Add a feature to shuffle the positions of cards at the beginning of each game, increasing the randomness and challenge for players.

## 4. Text Analyzer

### Description

Create a text analyzer that processes user-inputted text and provides information on the number of pronouns, paragraphs, words, and characters.

<div align="center">
  <img src="/public/images/readme/text-analyzer.gif" alt="Text Analyzer" width="95%" />
</div>

### Features

- **Pronoun Counter:** Count the number of pronouns provided by the user.

- **Word Counter:** Determine the total number of words. Consider space-separated strings as individual words.

- **Character Count:** Provide the total character count.

- **Paragraph Count:** Calculate the number of paragraphs, considering strings separated by line breaks.

### Optional Features

- **Sentence Counter:** Optionally, implement counting sentences, assuming sentence endings with "?", "!", or ".".

- **Longest Word:** Optionally, display the longest word present in the input text.

- **Time to Read:** Optionally, estimate the time required to read the given text, assuming a reading speed of 25 words per minute.

### Resources

<details>
  <summary>You can use this set of pronoun to count number of pronuns.</summary>
  
  ```js
    const pronouns = new Set([
        "i",
        "me",
        "you",
        "he",
        "him",
        "she",
        "her",
        "it",
        "we",
        "us",
        "they",
        "them",
        "myself",
        "yourself",
        "himself",
        "herself",
        "itself",
        "ourselves",
        "yourselves",
        "themselves",
        "who",
        "whom",
        "whose",
        "which",
        "what",
        "whichever",
        "whoever",
        "whomever",
        "this",
        "that",
        "these",
        "those",
        "mine",
        "yours",
        "his",
        "hers",
        "its",
        "ours",
        "theirs",
        "one",
        "oneself",
        "someone",
        "somebody",
        "something",
        "anyone",
        "anybody",
        "anything",
        "everyone",
        "everybody",
        "everything",
        "no one",
        "nobody",
        "nothing",
        "each",
        "either",
        "neither",
        "both",
        "few",
        "many",
        "all",
    ]);
  ```
</details>

## 5. Stopwatch

### Description

Design a stopwatch application that provides timekeeping functionalities.

<div align="center">
  <img src="/public/images/readme/stopwatch.gif" alt="Stopwatch" width="95%" />
</div>

### Features

**Start/Stop Button:** Implement a start/stop button for initiating and halting the stopwatch.

**Reset:** Provide a reset button to clear and reset the stopwatch.

### Optional Features

**Split Time:** Optionally, add a split time feature that allows users to record intermediate time intervals without stopping the main stopwatch.

## 6. Analog Clock

### Description

Create an analog clock that displays the current time, featuring hour, minute, and seconds hands.

<div align="center">
  <img src="/public/images/readme/clock.gif" alt="Clock" width="95%" />
</div>

### Features

**Hour Hand:** Implement an hour hand on the clock that accurately reflects the current hour.

**Minute Hand:** Include a minute hand that indicates the precise minutes of the current time.

**Seconds Hand:** Integrate a seconds hand to provide real-time tracking of seconds.

### Optional Features

**Customization:** Optionally, allow users to customize the clock's appearance, such as background color or hand styles.

## 7. Pomodoro Timer

### Description

Create a Pomodoro Timer application designed to enhance time management during work and break intervals. The application should feature two timers: one for focused work sessions and another for break periods.

<div align="center">
  <img src="/public/images/readme/pomodoro.gif" alt="Pomodoro Timer" width="95%" />
</div>

### Features

**Work Timer:** Develop a work timer that enables users to set the duration of their focused work sessions.

**Break Timer:** Incorporate a break timer that users can customize to fit their preferred break periods.

### Optional Features

**Animation:** Optionally, implement visually appealing animations that correspond to the passage of time.

## 8. Breaking Bad

### Description

Create an app that takes user input and creates intro text like breaking bad.

<div align="center">
  <img src="/public/images/readme/breaking-bad.gif" alt="Breaking Bad" width="95%" />
</div>

### Features

**Element Matching:** Dynamically match the initial characters of the input text to corresponding periodic table element, creating a visually compelling representation of the given text.

### Optional Features

**Info About Elemet** Optionally you can show info about element like atomic number,
atomic weight and valency.

### Resources

<details>
  <summary>You can use this array of perodic elemets.</summary>
  
  ```js
    export const periodicElements = [
        { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicWeight: 1.008 },
        { symbol: "He", name: "Helium", atomicNumber: 2, atomicWeight: 4.0026 },
        { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicWeight: 6.94 },
        { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicWeight: 9.0122 },
        { symbol: "B", name: "Boron", atomicNumber: 5, atomicWeight: 10.81 },
        { symbol: "C", name: "Carbon", atomicNumber: 6, atomicWeight: 12.01 },
        { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicWeight: 14.01 },
        { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicWeight: 16.0 },
        { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicWeight: 18.99 },
        { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicWeight: 20.18 },
        { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicWeight: 22.99 },
        { symbol: "Mg", name: "Magnesium", atomicNumber: 12, atomicWeight: 24.31 },
        { symbol: "Al", name: "Aluminum", atomicNumber: 13, atomicWeight: 26.98 },
        { symbol: "Si", name: "Silicon", atomicNumber: 14, atomicWeight: 28.09 },
        { symbol: "P", name: "Phosphorus", atomicNumber: 15, atomicWeight: 30.97 },
        { symbol: "S", name: "Sulfur", atomicNumber: 16, atomicWeight: 32.07 },
        { symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicWeight: 35.45 },
        { symbol: "K", name: "Potassium", atomicNumber: 19, atomicWeight: 39.1 },
        { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicWeight: 39.95 },
        { symbol: "Ca", name: "Calcium", atomicNumber: 20, atomicWeight: 40.08 },
        { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicWeight: 44.96 },
        { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicWeight: 47.87 },
        { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicWeight: 50.94 },
        { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicWeight: 52.0 },
        { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicWeight: 54.94 },
        { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicWeight: 55.85 },
        { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicWeight: 58.69 },
        { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicWeight: 58.93 },
        { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicWeight: 63.55 },
        { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicWeight: 65.38 },
        { symbol: "Ga", name: "Gallium", atomicNumber: 31, atomicWeight: 69.72 },
        { symbol: "Ge", name: "Germanium", atomicNumber: 32, atomicWeight: 72.63 },
        { symbol: "As", name: "Arsenic", atomicNumber: 33, atomicWeight: 74.92 },
        { symbol: "Se", name: "Selenium", atomicNumber: 34, atomicWeight: 78.96 },
        { symbol: "Br", name: "Bromine", atomicNumber: 35, atomicWeight: 79.9 },
        { symbol: "Kr", name: "Krypton", atomicNumber: 36, atomicWeight: 83.8 },
        { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicWeight: 85.47 },
        { symbol: "Sr", name: "Strontium", atomicNumber: 38, atomicWeight: 87.62 },
        { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicWeight: 88.91 },
        { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicWeight: 91.22 },
        { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicWeight: 92.91 },
        { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicWeight: 95.95 },
        { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicWeight: 98 },
        { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicWeight: 101.1 },
        { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicWeight: 102.9 },
        { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicWeight: 106.4 },
        { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicWeight: 107.9 },
        { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicWeight: 112.4 },
        { symbol: "In", name: "Indium", atomicNumber: 49, atomicWeight: 114.8 },
        { symbol: "Sn", name: "Tin", atomicNumber: 50, atomicWeight: 118.7 },
        { symbol: "Sb", name: "Antimony", atomicNumber: 51, atomicWeight: 121.8 },
        { symbol: "Te", name: "Tellurium", atomicNumber: 52, atomicWeight: 127.6 },
        { symbol: "I", name: "Iodine", atomicNumber: 53, atomicWeight: 126.9 },
        { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicWeight: 131.3 },
        { symbol: "Cs", name: "Cesium", atomicNumber: 55, atomicWeight: 132.9 },
        { symbol: "Ba", name: "Barium", atomicNumber: 56, atomicWeight: 137.3 },
        { symbol: "La", name: "Lanthanum", atomicNumber: 57, atomicWeight: 138.9 },
        { symbol: "Ce", name: "Cerium", atomicNumber: 58, atomicWeight: 140.1 },
        { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, atomicWeight: 140.9 },
        { symbol: "Nd", name: "Neodymium", atomicNumber: 60, atomicWeight: 144.2 },
        { symbol: "Pm", name: "Promethium", atomicNumber: 61, atomicWeight: 145 },
        { symbol: "Sm", name: "Samarium", atomicNumber: 62, atomicWeight: 150.4 },
        { symbol: "Eu", name: "Europium", atomicNumber: 63, atomicWeight: 152.0 },
        { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, atomicWeight: 157.3 },
        { symbol: "Tb", name: "Terbium", atomicNumber: 65, atomicWeight: 158.9 },
        { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, atomicWeight: 162.5 },
        { symbol: "Ho", name: "Holmium", atomicNumber: 67, atomicWeight: 164.9 },
        { symbol: "Er", name: "Erbium", atomicNumber: 68, atomicWeight: 167.3 },
        { symbol: "Tm", name: "Thulium", atomicNumber: 69, atomicWeight: 168.9 },
        { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, atomicWeight: 173.0 },
        { symbol: "Lu", name: "Lutetium", atomicNumber: 71, atomicWeight: 175.0 },
        { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicWeight: 178.5 },
        { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicWeight: 180.9 },
        { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicWeight: 183.8 },
        { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicWeight: 186.2 },
        { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicWeight: 190.2 },
        { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicWeight: 192.2 },
        { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicWeight: 195.1 },
        { symbol: "Au", name: "Gold", atomicNumber: 79, atomicWeight: 197.0 },
        { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicWeight: 200.6 },
        { symbol: "Tl", name: "Thallium", atomicNumber: 81, atomicWeight: 204.4 },
        { symbol: "Pb", name: "Lead", atomicNumber: 82, atomicWeight: 207.2 },
        { symbol: "Bi", name: "Bismuth", atomicNumber: 83, atomicWeight: 208.9 },
        { symbol: "Po", name: "Polonium", atomicNumber: 84, atomicWeight: 209 },
        { symbol: "At", name: "Astatine", atomicNumber: 85, atomicWeight: 210 },
        { symbol: "Rn", name: "Radon", atomicNumber: 86, atomicWeight: 222 },
        { symbol: "Fr", name: "Francium", atomicNumber: 87, atomicWeight: 223 },
        { symbol: "Ra", name: "Radium", atomicNumber: 88, atomicWeight: 226 },
        { symbol: "Ac", name: "Actinium", atomicNumber: 89, atomicWeight: 227 },
        { symbol: "Th", name: "Thorium", atomicNumber: 90, atomicWeight: 232.0 },
        { symbol: "Pa", name: "Protactinium", atomicNumber: 91, atomicWeight: 231.0 },
        { symbol: "U", name: "Uranium", atomicNumber: 92, atomicWeight: 238.0 },
        { symbol: "Np", name: "Neptunium", atomicNumber: 93, atomicWeight: 237.0 },
        { symbol: "Pu", name: "Plutonium", atomicNumber: 94, atomicWeight: 244.0 },
        { symbol: "Am", name: "Americium", atomicNumber: 95, atomicWeight: 243.0 },
        { symbol: "Cm", name: "Curium", atomicNumber: 96, atomicWeight: 247.0 },
        { symbol: "Bk", name: "Berkelium", atomicNumber: 97, atomicWeight: 247.0 },
        { symbol: "Cf", name: "Californium", atomicNumber: 98, atomicWeight: 251.0 },
        { symbol: "Es", name: "Einsteinium", atomicNumber: 99, atomicWeight: 252.0 },
        { symbol: "Fm", name: "Fermium", atomicNumber: 100, atomicWeight: 257.0 },
        { symbol: "Md", name: "Mendelevium", atomicNumber: 101, atomicWeight: 258.0 },
        { symbol: "No", name: "Nobelium", atomicNumber: 102, atomicWeight: 259.0 },
        { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, atomicWeight: 262.0 },
        {  symbol: "Rf",  name: "Rutherfordium",  atomicNumber: 104,  atomicWeight: 267.0 },
        { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicWeight: 270.0 },
        { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicWeight: 271.0 },
        { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicWeight: 270.0 },
        { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicWeight: 277.0 },
        { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicWeight: 276.0 },
        { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicWeight: 281.0 },
        { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicWeight: 280.0 },
        { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicWeight: 285.0 },
        { symbol: "Nh", name: "Nihonium", atomicNumber: 113, atomicWeight: 284.0 },
        { symbol: "Fl", name: "Flerovium", atomicNumber: 114, atomicWeight: 289.0 },
        { symbol: "Mc", name: "Moscovium", atomicNumber: 115, atomicWeight: 288.0 },
        { symbol: "Lv", name: "Livermorium", atomicNumber: 116, atomicWeight: 293.0 },
        { symbol: "Ts", name: "Tennessine", atomicNumber: 117, atomicWeight: 294.0 },
        { symbol: "Og", name: "Oganesson", atomicNumber: 118, atomicWeight: 294.0 },
    ];
```
</details>

## Thank you!!
