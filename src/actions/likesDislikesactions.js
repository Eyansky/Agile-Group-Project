import axios from 'axios';
import swal from 'sweetalert';

const token = JSON.parse(localStorage.getItem('token'));
const storage = JSON.parse(localStorage.getItem('user'));

export const LIKE_ARTICLE = 'likedislike';

export const LIKED_ARTICLE_NUMBERS = 0;

export const likeacticle = input => ({
  type: LIKE_ARTICLE,
  input,
});

export const getlikearticle = response => ({
  type: LIKED_ARTICLE_NUMBERS,
  response,
});

export const DISLIKE_ARTICLE = 'dislike';

export const dislikeacticle = input => ({
  type: DISLIKE_ARTICLE,
  input,
});

// export const likesArticleActions = slug => (dispatch) => {
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   };
//   axios.post(`${process.env.REACT_APP_URL}article/like/${slug}/`, { headers })
//     .then((res) => {
//       if (res.status === 200) {
//         dispatch(likeacticle(slug));
//         swal(res.data.response);
//       }
//     });
// };
export const likesArticleActions = (slug) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return dispatch => axios.post(`${process.env.REACT_APP_URL}article/like/${slug}/`, { headers });
};

export const getlikesArticleActions = slug => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${storage.token}`,
  };
  axios.get(`${process.env.REACT_APP_URL}article/like/${slug}/`, { headers })
    .then(res => res.data.response);
};

export const dislikesArticleActions = slug => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  axios.post(`${process.env.REACT_APP_URL}article/dislike/${slug}/`, { headers })
    .then((res) => {
      if (res.status === 200) {
        dispatch(dislikeacticle(slug));
        swal(res.data.response);
      }
    });
};

export const getdislikesArticleActions = slug => dispatch => axios({
  url: `${process.env.REACT_APP_URL}article/dislike/${slug}/`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
