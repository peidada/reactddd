import { mock } from '../services/product';

export default {
  namespace: 'product',
  state: {
  	list: [],
  },
  subscriptions: {
    setup ({dispatch, history}) {
      return history.listen ( ({pathname}) => {
        if (pathname === '/portfolio/search/product') {
          dispatch({type: 'mock'});
        }
      })
    }
  },
  effects: {
  	*mock( { payload }, {call, put}) {
  		const { data } = yield call( mock );
      	console.log(data)
  		yield put({
  			type: 'save',
  			payload: { data },
  		});
  	},
  },
  reducers: {
    save(state, {payload:{data:list}}){
      return {...state, list};
    },
  },
};
