export const fetchPosts = async () => {
  try {
    const response = await fetch('https://dev.codeleap.co.uk/careers/');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Erro ao buscar os posts:', response.status);
      throw new Error('Erro ao buscar os posts');
    }
  } catch (error) {
    console.error('Erro de conexão ou requisição:', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await fetch('https://dev.codeleap.co.uk/careers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      return response.json(); // Retornar os dados da resposta
    } else {
      // Erro ao criar o post
      console.error('Erro ao criar o post:', response.status);
      throw new Error('Erro ao criar o post');
    }
  } catch (error) {
    // Erro de conexão ou requisição
    console.error('Erro de conexão ou requisição:', error);
    throw error;
  }
};
  

export const updatePost = async (postId, postData) => {
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      return response.json(); // Retornar os dados da resposta
    } else {
      // Erro ao atualizar o post
      console.error('Erro ao atualizar o post:', response.status);
      throw new Error('Erro ao atualizar o post');
    }
  } catch (error) {
    // Erro de conexão ou requisição
    console.error('Erro de conexão ou requisição:', error);
    throw error;
  }
};
  

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Erro ao excluir o post:', response.status);
      throw new Error('Erro ao excluir o post');
    }
  } catch (error) {
    console.error('Erro de conexão ou requisição:', error);
    throw error;
  }
};