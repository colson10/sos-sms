// 'use strict';

// import superagent from 'superagent';

// const apiURL = 'https://sos-sms.herokuapp.com';

// module.exports = (error, userID, message) => {
//   return superagent.post(`${apiURL}/api/messages/${userID}`)
//     .send({ error, message })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// };
'use strict';

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiURL = 'https://sos-sms.herokuapp.com';

module.exports = function (error, userID, message) {
  return _superagent2.default.post(apiURL + '/api/messages/' + userID).send({ error: error, message: message }).then(function (data) {
    return data;
  }).catch(function (err) {
    throw new Error(err);
  });
};
