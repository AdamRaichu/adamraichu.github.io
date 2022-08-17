var _ConsoleLog = console.log;
var _ConsoleInfo = console.info;
var _ConsoleWarn = console.warn;
var _ConsoleError = console.error;
var _ConsoleGroup = console.group;
var fName = "";
console.log = function () {
  args = [];
  args.push('%c[' + fName + '] ');
  args.push('color: #ae7337')
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  _ConsoleLog.apply(console, args);
};
console.info = function () {
  args = [];
  args.push('%c[' + fName + '] ');
  args.push('color: #ae7337')
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  _ConsoleInfo.apply(console, args);
};
console.warn = function () {
  args = [];
  args.push('%c[' + fName + '] ');
  args.push('color: #ae7337')
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  _ConsoleWarn.apply(console, args);
};
console.error = function () {
  args = [];
  args.push('%c[' + fName + '] ');
  args.push('color: #ae7337')
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  _ConsoleError.apply(console, args);
};
console.group = function () {
  args = [];
  args.push('%c[' + fName + '] ');
  args.push('color: #ae7337')
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  _ConsoleGroup.apply(console, args);
};