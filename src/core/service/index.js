const Service = {};

Service.request = (endPoint, method, body, successCb, errorCb) => {
  const url = `http://localhost:4000/${endPoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json UTF-8'
    },
    body: body ? JSON.stringify(body) : undefined
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(successCb)
    .catch(errorCb);
};

export default Service;