import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { createPost, fetchPosts } from '../actions';


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
};

const MainScreen = () => {

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const [posts, dispatch] = useReducer(postsReducer, []);

  const [newPosts, setNewPosts] = useState([]);

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const postData = {
      username: 'example_username',
      title: newPostTitle,
      content: newPostContent,
    };

    const response = await createPost(postData);

    if (response) {
      console.log('Post criado com sucesso');

      fetchPostsData();

      setNewPostTitle('');
      setNewPostContent('');
      console.log(newPosts);
    }
  };

  const fetchPostsData = async () => {
    try {
      const postsData = await fetchPosts();
      dispatch({ type: 'FETCH_POSTS', payload: postsData });
      setNewPosts(postsData.results);
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);


  return (
    <Container>
      <Form onSubmit={handleCreatePost}>
        <Title>Create a New Post</Title>
        <Label htmlFor="postTitle">Title:</Label>
        <Input
          type="text"
          id="postTitle"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          required
        />
        <Label htmlFor="postContent">Content:</Label>
        <Textarea
          id="postContent"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          required
        ></Textarea>
        <Button type="submit">Submit</Button>
      </Form>

      <h2>Posts</h2>
      {newPosts && newPosts.length > 0 ? (
        newPosts.map((post) => (
          <PostContainer key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostContainer>
        ))
      ) : (
        <p>Não há posts disponíveis.</p>
      )}
    </Container>
  );
};

export default MainScreen;
