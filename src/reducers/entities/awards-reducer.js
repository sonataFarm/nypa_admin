import { RECEIVE_AWARDS, RECEIVE_AWARD } from '../../actions/award_actions';

const AwardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AWARDS:
      return {
        ...state,
        ...action.awards
      };
    case RECEIVE_AWARD:
      return {
        ...state,
        [action.award.id]: action.award
      }
    default:
      return state;
  }
};

export default AwardsReducer;
