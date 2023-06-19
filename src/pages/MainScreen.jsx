import 
{
    FlexWrapper,
    TopRetangle, 
    Form,
    NewPostQuestion,
    NewPostTitleLabel,
    NewPostContentLabel,
    NewPostInputTitle,
    NewPostTextareaContent,
    Button,
    RetangleTitle,
} from '../components/Styles';
import Post from '../components/Post';

import React, { useState, useEffect, useReducer } from 'react';
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
            username: 'AndyKallian',
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
    }, [posts]);

  return (
    <FlexWrapper width={'800px'} background={'#FFFFFF'} direction={'column'} gap={'16px'}>

    
        <TopRetangle>
            <RetangleTitle>CodeLeap Network</RetangleTitle>
        </TopRetangle>
        <Form>
            <FlexWrapper gap={'20px'} background={'#FFFFFF'} padding={'16px'} borderradius={'16px'} direction={'column'} border={'1px solid #999999'}>
                <NewPostQuestion>What's on your mind?</NewPostQuestion>

                <FlexWrapper direction={'column'}>
                    <NewPostTitleLabel htmlFor="postTitle">Title</NewPostTitleLabel>
                    <NewPostInputTitle
                    type="text"
                    id="postTitle"
                    placeholder="Hello World"
                    value={newPostTitle.slice(0, 40)}
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
                <Button background={'#7695EC'} color={'#FFFFFF'}onClick={handleCreatePost}>CREATE</Button>
            </FlexWrapper>
        </Form>  

        {newPosts && newPosts.length > 0 && (
            newPosts.map(post =>(
                <Post key={post.id} postId={post.id} title={post.title} content={post.content} user={post.username} date={post.created_datetime} />
            ))
        )};
    </FlexWrapper>
  );
};

export default MainScreen;