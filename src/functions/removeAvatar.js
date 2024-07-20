import apiConfig from './apiConfig';
import baseAxios from './baseAxios';
import messages from './Messages';
import Toast from './Toast';


const removeAvatar = () => {

  baseAxios
  .delete('profile/delete-avatar', apiConfig())
  .then((success) => {
    Toast.fire({
      icon: 'success',
      text: messages.avatar_deleted
    })
    localStorage.removeItem('avatar')
    window.location.reload();
  })
  .catch((error) => {
    Toast.fire({
      icon: 'error',
      text: messages.error
    })
  });
}

export default removeAvatar;