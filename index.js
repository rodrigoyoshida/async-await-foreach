"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function asyncForEach(_x, _x2) {
  return _asyncForEach.apply(this, arguments);
}

function _asyncForEach() {
  _asyncForEach = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(array, callback) {
    var index;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < array.length)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return callback(array[index], index, array);

          case 4:
            index++;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncForEach.apply(this, arguments);
}

if (exports) exports = asyncForEach;
if (module) module.exports = asyncForEach;
