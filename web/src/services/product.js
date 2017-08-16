import request from '../utils/product';

export function mock() {
	return request(`/api/users/1`);
}