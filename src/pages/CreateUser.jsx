import React, { useContext, useState } from 'react';
import { LoginContainer, TitleContainer, LabelContainer, InputContainer, ButtonContainer, FlexWrapper } from '../components/Styles';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const CreateUser = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState('');

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleRegister = () => {
    if (newUser !== '') {
      addUser(newUser);
      navigate('/codeleap-engineering-test');
    }
  };

  const handleCancel = () => {
    navigate('/codeleap-engineering-test');
  };

  return (
    <LoginContainer>
      <TitleContainer>Welcome to CodeLeap Network</TitleContainer>
      <LabelContainer>Please register your username:</LabelContainer>
      <InputContainer type="text" placeholder="Example: John Doe" onChange={handleChange} />
      <FlexWrapper justifycontent={'flex-end'} gap={'10px'}>
        <ButtonContainer color={`#FFFFFF`} background={'#FF5151'} onClick={handleCancel}>
          CANCEL
        </ButtonContainer>
        <ButtonContainer color={'#FFFFFF'} background={'#7695EC'} onClick={handleRegister}>
          SUBMIT
        </ButtonContainer>
      </FlexWrapper>
    </LoginContainer>
  );
};

export default CreateUser;