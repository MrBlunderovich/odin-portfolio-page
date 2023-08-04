/**
 * @typedef {object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} screenshot
 * @property {string} description
 * @property {string} source
 *
 * @typedef {Array<Project>} Projects
 *
 * @type Projects
 */
const projects = [
  {
    id: "1",
    title: "Battleship game",
    screenshot: new URL("/screenshots/battleship.png", import.meta.url).href,
    source: "https://github.com/MrBlunderovich/odin-battleship",
    description:
      "A game with moderately intelligent algorithm for a computer player. Built in TDD style in mind.",
  },
  {
    id: "2",
    title: "Knight's travails",
    screenshot: new URL("/screenshots/knights.png", import.meta.url).href,
    source: "https://github.com/MrBlunderovich/odin-knights-travails",
    description:
      "A visualization of a breadth-first graph search of a short path for a chess knight.",
  },
  {
    id: "3",
    title: "Weather app",
    screenshot: new URL("/screenshots/weather.png", import.meta.url).href,
    source: "https://github.com/MrBlunderovich/odin-weather",
    description:
      "An app that loads data from weatherapi.com and displays it in a couple of ways including windguru.cz-style three day tabular forecast.",
  },
  {
    id: "4",
    title: "Calendar",
    screenshot: new URL("/screenshots/calendar.png", import.meta.url).href,
    source: "https://github.com/MrBlunderovich/calendar",
    description:
      "My early experience with React components. A circular calendar representing a year as I see it in my imagination. It is also meant to draw attention to the velocity of time passing.",
  },
];

export default projects;
