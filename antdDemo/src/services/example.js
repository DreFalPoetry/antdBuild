import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function userLogin(data){
    return request('/api/login',{
        method:'POST',
        body:data
    })
}
