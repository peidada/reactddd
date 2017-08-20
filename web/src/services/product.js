import request from '../utils/request';
import qs from 'qs';

export function mock() {
	return request(`/api/users`);
}

export async function draft() {
	return request(`/product/draft-box-num`);
}

export async function baselineList() {
	return request(`/product/baseline-list`);
}