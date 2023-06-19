import moment from 'moment';
import 
{ 
    TopRetanglePost,
    RetangleTitle,
    FlexWrapper,
    StyledTbTrashX,
    StyledFaEdit,
    UserName,
    Time,
    Content
    
} from './Styles';

import DeleteModal from './DeleteModal'; 
import EditPostModal from './EditPostModal'; // importar o componente de edição

import { useState } from 'react';

const Post = ({title, content, user, date, postId}) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false); // estado para controlar a exibição do modal de exclusão
    const [showEditModal, setShowEditModal] = useState(false); // estado para controlar a exibição do modal de edição

    const handleDeleteClick = () => {
        setShowDeleteModal(true);  // abre o modal de exclusão quando o usuário clica no ícone de lixeira
    }

    const handleEditClick = () => {
        setShowEditModal(true); // abre o modal de edição quando o usuário clica no ícone de edição
    }


    return (
        <>
            <FlexWrapper border={'1px solid #999999'} borderradius={'16px'} direction={'column'} width={'95%'} alignself={'center'} gap={'20px'}>
                <TopRetanglePost>
                    <RetangleTitle>{title}</RetangleTitle>
                    <FlexWrapper gap={'34px'}>
                        <StyledTbTrashX onClick={handleDeleteClick} />
                        <StyledFaEdit onClick={handleEditClick} /> {/* Adiciona um evento de clique para abrir o modal de edição */}
                    </FlexWrapper>
                </TopRetanglePost>

                <FlexWrapper direction={'column'} gap={'16px'} padding={'24px'}>
                    <FlexWrapper justifycontent={'space-between'} >
                        <UserName>{user}</UserName>
                        <Time>{moment(date).fromNow()}</Time>
                    </FlexWrapper>
                    <FlexWrapper>
                        <Content>
                            {content}
                        </Content>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            { showDeleteModal && <DeleteModal postId={postId} setShowModal={setShowDeleteModal} /> } {/* Exibe o modal de exclusão caso showDeleteModal seja true */}
            { showEditModal && <EditPostModal currentPost={{ postId, title, content }} closeModal={() => setShowEditModal(false)} /> }
        </>
    );
}

export default Post;
