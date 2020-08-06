<img src="http://bitcore.io/css/images/module-message.png" alt="sumcore message" height="35">
# Sumcoin Message Verification and Signing for Sumcore


[![NPM Package](https://img.shields.io/npm/v/sumcore-message.svg?style=flat-square)](https://www.npmjs.org/package/sumcore-message)
[![Build Status](https://img.shields.io/travis/sumcoinlabs/sumcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/sumcoinlabs/sumcore-message)
[![Coverage Status](https://img.shields.io/coveralls/sumcoinlabs/sumcore-message.svg?style=flat-square)](https://coveralls.io/r/sumcoinlabs/sumcore-message?branch=master)

sumcore-message adds support for verifying and signing sumcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main sumcore repo](https://github.com/sumcoinlabs/sumcore) for more information.

## Getting Started

```sh
npm install sumcore-message
```

```sh
bower install sumcore-message
```

To sign a message:

```javascript
var sumcore = require('sumcore-lib');
var Message = require('sumcore-message');

var privateKey = sumcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/sumcoinlabs/sumcore/blob/master/CONTRIBUTING.md) on the main sumcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/sumcoinlabs/sumcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 - 2020 The Sumcoin Core Developers
