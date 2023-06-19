import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { 
  LoginContainer, 
  TitleContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer,
  
} from '../components/Styles';


const HomePage = () => {
  const [username, setUsername] = useState('AndyKallian');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleButtonClick = () => {
    if (username !== '') {
      console.log('Username entered:', username);

      if (username === 'AndyKallian') {
        navigate('/codeleap-engineering-test/main');
      }
    }
  };

  return (
    
    <LoginContainer>
      <TitleContainer>Welcome to CodeLeap Network</TitleContainer>
      <LabelContainer>Please enter your username:</LabelContainer>
      <InputContainer type="text" placeholder="John Doe" value={username} onChange={handleInputChange} />
      <ButtonContainer disabled={username === ''} onClick={handleButtonClick}>
        ENTER
      </ButtonContainer>
    </LoginContainer>
  );
};

export default HomePage;
