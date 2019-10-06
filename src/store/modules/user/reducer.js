import produce from 'immer';

const INITAL_STATE = {
  profile: null,
};

export default function(state = INITAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draftState => {
        draftState.profile = action.payload.user;
      });
    default:
      return state;
  }
}
