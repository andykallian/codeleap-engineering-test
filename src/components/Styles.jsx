import styled, { css } from 'styled-components';
import { TbTrashX } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';

/* Login */

export const LoginContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  padding: 24px;

  width: 500px;
  height: 205px;

  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 16px;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.h1`


  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;


  color: #000000;

`;

export const LabelContainer = styled.label`

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;


  color: #000000;
`;

export const InputContainer = styled.input`

  background: #FFFFFF;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 8px 11px;
`;

export const ButtonContainer = styled.button`
  width: 111px;
  height: 32px;
  left: 1075px;
  top: 588px;

  ${({ background }) => background && css`
    background: ${background};
  `}

  border-radius: 8px;

  align-self: flex-end;

  ${({ color }) => color && css`
    color: ${color};
  `}

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ disabled }) => disabled && css`
    background: #CCCCCC;
    cursor: default;
  `}
`;


/*MainScreen */


export const Container = styled.div`
  width: 800px;
  
  background: #FFFFFF;

  display: flex;
  flex-direction: column;
  gap: 16px;
`



export const FlexWrapper = styled.div`
    display: flex;
    
  ${({ gap }) => gap && css`
    gap: ${gap};
  `}

  ${({ background }) => background && css`
    background: ${background};
  `}

  ${({direction}) => direction && css`
    flex-direction: ${direction};
  `}

  ${({alignitens}) => alignitens && css`
    align-items : ${alignitens};
  `}

  ${({justifycontent}) => justifycontent && css`
    justify-content : ${justifycontent};
  `}

  ${({gap}) => gap && css`
    gap : ${gap};
  `}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ width }) => width && css`
    width: ${width};
  `}

  ${({ alignself }) => alignself && css`
    align-self: ${alignself};
  `}

  ${({ borderradius }) => borderradius && css`
    border-radius: ${borderradius};
  `}

  ${({ border }) => border && css`
    border: ${border};
  `}

  @media (max-width: 420px) {
    width: 100%;
  }
`;





export const RetangleTitle = styled.h1`

  word-wrap: break-word;
  max-width: 70%;

  

  color: #FFFFFF;
  font-family: 'Roboto';
  
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`

export const TopRetangle = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 27px 37px;

  background: #7695EC;

  @media (max-width: 420px) {
    padding: 27px 12px;
  }

`

export const TopRetanglePost = styled.div`




  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  padding: 27px 37px;

  background: #7695EC;

  color: #FFFFFF;



  border-radius: 16px 16px 0 0;

  @media (max-width: 420px) {
    gap: 72%;
  }
  

`


export const Form = styled.form`

  display: flex;
  flex-direction: column;

  width: 95%;

  ${({ width }) => width && css`
    width: ${width};
  `}

  align-self: center;
  background: #FFFFFF;

  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;
`

export const NewPostQuestion = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  color: #000000;

  ${({ marginbotton }) => marginbotton && css`
    margin-bottom: ${marginbotton};
  `}

  @media (max-width: 420px) {
    font-size: 19px;
  }
`

export const NewPostTitleLabel = styled.label`

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`

export const NewPostContentLabel = styled.label`

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`

export const NewPostInputTitle = styled.input`
  background: ${({ titleError }) => (titleError ? '#ffcccc' : '#FFFFFF')};
  transition: background-color 0.3s ease;
  border: 1px solid #777777;
  border-radius: 8px;
  height: 32px;
  padding: 8px;
`

export const NewPostTextareaContent = styled.textarea`
  background: ${({ contentError }) => (contentError ? '#ffcccc' : '#FFFFFF')};
  transition: background-color 0.3s ease;
  border: 1px solid #777777;
  border-radius: 8px;
  height: 74px;
  padding: 8px;
`


export const Button = styled.button`
  width: 120px;
  height: 32px;
  align-self: flex-end;

  ${({ background }) => background && css`
    background-color: ${background};
  `}

  ${({ color }) => color && css`
    color: ${color};
  `}

  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  cursor: pointer;
`

export const Posts = styled.div`

  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;

  width: 95%;
  align-self: center;
  border-radius: 16px;

`

/* POST */

export const StyledTbTrashX = styled(TbTrashX)`
  width: 23.4px;
  height: 22.5px;
  cursor: pointer;
`;

export const StyledFaEdit = styled(FaEdit)`
  width: 23.4px;
  height: 22.5px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #777777;
`

export const Time = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: right;

  color: #777777;

`

export const Content = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  text-align: justify;

`
/* MODAL */

export const ModalBackground = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

// export const ModalBackground = styled.div`

  
//   position: fixed;


//   ${({ top }) => top && css`
//   top: ${top};
//   `}

//   ${({ left }) => left && css`
//   left: ${left};
//   `}

//   ${({ width }) => width && css`
//     width: ${width};
//   `}
//   ${({ height }) => height && css`
//   height: ${height};
//   `}

//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export const ModalWindows = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 146px;
  gap: 14px;
`
