import { draft, baselineList } from '../services/product';

export default {
  namespace: 'search',
  state: {
  	draftnum: {},
    baselinelist: {"data":[{"id":1,"baselineName":"FY 17/18 DT"}]},
  },
  subscriptions: {
  	setup ({dispatch, history}) {
      return history.listen ( ({pathname}) => {
        if (pathname === '/portfolio/search') {
          dispatch({type: 'draft'});
          dispatch({type: 'baselineList'});
        }
      })
    }
  },
  effects: {
  	*draft( { payload }, {call, put}) {
  		const { data } = yield call( draft );
  		yield put({
  			type: 'draftnum',
  			payload: { data },
  		});
  	},
    *baselineList( {payload}, {call, put}) {
      const { data } = yield call ( baselineList );
      yield put({
        type: 'baselinelist',
        payload: { data },
      });
    }
  },
  reducers: {
  	draftnum(state, {payload:{data:draftnum}}){
      return {...state, draftnum};
    },
    baselinelist(state, {payload:{data:baselinelist}}){
      return {...state, baselinelist};
    },
  },
};
