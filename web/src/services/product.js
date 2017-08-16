import request from '../utils/product';

export function mock() {
	return request(`/api/user/1`);
}