import React, { useState } from 'react';
import {
  ModalBackground,
  ModalWindows,
  NewPostQuestion,
  FlexWrapper,
  Button,
} from './Styles';
import { deletePost } from '../actions';

const DeleteModal = ({ setShowModal, postId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    console.log(postId);
    try {
      await deletePost(postId);
      console.log('Post excluído com sucesso');
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      setIsDeleting(false);
    }
  };

  const handleCancelClick = () => {
    setShowModal(false); // Fecha o modal se o usuário clicar em cancelar
  };

  return (
    <ModalBackground widht={'660px'} height={'146px'} top={'456px'} left={'630px'}>
      <ModalWindows>
        <NewPostQuestion marginbotton={'20px'}>
          Are you sure you want to delete this item?
        </NewPostQuestion>
        <FlexWrapper gap={'16px'} justifycontent={'flex-end'}>
          <Button color={'#000'} onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button
            background={'red'}
            color={'#FFFFFF'}
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </FlexWrapper>
      </ModalWindows>
    </ModalBackground>
  );
};

export default DeleteModal;