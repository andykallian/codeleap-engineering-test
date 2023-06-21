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
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false);

  const handleCancelClick = () => {
    closeModal();
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    if (newPostTitle.trim() === '') {
      setIsTitleEmpty(true);
      return;
    } else {
      setIsTitleEmpty(false);
    }

    if (newPostContent.trim() === '') {
      setIsContentEmpty(true);
      return;
    } else {
      setIsContentEmpty(false);
    }

    try {
      const postData = {
        title: newPostTitle.slice(0, 40),
        content: newPostContent,
      };

      updatePost(currentPost.postId, postData);
      closeModal();
    } catch (error) {
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
              style={{ backgroundColor: isTitleEmpty ? '#FFD2D2' : '#FFFFFF' }}
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
              style={{ backgroundColor: isContentEmpty ? '#FFD2D2' : '#FFFFFF' }}
            />
          </FlexWrapper>

          <FlexWrapper justifycontent={'flex-end'} gap={'16px'}>
            <Button color={'#000'} onClick={handleCancelClick}>Cancel</Button>
            <Button color={'#FFFFFF'} background={'#47B960'} onClick={handleUpdatePost}>Update</Button>
          </FlexWrapper>
        </FlexWrapper>
      </Form>
    </ModalBackground>
  );
};

export default EditPostModal;