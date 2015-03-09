;(function() {

    (function () {
        if (!Object.defineProperty ||
            !(function () { try { Object.defineProperty({}, 'x', {}); return true; } catch (e) { return false; } }())) {
            var orig = Object.defineProperty;
            Object.defineProperty = function (o, prop, desc) {
                "use strict";

                // In IE8 try built-in implementation for defining properties on DOM prototypes.
                if (orig) { try { return orig(o, prop, desc); } catch (e) { } }

                if (o !== Object(o)) { throw new TypeError("Object.defineProperty called on non-object"); }
                if (Object.prototype.__defineGetter__ && ('get' in desc)) {
                    Object.prototype.__defineGetter__.call(o, prop, desc.get);
                }
                if (Object.prototype.__defineSetter__ && ('set' in desc)) {
                    Object.prototype.__defineSetter__.call(o, prop, desc.set);
                }
                if ('value' in desc) {
                    o[prop] = desc.value;
                }
                return o;
            };
        }
    }());
    
    (function () {
        if (!String.prototype.startsWith) {
            Object.defineProperty(String.prototype, 'startsWith', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function (searchString, position) {
                    position = position || 0;
                    return this.indexOf(searchString, position) === position;
                }
            });
        }
    }());

    (function () {
        if (!Object.create) {
            Object.create = (function () {
                function F() { }

                return function (o) {
                    if (arguments.length != 1) {
                        throw new Error('Object.create implementation only accepts one parameter.');
                    }
                    F.prototype = o;
                    return new F();
                };
            })();
        }

    }());
    
    (function () {
        if (!Date.now) {
            Date.now = (function () {
                return function () {
                   return new Date().getTime();
                };
            })();
        }

    }());
    
    (function () {
        var D = new Date('2011-06-02T09:34:29+02:00');
        if (!D || +D !== 1307000069000) {
            Date.fromISO = function (s) {
                var day, tz,
                rx = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
                p = rx.exec(s) || [];
                if (p[1]) {
                    day = p[1].split(/\D/);
                    for (var i = 0, L = day.length; i < L; i++) {
                        day[i] = parseInt(day[i], 10) || 0;
                    };
                    day[1] -= 1;
                    day = new Date(Date.UTC.apply(Date, day));
                    if (!day.getDate()) return NaN;
                    if (p[5]) {
                        tz = (parseInt(p[5], 10) * 60);
                        if (p[6]) tz += parseInt(p[6], 10);
                        if (p[4] == '+') tz *= -1;
                        if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
                    }
                    return day;
                }
                return NaN;
            };
        }
        else {
            Date.fromISO = function (s) {
                return new Date(s);
            };
        }
    }());
    
})();

