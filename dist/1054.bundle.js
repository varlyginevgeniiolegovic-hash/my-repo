webpackJsonp([1054],{

/***/ 4342:
/*!*****************************************************!*\
  !*** ./node_modules/memoize-immutable/package.json ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"name":"memoize-immutable","version":"3.0.0","description":"An efficient memoizer for functions that only receive immutable arguments. Ideal for Redux and similar environments.","main":"dist/index.js","jsnext:main":"index.js","engines":{"node":">=6.6.0"},"scripts":{"lint":"eslint ./index.js ./__tests__/index.test.js","jest":"jest ./__tests__/index.test.js --coverage","coverage":"jest ./__tests__/index.test.js --coverage && cat ./coverage/lcov.info | coveralls","test":"npm run jest && npm run lint","test:optimized":"node --allow-natives-syntax __tests__/test-is-optimized.js","clean":"rimraf dist/ && mkdir dist/","build":"npm test && npm run clean && babel index.js --out-file dist/index.js --source-maps && npm run test:optimized"},"keywords":["immutable","memoize","redux"],"author":"@louis_remi","license":"MPL-2.0","dependencies":{"tuplemap":"^1.0.2"},"devDependencies":{"babel-cli":"^6.18.0","babel-jest":"^18.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-preset-es2015":"^6.18.0","chalk":"^1.1.3","coveralls":"^2.11.15","eslint":"^3.12.2","eslint-plugin-mocha":"^4.7.0","jest":"^18.0.0","rimraf":"^2.5.4"},"optionalDependencies":{"lrumap":"^1.0.0","mixedtuplemap":"^1.0.0","namedtuplemap":"^1.0.0","weaktuplemap":"^1.0.0"},"repository":{"type":"git","url":"git+https://github.com/memoize-immutable/memoize-immutable.git"},"bugs":{"url":"https://github.com/memoize-immutable/memoize-immutable/issues"}}

/***/ })

});
//# sourceMappingURL=1054.bundle.js.map