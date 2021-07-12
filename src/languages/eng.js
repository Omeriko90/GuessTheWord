const eng = () => {
  return {
    welcomePage: {
      startGame: "Start Game",
      headline: "Welcome To Guess The Word Game!",
      highestScore: "Highest Score",
    },
    game: {
      guessButton: "Guess",
      inputPlaceholder: "Enter Your Guess",
      score: "Score:",
    },
    gameInstructions: {
      levels:
        "The words are divided according to difficulty levels.\nThe first level (1) is the easiest and the last level (5) is the most difficult. The score for a successful word guess increases when level rises from a point for the easiest level and 5 points for the most difficult level.\nEvery five consecutive words that are correctly guessed you go up a level.",
      howToPlay:
        "Welcome to the word guessing game!\n\nAt each stage you will be presented with a word with some of the missing letters and you have to guess which word is displayed.\nFor each correct guess you will receive a score according to the level you are at. If you guessed wrong you will lose one point of life.",
      pleaseNote:
        "Please note, you have only three life points so you should only give guesses that you are confident in.",
      haveFun: "Have Fun!",
      letsBegin: "Let's Begin",
    },
    gameOver: {
      headline: "Game Over!",
      yourScore: "Your score is",
      name: "Enter your name",
      phoneNumber: "Enter your phone number",
      scoreBoardHeadline: "Top Scores",
      submitButton: "Submit Score",
    },
    scoreBoard: {
      nameColumn: "Name",
      phoneNumberColumn: "Phone Number",
    },
  };
};

export default eng;
