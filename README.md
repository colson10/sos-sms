# sos-sms

[![Node.js Version][node-version-image]][node-version-url]  
[![NPM Downloads][downloads-image]][downloads-url]    

Send error messages via Twilio with ease!

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the npm registry. Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install sos-sms
```

## Example

sossms(errorCode, userID, message);

```js
const userID = '1234567'
const errorCode = '500'
const message = 'Red Alert!'

sossms(errorCode, userID, message);
```

The ```userID``` is a unique code that a user will receive after registering an account. 

## License

[MIT](LICENSE)

## Copyright

Carl Olson, Cara Ottmar, Sarah Bixler, Zachary Schumpert

[node-version-image]: https://img.shields.io/node/v/http-errors.svg
[node-version-url]: https://nodejs.org/en/download/
[downloads-url]: https://www.npmjs.com/package/sos-sms  
[downloads-image]: https://img.shields.io/npm/dm/sos-sms.svg  

