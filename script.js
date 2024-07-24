const characters = [
  "Caiden", "Nico", "Jason", "Maxime", "Shannon", "Zoe", "Martha", "Nolwenn", "Eugénie", "Maud", "Moune", "Kat", "Moon", "Pauline", "Emma", "Caitlin", "Casey", "Sharen", "Anna", "Adam", "Salomé"
];

const prompts = [
  { text: "You're going on a long road trip. <br> Who has the best road trip partners?", numCharacters: 2 },
  { text: "You've signed up for a group dance competition. <br> Which group has got the best moves?", numCharacters: 2 },
  { text: "You're invited to share a Sunday joint! <br> Who has the better group to smoke with?", numCharacters: 3 },
  { text: "You're going to Disneyland!. <br> Who would be the best theme park partner?", numCharacters: 1 },
  { text: "Oh no, you're stranded on a deserted island! <br> Which group would live longer?", numCharacters: 3 },
  { text: "The next person is your partner in a cooking competition. <br> Who is going to help you to victory?", numCharacters: 1 },
  { text: "You're starting a band! <br> Which groups has got the best beats?", numCharacters: 2 },
  { text: "You're participating in a charity run! <br> Who's got the better running buddy?", numCharacters: 1 },
  { text: "You're going to a costume party and you want to win the prize for the best costume! <br> Whose partner is going to blow everyone away?", numCharacters: 1 },
  { text: "Uh oh, you're stuck in a traffic jam! <br> Who's going to see the time fly by?", numCharacters: 1 },
  { text: "Woohoo, it's time to go camping! <br> Who would you trust to bring the best camping supplies?", numCharacters: 1 },
  { text: "It's time for game night! <br> Who's bringing the best snacks?", numCharacters: 1 },
  { text: "You're stranded in a foreign country! <br> Which group would be the best at navigating the local language and customs?", numCharacters: 2 },
  { text: "Ka-ching! You're starting a business! <br> Which group has better chances of success?", numCharacters: 3 },
  { text: "You're in a haunted house! <br> Who is having a better time?", numCharacters: 1 },
  { text: "Time for a movie marathon! <br> Which group would have the best movie selection?", numCharacters: 2 },
  { text: "GG everyone! <br> You're competing in a video game tournament! <br> Who's going to dominate?", numCharacters: 2 },
  { text: "It's karaoke night at the bar! <br> Who's bringing home the prizes?", numCharacters: 3 },
  { text: "You're making a short animation and need a cute intro song! <br> Who's going to have the best jingle?", numCharacters: 1 },
  { text: "You want someone to make a custom playlist, just for you! <br> Who knows the stuff you like?", numCharacters: 1 },
  { text: "You want someone to spend the night, watching TV and chilling. <br> Who's the better sleepover bud?", numCharacters: 1 },
  { text: "Time to get organised! <br> You're planning your dream vacation! <br> Who will help plan the most exciting and unforgettable trip?", numCharacters: 1 },
  { text: "It's time to buy a birthday gift! <br> Who is easier to buy for?", numCharacters: 1 },
  { text: "You're writing a novel and you want to base the character on someone you know. <br> Which book is going to be a best-seller?", numCharacters: 1 },
  { text: "This wall is so empty... Time to ask for help! <br> Who is going to create the most interesting piece of art?", numCharacters: 1 },
  { text: "You're looking for a new hobby, but you don't know what to do. <br> Who's going to introduce you to something fun?", numCharacters: 1 },
  { text: "Looks like this party is getting messy! <br> Which party has the most drama?", numCharacters: 3 },
  { text: "You've been so stressed lately! <br> Who's going to help you chill out the most?", numCharacters: 1 },
  { text: "Time for an escape game! <br> Which group is going to win?", numCharacters: 3 },
  { text: "You're going to a murder mystery event. <br> Which group gets most into character?", numCharacters: 2 },
  { text: "You just set up a new book club! <br> Who would have the most thought-provoking discussions?", numCharacters: 3 },
  { text: "Yum, it's time for a potluck dinner! <br> Which group is bringing the best dishes?", numCharacters: 3 },
  { text: "Cowabunga, it's for the beach! <br> Who's having a totally tubular time?", numCharacters: 3 },
  { text: "You want to get in shape, but you need a personal trainer! <br> Who's going to get the most slammin' summer bod?", numCharacters: 1 },
  { text: "ERROR! <br> Your computer crashed! <br> Who's got the IT genius on speed-dial?", numCharacters: 1 },
  { text: "Time for a PowerPoint party! <br> Whose presentation is going to knock your socks off?", numCharacters: 1 },
  { text: "You're going to play a round of How Well Do You Know Me? <br> Who is going to win?", numCharacters: 1 }
];

const promptText = document.querySelector('.prompt-text-box p');
const nextButton = document.getElementById('next-button');
const niniWinnerButton = document.getElementById('nini-winner-button');
const caidenWinnerButton = document.getElementById('caiden-winner-button');

const caidenCharacters = [
  document.getElementById('character-caiden-1'),
  document.getElementById('character-caiden-2'),
  document.getElementById('character-caiden-3')
];

const niniCharacters = [
  document.getElementById('character-nini-1'),
  document.getElementById('character-nini-2'),
  document.getElementById('character-nini-3')
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledPrompts = shuffle([...prompts]);
let currentPromptIndex = 0;

function getRandomCharacters(num, exclude = []) {
  const availableCharacters = characters.filter(character => !exclude.includes(character));
  const selectedCharacters = new Set();
  while (selectedCharacters.size < num) {
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      selectedCharacters.add(availableCharacters[randomIndex]);
  }
  return Array.from(selectedCharacters);
}

function generatePromptAndCharacters() {
  if (currentPromptIndex >= shuffledPrompts.length) {
    shuffledPrompts = shuffle([...prompts]);
    currentPromptIndex = 0;
  }

  const randomPrompt = shuffledPrompts[currentPromptIndex];
  currentPromptIndex++;

  promptText.innerHTML = randomPrompt.text;

  const caidenSelectedCharacters = getRandomCharacters(randomPrompt.numCharacters, ["Caiden"]);
  const niniSelectedCharacters = getRandomCharacters(randomPrompt.numCharacters, ["Nico"]);

  caidenCharacters.forEach((el, index) => {
      if (index < caidenSelectedCharacters.length) {
          el.textContent = caidenSelectedCharacters[index];
          el.style.display = 'inline-block';
      } else {
          el.style.display = 'none';
      }
  });

  niniCharacters.forEach((el, index) => {
      if (index < niniSelectedCharacters.length) {
          el.textContent = niniSelectedCharacters[index];
          el.style.display = 'inline-block';
      } else {
          el.style.display = 'none';
      }
  });
}

let niniScore = 0;
let caidenScore = 0;

function updateScoresUI() {
  document.querySelector('.nini-score').textContent = niniScore;
  document.querySelector('.caiden-score').textContent = caidenScore;
}

function increaseNiniScore() {
  niniScore++;
  updateScoresUI();
  generatePromptAndCharacters();
}

function increaseCaidenScore() {
  caidenScore++;
  updateScoresUI();
  generatePromptAndCharacters();
}

generatePromptAndCharacters();
nextButton.addEventListener('click', generatePromptAndCharacters);
caidenWinnerButton.addEventListener('click', increaseCaidenScore);
niniWinnerButton.addEventListener('click', increaseNiniScore);
