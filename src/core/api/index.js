import Service from '../service';

const API = {};

API.getAction = (endPoint, successCb, errorCb) => {
  Service.request(endPoint, 'get', null, successCb, errorCb);
};

API.postAction = (endPoint, body, successCb, errorCb) => {
  Service.request(endPoint, 'post', body, successCb, errorCb);
};

API.putAction = () => {
};

API.deleteAction = (endPoint, successCb, errorCb) => {
  Service.request(endPoint, 'delete', null, successCb, errorCb);
}

export default API;