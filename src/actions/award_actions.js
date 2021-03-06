import APIUtil from '../util/api_util';

export const RECEIVE_AWARDS = 'RECEIVE_AWARDS';
export const RECEIVE_AWARD = 'RECEIVE_AWARD';
export const START_LOADING_AWARDS = 'START_LOADING_AWARDS';

export const fetchAllAwards = () => dispatch => (
  APIUtil.fetchAllAwards().then(awards =>
    dispatch(receiveAwards(awards)))
);

export const fetchAward = id => dispatch => (
  APIUtil.fetchAward(id).then(award => dispatch(receiveAwards(award)))
);

export const createAward = awardParams => dispatch => (
  APIUtil.createAward(awardParams).then(award =>
    dispatch(receiveAward(award)))
);

export const receiveAwards = awards => ({
  type: RECEIVE_AWARDS,
  awards
});

export const receiveAward = award => ({
  type: RECEIVE_AWARD,
  award
});

export const startLoadingAwards = () => ({
  type: START_LOADING_AWARDS
});
