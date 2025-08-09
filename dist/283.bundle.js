webpackJsonp([283],{

/***/ 5113:
/*!*************************************************!*\
  !*** ./node_modules/svg-tag-names/package.json ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"name":"svg-tag-names","version":"1.1.2","description":"List of known SVG tag-names","license":"MIT","keywords":["svg","tag","name","element","tagname","w3c"],"repository":"wooorm/svg-tag-names","bugs":"https://github.com/wooorm/svg-tag-names/issues","author":"Titus Wormer <tituswormer@gmail.com> (https://wooorm.com)","contributors":["Titus Wormer <tituswormer@gmail.com> (https://wooorm.com)"],"main":"index.json","files":["index.json"],"dependencies":{},"devDependencies":{"bail":"^1.0.0","browserify":"^16.0.0","concat-stream":"^2.0.0","hast-util-select":"^3.0.0","hast-util-to-string":"^1.0.0","prettier":"^1.12.1","rehype-parse":"^6.0.0","remark-cli":"^6.0.0","remark-preset-wooorm":"^4.0.0","tape":"^4.4.0","tinyify":"^2.5.0","unified":"^7.0.0","xo":"^0.24.0"},"scripts":{"generate":"node build","format":"remark . -qfo && prettier --write \"**/*.js\" && xo --fix","build-bundle":"browserify index.json -s svgTagNames -o svg-tag-names.js","build-mangle":"browserify index.json -s svgTagNames -p tinyify -o svg-tag-names.min.js","build":"npm run build-bundle && npm run build-mangle","lint":"xo","test-api":"node test","test":"npm run format && npm run build && npm run test-api"},"prettier":{"tabWidth":2,"useTabs":false,"singleQuote":true,"bracketSpacing":false,"semi":false,"trailingComma":"none"},"xo":{"prettier":true,"esnext":false,"ignore":["svg-tag-names.js"]},"remarkConfig":{"plugins":["preset-wooorm"]}}

/***/ })

});
//# sourceMappingURL=283.bundle.js.map