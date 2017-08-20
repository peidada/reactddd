import * as sbbService from '../services/users';

import dva from 'dva';

export default({
	namespace:'sbbMain',
	state : {
		data:{},
	},
	subscriptions : {
		setup ({dispath,history}) {
			 history.listen(() => {
				//const match = pathToRegexp('/sbb/:id').exec(localtion.pathname)
				//if(math){
					dispatch({
						type:'query',
						// payload: { id: match[1] }
						payload: {}
					 })
		// }
      })
    },
  },
	effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(sbbService.query, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
      } else {
        throw data
      }
    },
  },
  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
})
