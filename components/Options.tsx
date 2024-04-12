import { Text, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/native';

export const Options = (props: { children: ReactNode }) => {
  const StyledOptions = styled.View`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
  `;
  return <StyledOptions>{props.children}</StyledOptions>;
};

interface OptionProps {
  letter: string;
  handleGuess: (letter: string) => void;
}
export const Option: FC<OptionProps> = ({ letter, handleGuess }) => {
  const StyledOption = styled.View`
    height: 20%;
    width: 40%;
    background-color: green;
    border-radius: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledText = styled.Text`
    font-size: 40px;
  `;

  return (
    <StyledOption onTouchEnd={() => handleGuess(letter)}>
      <StyledText>{letter}</StyledText>
    </StyledOption>
  );
};
