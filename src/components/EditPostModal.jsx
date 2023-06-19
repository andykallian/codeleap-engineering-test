import React, { useState } from 'react';
import { updatePost } from '../actions/index';

import {
    ModalBackground,
    ModalWindows,
    NewPostQuestion,
    FlexWrapper,
    Button,
    Form,
    NewPostTitleLabel,
    NewPostContentLabel,
    NewPostInputTitle,
    NewPostTextareaContent,
  } from './Styles';

const EditPostModal = ({ currentPost, closeModal }) => {
    
  const [newPostTitle, setNewPostTitle] = useState(currentPost.title);
  const [newPostContent, setNewPostContent] = useState(currentPost.content);

  const handleCancelClick = () => {
    // fechar o modal sem fazer nada
    closeModal();
  };

  

  const handleUpdatePost = async (e) => {
    e.preventDefault()

    try {
      // verificar se o título foi alterado
      const newTitle = newPostTitle.slice(0, 40);
      const oldTitle = currentPost.title;
      const titleChanged = newTitle !== oldTitle;

      // verificar se o conteúdo foi alterado
      const newContent = newPostContent;
      const oldContent = currentPost.content;
      const contentChanged = newContent !== oldContent;

      // criar um objeto com as propriedades a serem atualizadas
      const postData = {};

      if (titleChanged) {
        postData.title = newTitle;
      }
      if (contentChanged) {
        postData.content = newContent;
      }
      
      // fazer a solicitação PATCH para a API
      updatePost(currentPost.postId, postData);
      closeModal()
      
    } catch (error) {
      // lidar com erros de atualização do post aqui
      console.error('Erro ao atualizar o post:', error);
      alert('Ocorreu um erro ao atualizar o post: ' + error.message);
    }
  };

  return (
    <ModalBackground width={'612px'} height={'32px'} top={'364px'} left={'630px'}>
        <Form width={'660px'}>
            <FlexWrapper gap={'20px'} background={'#FFFFFF'} padding={'16px'} borderradius={'16px'} direction={'column'} border={'1px solid #999999'}>
                <NewPostQuestion>Edit Item</NewPostQuestion>

                <FlexWrapper direction={'column'}>
                    <NewPostTitleLabel htmlFor="postTitle">Title</NewPostTitleLabel>
                    <NewPostInputTitle
                        type="text"
                        id="postTitle"
                        placeholder="Hello World"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        required
                    />
                </FlexWrapper>

                <FlexWrapper direction={'column'}>
                    <NewPostContentLabel htmlFor="postContent">Content</NewPostContentLabel>
                    <NewPostTextareaContent
                        type="text"
                        id="postContent"
                        value={newPostContent}
                        placeholder="Content Here"
                        onChange={(e) => setNewPostContent(e.target.value)}
                        required
                    />
                </FlexWrapper>
                <Button color={'#000'} onClick={handleCancelClick}>Cancel</Button>
                <Button color={'#FFFFFF'} background={'#47B960'} onClick={handleUpdatePost}>Update</Button>
            </FlexWrapper>
        </Form>  
    </ModalBackground>
  );
};

export default EditPostModal;