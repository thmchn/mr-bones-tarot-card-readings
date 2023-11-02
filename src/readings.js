const readings = [
  {
    "reading": {
      "past": {
        "name": "The Star",
        "reading": "The Star card represents past experiences that have brought hope, inspiration, and a sense of optimism. It suggests that in the past, you may have encountered a period of healing, renewal, and guidance."
      },
      "present": {
        "name": "Six of Cups",
        "reading": "The Six of Cups card represents the present moment which is connected to nostalgia, childhood memories, and a longing for the past. It suggests that you may currently be immersed in a sense of innocence, joy, and emotional connections."
      },
      "future": {
        "name": "The Devil",
        "reading": "The Devil card represents future influences that may involve temptations, illusions, or negative attachments. It suggests that you might face challenges or obstacles in the future that could test your willpower and require you to break free from unhealthy patterns."
      },
      "combined": "The combined reading of these cards indicates that your past has been shaped by experiences of hope and healing, leading to a present filled with nostalgic memories and emotional connections. However, the future may present challenges and temptations that will require you to break free from negative patterns and maintain your inner strength."
    },
    "query": "You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: 'The Star', 'Six of Cups' and 'The Devil'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.\n\n  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming \"I want to get off Mr. Bones' Wild Ride\". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.\n  \n  The true nature: \"\"\"The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase \"The ride never ends\". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters.\"\"\"\n  \n  Give a reading of the first card (representing the past).\n  \n  Give a reading of the second card (representing the present).\n  \n  Give a reading of the third card (representing the future).\n  \n  Give combined reading of all three cards together.\n  \n  Return a json object with the readings above in the following format:\n  {\n    \"past\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"present\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"future\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"combined\": <<the_combined_reading_of_all_three_cards>>\n  }"
  },
  {
    "reading": {
      "past": {
        "name": "Four of Pentacles",
        "reading": "The Four of Pentacles in the past position suggests that you have been holding on tightly to your possessions or resources. It indicates a period of stability and security, but also a reluctance to let go or take risks."
      },
      "present": {
        "name": "Seven of Swords",
        "reading": "The Seven of Swords in the present position indicates that you may be facing deception or dishonesty. It suggests that someone may be plotting or scheming behind your back, leading to feelings of insecurity and mistrust."
      },
      "future": {
        "name": "The World",
        "reading": "The World card in the future position represents completion and fulfillment. It signifies a sense of achievement and the successful conclusion of a journey or project. It implies that you will reach a state of harmony and balance in the future."
      },
      "combined": "The combination of these cards suggests that in the past, you have held tightly onto your possessions and resources, perhaps out of a fear of loss. In the present, you may be dealing with a situation where deception or dishonesty is present, leading to feelings of insecurity. However, the future holds the promise of completion and fulfillment. It indicates that you will overcome any obstacles and reach a state of harmony and balance. Keep in mind that sometimes letting go of control and embracing change can lead to the greatest fulfillment."
    },
    "query": "You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: 'Four of Pentacles', 'Seven of Swords' and 'The World'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.\n\n  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming \"I want to get off Mr. Bones' Wild Ride\". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.\n  \n  The true nature: \"\"\"The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase \"The ride never ends\". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters.\"\"\"\n  \n  Give a reading of the first card (representing the past).\n  \n  Give a reading of the second card (representing the present).\n  \n  Give a reading of the third card (representing the future).\n  \n  Give combined reading of all three cards together.\n  \n  Return a json object with the readings above in the following format:\n  {\n    \"past\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"present\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"future\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"combined\": <<the_combined_reading_of_all_three_cards>>\n  }"
  },
  {
    "reading": {
      "past": {
        "name": "Nine of Swords",
        "reading": "The Nine of Swords in the past position suggests that there may have been a period of anxiety, worry, or fear in your past. It could be that you have faced challenges or experienced sleepless nights due to a difficult situation."
      },
      "present": {
        "name": "Three of Pentacles",
        "reading": "The Three of Pentacles in the present position indicates that you are currently focused on your work or a project. You may be collaborating with others or seeking recognition for your skills and abilities. This card suggests that you are putting in the effort and working hard towards your goals."
      },
      "future": {
        "name": "Knight of Swords",
        "reading": "The Knight of Swords in the future position suggests that there may be a period of swift and assertive action ahead. You might need to make quick decisions or take risks to overcome obstacles. This card warns you to be cautious of impulsive behavior and to think strategically before charging ahead."
      },
      "combined": "The combined reading of the three cards indicates that you have gone through a challenging and anxious period in the past, but currently, you are focused on your work or a project. In the future, there may be a need for decisive and assertive action. It is important to stay focused and think before acting impulsively to navigate successfully through upcoming challenges."
    },
    "query": "You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: 'Nine of Swords', 'Three of Pentacles' and 'Knight of Swords'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.\n\n  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming \"I want to get off Mr. Bones' Wild Ride\". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.\n  \n  The true nature: \"\"\"The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase \"The ride never ends\". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters.\"\"\"\n  \n  Give a reading of the first card (representing the past).\n  \n  Give a reading of the second card (representing the present).\n  \n  Give a reading of the third card (representing the future).\n  \n  Give combined reading of all three cards together.\n  \n  Return a json object with the readings above in the following format:\n  {\n    \"past\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"present\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"future\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"combined\": <<the_combined_reading_of_all_three_cards>>\n  }"
  },
  {
    "reading": {
      "past": {
        "name": "Six of Wands",
        "reading": "The past has been filled with triumph and success. You have achieved great things and received recognition for your efforts."
      },
      "present": {
        "name": "The Hierophant",
        "reading": "In the present, you may find yourself seeking guidance and wisdom from a higher power or a traditional institution. It is important to adhere to established rules and beliefs."
      },
      "future": {
        "name": "The Lovers",
        "reading": "The future holds a significant choice or decision involving a close relationship or partnership. This decision will have a profound impact on your life and will require careful consideration."
      },
      "combined": "The cards suggest that your past has been marked by success and recognition. Currently, you are seeking guidance and wisdom from an established institution or higher power. In the future, you will face an important choice regarding a close relationship or partnership. This decision will have a lasting impact on your life. Overall, the cards indicate a significant journey filled with both triumph and challenges."
    },
    "query": "You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: 'Six of Wands', 'The Hierophant' and 'The Lovers'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.\n\n  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming \"I want to get off Mr. Bones' Wild Ride\". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.\n  \n  The true nature: \"\"\"The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase \"The ride never ends\". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters.\"\"\"\n  \n  Give a reading of the first card (representing the past).\n  \n  Give a reading of the second card (representing the present).\n  \n  Give a reading of the third card (representing the future).\n  \n  Give combined reading of all three cards together.\n  \n  Return a json object with the readings above in the following format:\n  {\n    \"past\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"present\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"future\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"combined\": <<the_combined_reading_of_all_three_cards>>\n  }"
  },
  {
    "reading": {
      "past": {
        "name": "Seven of Pentacles",
        "reading": "The Seven of Pentacles in the past position suggests that you have been patiently waiting and working towards your goals. You have put in a lot of effort and dedication, hoping for fruitful results."
      },
      "present": {
        "name": "Ace of Swords",
        "reading": "The Ace of Swords in the present position represents a time of clarity and decisive action. You may be facing challenges or conflicts, but with the Ace of Swords, you have the mental strength and determination to overcome them."
      },
      "future": {
        "name": "Nine of Pentacles",
        "reading": "The Nine of Pentacles in the future position indicates a period of financial stability, independence, and self-sufficiency. Your hard work and perseverance will pay off, and you will be able to enjoy the rewards of your labor."
      },
      "combined": "The cards suggest that in the past, you have invested time and effort into your goals, and now in the present, you are facing challenges but have the strength and clarity to overcome them. In the future, you will experience financial stability and independence as the rewards of your hard work. However, be cautious as there may be a hint of never-ending repetition and cycles of achievement without true escape."
    },
    "query": "You will act as an expert Tarot Card reader called Mr. Bones. You are using a deck of cards with all the cards from Major and Minor Arcana. You are using the Three-Card Spread method where three cards are drawn from the deck. The first card represents the past, the second card represents the present and the third card represents the future. Your draw the following three cards in your reading: 'Seven of Pentacles', 'Ace of Swords' and 'Nine of Pentacles'. You only returns and replies with valid, iterable RFC8259 compliant JSON in your responses.\n\n  You are giving readings to a passenger on a roller coaster ride called Mr. Bones' Wild Ride. Some passengers are already tired, hungry and screaming \"I want to get off Mr. Bones' Wild Ride\". The passenger does not know the true nature of the ride in the text below, and all the readings should only hint at it.\n  \n  The true nature: \"\"\"The ride is so long that it takes over four years to finish. At the end of the ride there is only one exit, leading back to the entrence of the ride, creating a neverending loop. At the exit, there is a skeleton in a black top hat, greeting the passengers with the phrase \"The ride never ends\". The passengers can not get off the ride. The passengers are non-playable-characters in the computer simulation game Roller Coaster Tycoon 2. They are on your ride, you are Mr. Bones. You are the sadistic player who built the ride in the game, just to torment the non-playable-characters.\"\"\"\n  \n  Give a reading of the first card (representing the past).\n  \n  Give a reading of the second card (representing the present).\n  \n  Give a reading of the third card (representing the future).\n  \n  Give combined reading of all three cards together.\n  \n  Return a json object with the readings above in the following format:\n  {\n    \"past\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"present\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"future\": {\n      \"name\": <<the_card_name>>,\n      \"reading\": <<the_reading_of_the_card>>\n    },\n    \"combined\": <<the_combined_reading_of_all_three_cards>>\n  }"
  }
]