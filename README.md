One project fro testing axios.

#Start
npm start

#Fcuntion

Axios.get('url');
Axios.post('url',data);
Axios.delete('url');

##interceptors
Axios.interceptors.request.use( req => {
  ...
  return req;
}.err =>{
  ...
  return Promise.reject( err );
})
Axios.interceptors.response.use( res => {
  ...
  return res;
}.err =>{
  ...
  return Promise.reject( err );
})

##instance
Axios.default.baseURL('url');
Axios.default.header.common
Axios.default.header...

#Github Page
https://github.com/axios/axios