/* Get random number 0 to < max, i.e. non inclusive max */
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCard() {
  const randomIndex = getRandomInt(deckOfCards.length);
  return deckOfCards.at(randomIndex);
}

export function getThreeUniqueCards() {
  const uniqueCards = [getRandomCard()];

  while (uniqueCards.length < 3) {
    const randomCard = getRandomCard();

    if (!uniqueCards.some(card => card.name === randomCard.name && card.filename === randomCard.filename)) {
      uniqueCards.push(randomCard);
    }
  }

  return uniqueCards;
}

export function getCardFileName(name) {
  return deckOfCards.find(card => card.name === name).filename;
}

export const deckOfCards = [
  {
    "name": "The Fool",
    "filename": "RWS_Tarot_00_Fool.jpg"
  },
  {
    "name": "The Magician",
    "filename": "RWS_Tarot_01_Magician.jpg"
  },
  {
    "name": "The High Priestess",
    "filename": "RWS_Tarot_02_High_Priestess.jpg"
  },
  {
    "name": "The Empress",
    "filename": "RWS_Tarot_03_Empress.jpg"
  },
  {
    "name": "The Emperor",
    "filename": "RWS_Tarot_04_Emperor.jpg"
  },
  {
    "name": "The Hierophant",
    "filename": "RWS_Tarot_05_Hierophant.jpg"
  },
  {
    "name": "The Lovers",
    "filename": "TheLovers"
  },
  {
    "name": "The Chariot",
    "filename": "RWS_Tarot_07_Chariot.jpg"
  },
  {
    "name": "Strength",
    "filename": "RWS_Tarot_08_Strength.jpg"
  },
  {
    "name": "The Hermit",
    "filename": "RWS_Tarot_09_Hermit.jpg"
  },
  {
    "name": "Wheel of Fortune",
    "filename": "RWS_Tarot_10_Wheel_of_Fortune.jpg"
  },
  {
    "name": "Justice",
    "filename": "RWS_Tarot_11_Justice.jpg"
  },
  {
    "name": "The Hanged Man",
    "filename": "RWS_Tarot_12_Hanged_Man.jpg"
  },
  {
    "name": "Death",
    "filename": "RWS_Tarot_13_Death.jpg"
  },
  {
    "name": "Temperance",
    "filename": "RWS_Tarot_14_Temperance.jpg"
  },
  {
    "name": "The Devil",
    "filename": "RWS_Tarot_15_Devil.jpg"
  },
  {
    "name": "The Tower",
    "filename": "RWS_Tarot_16_Tower.jpg"
  },
  {
    "name": "The Star",
    "filename": "RWS_Tarot_17_Star.jpg"
  },
  {
    "name": "The Moon",
    "filename": "RWS_Tarot_18_Moon.jpg"
  },
  {
    "name": "The Sun",
    "filename": "RWS_Tarot_19_Sun.jpg"
  },
  {
    "name": "Judgment",
    "filename": "RWS_Tarot_20_Judgement.jpg"
  },
  {
    "name": "The World",
    "filename": "RWS_Tarot_21_World.jpg"
  },
  {
    "name": "Ace of Wands",
    "filename": "Wands01.jpg"
  },
  {
    "name": "Two of Wands",
    "filename": "Wands02.jpg"
  },
  {
    "name": "Three of Wands",
    "filename": "Wands03.jpg"
  },
  {
    "name": "Four of Wands",
    "filename": "Wands04.jpg"
  },
  {
    "name": "Five of Wands",
    "filename": "Wands05.jpg"
  },
  {
    "name": "Six of Wands",
    "filename": "Wands06.jpg"
  },
  {
    "name": "Seven of Wands",
    "filename": "Wands07.jpg"
  },
  {
    "name": "Eight of Wands",
    "filename": "Wands08.jpg"
  },
  {
    "name": "Nine of Wands",
    "filename": "Tarot_Nine_of_Wands.jpg"
  },
  {
    "name": "Ten of Wands",
    "filename": "Wands10.jpg"
  },
  {
    "name": "Page of Wands",
    "filename": "Wands11.jpg"
  },
  {
    "name": "Knight of Wands",
    "filename": "Wands12.jpg"
  },
  {
    "name": "Queen of Wands",
    "filename": "Wands13.jpg"
  },
  {
    "name": "King of Wands",
    "filename": "Wands14.jpg"
  },
  {
    "name": "Ace of Cups",
    "filename": "Cups01.jpg"
  },
  {
    "name": "Two of Cups",
    "filename": "Cups02.jpg"
  },
  {
    "name": "Three of Cups",
    "filename": "Cups03.jpg"
  },
  {
    "name": "Four of Cups",
    "filename": "Cups04.jpg"
  },
  {
    "name": "Five of Cups",
    "filename": "Cups05.jpg"
  },
  {
    "name": "Six of Cups",
    "filename": "Cups06.jpg"
  },
  {
    "name": "Seven of Cups",
    "filename": "Cups07.jpg"
  },
  {
    "name": "Eight of Cups",
    "filename": "Cups08.jpg"
  },
  {
    "name": "Nine of Cups",
    "filename": "Cups09.jpg"
  },
  {
    "name": "Ten of Cups",
    "filename": "Cups10.jpg"
  },
  {
    "name": "Page of Cups",
    "filename": "Cups11.jpg"
  },
  {
    "name": "Knight of Cups",
    "filename": "Cups12.jpg"
  },
  {
    "name": "Queen of Cups",
    "filename": "Cups13.jpg"
  },
  {
    "name": "King of Cups",
    "filename": "Cups14.jpg"
  },
  {
    "name": "Ace of Swords",
    "filename": "Swords01.jpg"
  },
  {
    "name": "Two of Swords",
    "filename": "Swords02.jpg"
  },
  {
    "name": "Three of Swords",
    "filename": "Swords03.jpg"
  },
  {
    "name": "Four of Swords",
    "filename": "Swords04.jpg"
  },
  {
    "name": "Five of Swords",
    "filename": "Swords05.jpg"
  },
  {
    "name": "Six of Swords",
    "filename": "Swords06.jpg"
  },
  {
    "name": "Seven of Swords",
    "filename": "Swords07.jpg"
  },
  {
    "name": "Eight of Swords",
    "filename": "Swords08.jpg"
  },
  {
    "name": "Nine of Swords",
    "filename": "Swords09.jpg"
  },
  {
    "name": "Ten of Swords",
    "filename": "Swords10.jpg"
  },
  {
    "name": "Page of Swords",
    "filename": "Swords11.jpg"
  },
  {
    "name": "Knight of Swords",
    "filename": "Swords12.jpg"
  },
  {
    "name": "Queen of Swords",
    "filename": "Swords13.jpg"
  },
  {
    "name": "King of Swords",
    "filename": "Swords14.jpg"
  },
  {
    "name": "Ace of Pentacles",
    "filename": "Pents01.jpg"
  },
  {
    "name": "Two of Pentacles",
    "filename": "Pents02.jpg"
  },
  {
    "name": "Three of Pentacles",
    "filename": "Pents03.jpg"
  },
  {
    "name": "Four of Pentacles",
    "filename": "Pents04.jpg"
  },
  {
    "name": "Five of Pentacles",
    "filename": "Pents05.jpg"
  },
  {
    "name": "Six of Pentacles",
    "filename": "Pents06.jpg"
  },
  {
    "name": "Seven of Pentacles",
    "filename": "Pents07.jpg"
  },
  {
    "name": "Eight of Pentacles",
    "filename": "Pents08.jpg"
  },
  {
    "name": "Nine of Pentacles",
    "filename": "Pents09.jpg"
  },
  {
    "name": "Ten of Pentacles",
    "filename": "Pents10.jpg"
  },
  {
    "name": "Page of Pentacles",
    "filename": "Pents11.jpg"
  },
  {
    "name": "Knight of Pentacles",
    "filename": "Pents12.jpg"
  },
  {
    "name": "Queen of Pentacles",
    "filename": "Pents13.jpg"
  },
  {
    "name": "King of Pentacles",
    "filename": "Pents14.jpg"
  }
];

const originalDeackOfCards = [
  {
    "name": "The Fool",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
  },
  {
    "name": "The Magician",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
  },
  {
    "name": "The High Priestess",
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg"
  },
  {
    "name": "The Empress",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg"
  },
  {
    "name": "The Emperor",
    "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg"
  },
  {
    "name": "The Hierophant",
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg"
  },
  {
    "name": "The Lovers",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg"
  },
  {
    "name": "The Chariot",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg"
  },
  {
    "name": "Strength",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg"
  },
  {
    "name": "The Hermit",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg"
  },
  {
    "name": "Wheel of Fortune",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"
  },
  {
    "name": "Justice",
    "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg"
  },
  {
    "name": "The Hanged Man",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg"
  },
  {
    "name": "Death",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg"
  },
  {
    "name": "Temperance",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg"
  },
  {
    "name": "The Devil",
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg"
  },
  {
    "name": "The Tower",
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg"
  },
  {
    "name": "The Star",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg"
  },
  {
    "name": "The Moon",
    "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg"
  },
  {
    "name": "The Sun",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg"
  },
  {
    "name": "Judgment",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg"
  },
  {
    "name": "The World",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg"
  },
  {
    "name": "Ace of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg"
  },
  {
    "name": "Two of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg"
  },
  {
    "name": "Three of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg"
  },
  {
    "name": "Four of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg"
  },
  {
    "name": "Five of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg"
  },
  {
    "name": "Six of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg"
  },
  {
    "name": "Seven of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg"
  },
  {
    "name": "Eight of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg"
  },
  {
    "name": "Nine of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg"
  },
  {
    "name": "Ten of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg"
  },
  {
    "name": "Page of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg"
  },
  {
    "name": "Knight of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg"
  },
  {
    "name": "Queen of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg"
  },
  {
    "name": "King of Wands",
    "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg"
  },
  {
    "name": "Ace of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg"
  },
  {
    "name": "Two of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg"
  },
  {
    "name": "Three of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg"
  },
  {
    "name": "Four of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg"
  },
  {
    "name": "Five of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg"
  },
  {
    "name": "Six of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg"
  },
  {
    "name": "Seven of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg"
  },
  {
    "name": "Eight of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg"
  },
  {
    "name": "Nine of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg"
  },
  {
    "name": "Ten of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg"
  },
  {
    "name": "Page of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg"
  },
  {
    "name": "Knight of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg"
  },
  {
    "name": "Queen of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg"
  },
  {
    "name": "King of Cups",
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg"
  },
  {
    "name": "Ace of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg"
  },
  {
    "name": "Two of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg"
  },
  {
    "name": "Three of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg"
  },
  {
    "name": "Four of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg"
  },
  {
    "name": "Five of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg"
  },
  {
    "name": "Six of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg"
  },
  {
    "name": "Seven of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg"
  },
  {
    "name": "Eight of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg"
  },
  {
    "name": "Nine of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg"
  },
  {
    "name": "Ten of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg"
  },
  {
    "name": "Page of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg"
  },
  {
    "name": "Knight of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg"
  },
  {
    "name": "Queen of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg"
  },
  {
    "name": "King of Swords",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg"
  },
  {
    "name": "Ace of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg"
  },
  {
    "name": "Two of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg"
  },
  {
    "name": "Three of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg"
  },
  {
    "name": "Four of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg"
  },
  {
    "name": "Five of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg"
  },
  {
    "name": "Six of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg"
  },
  {
    "name": "Seven of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg"
  },
  {
    "name": "Eight of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg"
  },
  {
    "name": "Nine of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg"
  },
  {
    "name": "Ten of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg"
  },
  {
    "name": "Page of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg"
  },
  {
    "name": "Knight of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg"
  },
  {
    "name": "Queen of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg"
  },
  {
    "name": "King of Pentacles",
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg"
  }
];
