import axios from 'axios';

import { SUBMIT_LOGIN, connectUser, DELETE_SUBMIT } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().log;
      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/login_check',
        {
          username: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // todo recuperer l id pour le mettre dans le state. et l'envoyer dans connect user
          store.dispatch(connectUser(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default logMiddleware;
