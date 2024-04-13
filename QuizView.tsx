import { FunctionComponent, useEffect, useState } from 'react';
import letters from './letters.json';
import styled from 'styled-components/native';
import { Option, Options } from './components/Options';
import {
  CORRECT_ANSWER_BACKGROUND_COLOR,
  INCORRECT_ANSWER_BACKGROUND_COLOR,
  NEUTRAL_BACKGROUND_COLOR,
} from './constants';
import audios from './audios';
import { Audio } from 'expo-av';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

const QuizView: FunctionComponent<Props> = ({ navigation }) => {
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>(NEUTRAL_BACKGROUND_COLOR);
  const [options, setOptions] = useState<string[]>();
  const CurrentLetter = styled.Text`
    font-size: 70;
  `;

  function generateQuestionAndAnswer(): { question: string; options: string[]; correctAnswer: string; name: string } {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const { name: currentLetterName, forms: currentLetterForms, name } = letters[randomIndex];
    const keys = Object.keys(letters[0].forms) as Array<keyof LetterForms>;
    let currentForm = getRandomLetterForm(currentLetterForms);
    const question = `${currentForm} ${currentLetterName}`;
    const correctAnswer = currentLetterForms[currentForm] as string;

    const remainingLetters = letters.filter((letter) => letter.name !== currentLetterName);
    const shuffledRemainingLetters = remainingLetters.sort(() => Math.random() - 0.5);

    const unshuffledOptions = shuffledRemainingLetters.slice(0, 3).map((letter) => {
      console.log(keys[Math.floor(Math.random() * 3)]);
      return letter.forms[keys[Math.floor(Math.random() * 3)]] || letter.forms.isolated;
    });
    unshuffledOptions.push(correctAnswer);
    const options = unshuffledOptions.sort(() => Math.random() - 0.5);

    return { question, options, correctAnswer, name };
  }

  function getRandomLetterForm(letter: LetterForms): keyof LetterForms {
    const keys = Object.keys(letter) as Array<keyof LetterForms>;
    const keysWithValue = keys.filter((key) => letter[key]);
    const randomIndex = Math.floor(Math.random() * keysWithValue.length);
    return keysWithValue[randomIndex];
  }

  async function getNewQuestion() {
    const { options, question, correctAnswer, name } = generateQuestionAndAnswer();
    console.log({ options, question, correctAnswer });
    setCurrentAnswer(correctAnswer);
    setCurrentQuestion(question);
    setOptions(options);
    const audioString = audios[name as keyof typeof audios];
    const { sound } = await Audio.Sound.createAsync(audioString);
    await sound.playAsync();
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
  const StyledQuizView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledQuizView style={{ backgroundColor: backgroundColor }}>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <CurrentLetter>{currentQuestion}</CurrentLetter>
      <Options>{options?.map((option) => <Option letter={option} handleGuess={handleGuess} />)}</Options>
    </StyledQuizView>
  );
};
export default QuizView;
