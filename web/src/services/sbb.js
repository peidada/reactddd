import request from '../utils/request';

export function query(id) {
  return request(`/sbb/portfolio/${id}`, {
    method: 'get',
  });
}
