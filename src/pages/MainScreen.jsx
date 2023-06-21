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
import { createPost, fetchPosts } from '../actions';

import React, { useState, useEffect, useReducer, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


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
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);
    const [isContentEmpty, setIsContentEmpty] = useState(false);

    const [newPosts, setNewPosts] = useState([]);
    const navigate = useNavigate();

    const [posts, dispatch] = useReducer(postsReducer, []);


    const { currentUser, setCurrentUsername } = useContext(UserContext);
    
    const handleCreatePost = async (e) => {
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
    
      const postData = {
        username: currentUser,
        title: newPostTitle,
        content: newPostContent,
      };
    
      const response = await createPost(postData);
    
      if (response) {
        fetchPostsData();
        setNewPostTitle('');
        setNewPostContent('');
      }
    };

    const handleLogout = () =>{
      setCurrentUsername('')
      navigate('/codeleap-engineering-test')
    }
    

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
            <Button background={'#FF5151'} color={'#FFFFFF'} onClick={handleLogout}>LOGOUT</Button>
        </TopRetangle>
        <Form width={'95%'}>
            <FlexWrapper gap={'20px'} background={'#FFFFFF'} padding={'16px'} borderradius={'16px'} direction={'column'} border={'1px solid #999999'}>
                <NewPostQuestion>Hello, {currentUser}! What's on your mind?</NewPostQuestion>

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
                      onBlur={() => {setIsTitleEmpty(false)}}
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
                      onBlur={() => {setIsContentEmpty(false)}}
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