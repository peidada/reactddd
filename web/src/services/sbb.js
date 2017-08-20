import request from '../utils/request';

/*export function query(id) {
  return request(`/sbb/portfolio/${id}`, {
    method: 'get',
  });
}*/

export asyn function query(params){
	return request({
		url:/sbb/portfolio,
		 method: 'get',
    data: params,
	})
}
