import * as searchService from '../services/product';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'search',
  state: {
  	list: [],
  },
  reducers: {
  	save(state, {payload:{data:list}}){
      return {...state, list};
      alert(1111)
    },
  },
  effects: {
  	*mock({call, put}) {
  		const data = yield call(searchService.mock);
  		yield put({
  			type: 'save',
  			payload: 'data'
  		});
  	},
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
};
