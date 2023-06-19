import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import { 
  LoginContainer, 
  TitleContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer,
  FlexWrapper
  
} from '../components/Styles';

const HomePage = () => {
  const navigate = useNavigate();
  const { usernames, addUser, setCurrentUsername } = useContext(UserContext);
  const [username, setUsername] = useState('');


  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    if (username !== '') {
      console.log('Username entered:', username);

      if (usernames.includes(username)) {
        addUser(username);
        setCurrentUsername(username); // Definir o usuário atual
        navigate('/codeleap-engineering-test/main');
      } else {
        console.log('Invalid username');
      }
    }
  };

  const handleRegister = () =>{
    navigate('/codeleap-engineering-test/create-user');
  }

  return (
    <LoginContainer>
      <TitleContainer>Welcome to CodeLeap Network</TitleContainer>
      <LabelContainer>Please enter your username:</LabelContainer>
      <InputContainer type="text" placeholder="John Doe" value={username} onChange={handleInputChange} />
      <FlexWrapper justifycontent={'flex-end'} gap={'10px'}>
        <ButtonContainer color={`#000000`} background={'#FFFFFF'}  onClick={handleRegister}>REGISTER</ButtonContainer>
        <ButtonContainer disabled={username === ''} color={'#FFFFFF'} background={'#7695EC'} onClick={handleLogin}>ENTER</ButtonContainer>
      </FlexWrapper>
    </LoginContainer>
  );
};

export default HomePage;


