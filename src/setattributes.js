"use strict";
var SA;
( function(SA) {
var SetAttributes = ( function() {
    function SetAttributes(el) {
        this.state = function() {};
        this.el = el;
    }
    SetAttributes.prototype.init = function() {
        this.setAttributes({
            'aria-haspopup': 'true',
            'aria-expanded': 'false',
        });
        this.click();
    };
    SetAttributes.prototype.setAttributes = function(attrs) {
        // Object.keys(attrs).forEach((key: string) => {
        //   // console.log(["this", this], ["key", attrs[key]]);
        //   let value = attrs[key];
        //   this.el.setAttribute(key, value);
        // });
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = attrs[key];
            console.log('value:', [key, attrs[key]]);
            this.el.setAttribute(key, value);
        }
    };
    SetAttributes.prototype.open = function() {
        this.el.setAttribute('aria-expanded', 'true');
    };
    SetAttributes.prototype.close = function() {
        this.el.setAttribute('aria-expanded', 'false');
    };
    SetAttributes.prototype.toggle = function() {
        this.el.getAttribute('aria-expanded') === 'true' ? this.close() : this.open();
    };
    SetAttributes.prototype.click = function() {
        var _this = this;
        this.el.addEventListener('click', function(ev) {
            var evt = ev || window.event;
            evt.stopPropagation();
            evt.preventDefault();
            _this.toggle();
        }, false);
    };
    return SetAttributes;
}());
SA.SetAttributes = SetAttributes;
} )(SA = exports.SA || (exports.SA = {}));
//# sourceMappingURL=setattributes.js.map
