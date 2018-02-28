import APIUtil from '../util/api_util';

export const RECEIVE_AWARDS = 'RECEIVE_AWARDS';
export const RECEIVE_AWARD = 'RECEIVE_AWARD';

export const fetchAllAwards = () => dispatch => (
  APIUtil.fetchAllAwards().then(
    ({ allAwards: awards }) => dispatch(receiveAwards(awards))
  )
);

export const fetchAward = id => dispatch => (
  APIUtil.fetchAward(id).then(
    ({ award }) => dispatch(receiveAwards(award))
  )
);

export const createAward = awardParams => (
  APIUtil.createAward(awardParams).then(
    ({ createAward: award }) => dispatch(receiveAward(award))
  )
);

export const receiveAwards = awards => ({
  type: RECEIVE_AWARDS,
  awards
});

export const receiveAward = award => ({
  type: RECEIVE_AWARD,
  award
});
