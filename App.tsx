import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import letters from './letters.json';
import styled from 'styled-components/native';

export default function App() {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [options, setOptions] = useState<string[]>();
  const CurrentLetter = styled.Text`
    font-size: 70;
  `;

  useEffect(() => {
    const { options, question } = getNewQuestion(
      letters.filter((letter) => !Object.values(letter).includes(currentLetter)),
    );
    setCurrentLetter(question);
    setOptions(options);
  }, []);

  return (
    <View style={styles.container}>
      <CurrentLetter>{currentLetter}</CurrentLetter>
      {options?.map((option) => <Option letter={option} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Option = (props: { letter: string }) => <Text>{props.letter}</Text>;

function getNewQuestion<T>(letters: Letter[]): { question: string; options: string[] } {
  const randomIndex = Math.floor(Math.random() * letters.length);
  const currentLetter = letters[randomIndex];

  const keys = Object.keys(letters[0]).filter((key) => key !== 'name') as (keyof Letter)[]; //todo

  const currentForm = keys[Math.floor(Math.random() * keys.length)];

  const question = `${currentForm} ${currentLetter.name}`;
  const correctAnswer = currentLetter[currentForm];

  const remainingLetters = letters.filter((letter) => letter !== currentLetter);
  //   const options = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
  const shuffledRemainingLetters = remainingLetters.sort(() => Math.random() - 0.5);

  const unshuffledOptions = shuffledRemainingLetters
    .slice(0, 3)
    .map((letter) => letter[keys[Math.floor(Math.random() * 3)]]);
  unshuffledOptions.push(correctAnswer);
  const options = unshuffledOptions.sort(() => Math.random() - 0.5);

  return { question, options };
}
