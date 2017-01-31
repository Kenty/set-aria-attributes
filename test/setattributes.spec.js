"use strict";
// import assert = require('power-assert');
var assert = require("power-assert");
var jsdom = require("jsdom");
var setattributes_1 = require("../src/setattributes");
describe('SetAttributesTest', function () {
    var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    it('コンスタラクタのテスト', function () {
        var elm = document.getElementById('btnPrimary');
        var setAttr = new setattributes_1.SA.SetAttributes(elm);
        assert.equal(setAttr.el, elm);
    });
});
//# sourceMappingURL=setattributes.spec.js.map