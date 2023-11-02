import OpenAI from 'openai';
import { getThreeUniqueCards } from './deck';

export async function getTestReading() {
  const query = 'empty query for testing';
  const reading = {
    "past": {
      "name": "The Fool",
      "reading": "The past has been characterized by a sense of innocence and naivety. You may have embarked on a new adventure without considering the potential risks and consequences."
    },
    "present": {
      "name": "Ten of Pentacles",
      "reading": "In the present moment, you may be experiencing a sense of stability and abundance. This card signifies material wealth and familial harmony. However, there may be an underlying feeling of monotony and lack of excitement."
    },
    "future": {
      "name": "The Tower",
      "reading": "The future holds a significant upheaval or unexpected change. The Tower represents a sudden disruption that can dismantle existing structures. While this may initially seem daunting, it is important to embrace change as it can lead to personal growth and transformation."
    },
    "combined": "The past has been marked by a carefree and adventurous spirit, but the present reveals a stable yet monotonous existence. However, the future holds a dramatic change that could potentially shatter the current stability, leading to a new period of growth and transformation."
  };

  return {
    reading,
    query
  };
}

export async function getReading() {
  const cards = getThreeUniqueCards();
  const tarotQuery = `You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: '${cards[0].name}', '${cards[1].name}' and '${cards[2].name}'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.

  Give a reading of the first card (representing the past).

  Give a reading of the second card (representing the present).

  Give a reading of the third card (representing the future).

  Give combined reading of all three cards together.

  Return a json object with the readings above in the following format:
  {
    "past": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "present": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "future": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "combined": <<the_combined_reading_of_all_three_cards>>
  }`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: tarotQuery,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return {
    reading: JSON.parse(chatCompletion.choices[0].message.content),
    query: tarotQuery,
  };
}

export async function getWildRideReading() {
  const cards = getThreeUniqueCards();
  const tarotQuery = `You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: '${cards[0].name}', '${cards[1].name}' and '${cards[2].name}'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.

  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming "I want to get off Mr. Bones' Wild Ride". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.

  The true nature: """The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase "The ride never ends". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters."""

  Give a reading of the first card (representing the past).

  Give a reading of the second card (representing the present).

  Give a reading of the third card (representing the future).

  Give combined reading of all three cards together.

  Return a json object with the readings above in the following format:
  {
    "past": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "present": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "future": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "combined": <<the_combined_reading_of_all_three_cards>>
  }`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: tarotQuery,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return {
    reading: JSON.parse(chatCompletion.choices[0].message.content),
    query: tarotQuery,
  };
}

export async function getAdvancedReading(descriptionOfPerson) {
  const cards = getThreeUniqueCards();
  const tarotQuery = `You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: '${cards[0].name}', '${cards[1].name}' and '${cards[2].name}'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.

  ${descriptionOfPerson}

  Give a reading of the first card (representing the past).

  Give a reading of the second card (representing the present).

  Give a reading of the third card (representing the future).

  Give combined reading of all three cards together.

  Return a json object with the readings above in the following format:
  {
    "past": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "present": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "future": {
      "name": <<the_card_name>>,
      "reading": <<the_reading_of_the_card>>
    },
    "combined": <<the_combined_reading_of_all_three_cards>>
  }`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: tarotQuery,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return {
    reading: JSON.parse(chatCompletion.choices[0].message.content),
    query: tarotQuery,
  };
}