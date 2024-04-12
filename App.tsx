import { useEffect, useState } from 'react';
import letters from './letters.json';
import styled from 'styled-components/native';
import { Option, Options } from './components/Options';
import {
  CORRECT_ANSWER_BACKGROUND_COLOR,
  INCORRECT_ANSWER_BACKGROUND_COLOR,
  NEUTRAL_BACKGROUND_COLOR,
} from './constants';

export default function App() {
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>(NEUTRAL_BACKGROUND_COLOR);
  const [options, setOptions] = useState<string[]>();
  const CurrentLetter = styled.Text`
    font-size: 70;
  `;

  function generateQuestionAndAnswer(): { question: string; options: string[]; correctAnswer: string } {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const currentLetter = letters[randomIndex];

    const keys = Object.keys(letters[0]).filter((key) => key !== 'name') as (keyof Letter)[]; //todo

    let currentForm = keys[Math.floor(Math.random() * keys.length)];

    if (!currentLetter[currentForm]) currentForm = 'isolated';
    const question = `${currentForm} ${currentLetter.name}`;
    const correctAnswer = currentLetter[currentForm] as string;

    const remainingLetters = letters.filter((letter) => letter !== currentLetter);
    const shuffledRemainingLetters = remainingLetters.sort(() => Math.random() - 0.5);

    const unshuffledOptions = shuffledRemainingLetters
      .slice(0, 3)
      .map((letter) => letter[keys[Math.floor(Math.random() * 3)]] || letter.isolated);
    unshuffledOptions.push(correctAnswer);
    const options = unshuffledOptions.sort(() => Math.random() - 0.5);

    return { question, options, correctAnswer };
  }

  function getNewQuestion() {
    const { options, question, correctAnswer } = generateQuestionAndAnswer();
    console.log({ options, question, correctAnswer });
    setCurrentAnswer(correctAnswer);
    setCurrentQuestion(question);
    setOptions(options);
  }
  useEffect(() => {
    getNewQuestion();
  }, []);

  function checkAnswer(letter: string): boolean {
    console.log({ currentAnswer });
    console.log({ letter });
    return currentAnswer === letter;
  }

  function handleGuess(guessedLetter: string) {
    const isCorrectGuess = checkAnswer(guessedLetter);

    buzzBackground(isCorrectGuess);
  }

  function buzzBackground(isAnswerCorrect: boolean) {
    return new Promise((resolve) => {
      if (isAnswerCorrect) {
        setBackgroundColor(CORRECT_ANSWER_BACKGROUND_COLOR);
        setTimeout(() => {
          setBackgroundColor(NEUTRAL_BACKGROUND_COLOR);
          getNewQuestion(); // todo : move this out of here somehow
        }, 500);
      } else {
        setBackgroundColor(INCORRECT_ANSWER_BACKGROUND_COLOR);
        setTimeout(() => {
          setBackgroundColor(NEUTRAL_BACKGROUND_COLOR);
        }, 500);
      }
    });
  }
  const StyledApp = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledApp style={{ backgroundColor: backgroundColor }}>
      <CurrentLetter>{currentQuestion}</CurrentLetter>
      <Options>{options?.map((option) => <Option letter={option} handleGuess={handleGuess} />)}</Options>
    </StyledApp>
  );
}
