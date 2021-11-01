const Tools = require('../lib/Tools').Tools;
const assert = require('assert');

describe('Tools', () => {
  describe('isUndefined', () => {
    it('should return false when typeof {}', () => {
      assert.equal(Tools.isUndefined({}), false);
    });
    it('should return false when typeof {object}', () => {
      let objj = {
        a: "john",
        b: "Sam"
      }
      assert.equal(Tools.isUndefined(objj), false);
    });
    it('should return true when typeof nothing', () => {
      assert.equal(Tools.isUndefined(), true);
    });
    it('should return false when emtpy string', () => {
      assert.equal(Tools.isUndefined(''), false);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isUndefined(null), false);
    });
    it('should return false when "null"', () => {
      assert.equal(Tools.isUndefined("null"), false);
    });
    it('should return false when "undefined"', () => {
      assert.equal(Tools.isUndefined("undefined"), false);
    });
    it('should return true when undefined', () => {
      assert.equal(Tools.isUndefined(undefined), true);
    });
    it('should return false when []', () => {
      assert.equal(Tools.isUndefined([]), false);
    });
    it('should return false when [num array]', () => {
      assert.equal(Tools.isUndefined([0, 1, 2]), false);
    });
    it('should return false when [array]', () => {
      assert.equal(Tools.isUndefined(["Red", "Green", "Blue"]), false);
    });
  });
  describe('isObject', () => {
    it('should return true when typeof {}', () => {
      assert.equal(Tools.isObject({}), true);
    });
    it('should return true when typeof {object}', () => {
      let objj = {
        a: "john",
        b: "Sam"
      }
      assert.equal(Tools.isObject(objj), true);
    });
    it('should return false when typeof number:100', () => {
      assert.equal(Tools.isObject(100), false);
    });
    it('should return false when emtpy string', () => {
      assert.equal(Tools.isObject(''), false);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isObject(null), false);
    });
    it('should return false when undefined', () => {
      assert.equal(Tools.isObject(undefined), false);
    });
    it('should return false when []', () => {
      assert.equal(Tools.isObject([]), false);
    });
    it('should return false when [num array]', () => {
      assert.equal(Tools.isObject([0, 1, 2]), false);
    });
    it('should return false when [array]', () => {
      assert.equal(Tools.isObject(["Red", "Green", "Blue"]), false);
    });
  });
  describe('isNumber', () => {
    it('should return true when typeof number:1', () => {
      assert.equal(Tools.isNumber(1), true);
    });
    it('should return true when typeof number:100', () => {
      assert.equal(Tools.isNumber(100), true);
    });
    it('should return true when typeof number:0', () => {
      assert.equal(Tools.isNumber(0), true);
    });
    it('should return true when typeof number:-5100', () => {
      assert.equal(Tools.isNumber(-5100), true);
    });
    it('should return true when typeof number float:112.415', () => {
      assert.equal(Tools.isNumber(112.415), true);
    });
    it('should return true when typeof number float:100.7485', () => {
      assert.equal(Tools.isNumber(100.7485), true);
    });
    it('should return true when typeof number float:0.24', () => {
      assert.equal(Tools.isNumber(0.24), true);
    });
    it('should return true when typeof number float:-5100.51', () => {
      assert.equal(Tools.isNumber(-5100.51), true);
    });
    it('should return false when emtpy string', () => {
      assert.equal(Tools.isNumber(''), false);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isNumber(null), false);
    });
    it('should return false when undefined', () => {
      assert.equal(Tools.isNumber(undefined), false);
    });
    it('should return false when a string number:"5"', () => {
      assert.equal(Tools.isNumber("5"), false);
    });
    it('should return false when a string number:"1"', () => {
      assert.equal(Tools.isNumber("1"), false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isNumber(true), false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isNumber(false), false);
    });
  });
  describe('isStringNumber', () => {
    it('should return true when typeof number:1', () => {
      assert.equal(Tools.isStringNumber(1).status, true);
    });
    it('should return true when typeof number:100', () => {
      assert.equal(Tools.isStringNumber(100).status, true);
    });
    it('should return true when typeof number:0', () => {
      assert.equal(Tools.isStringNumber(0).status, true);
    });
    it('should return true when typeof number:-5100', () => {
      assert.equal(Tools.isStringNumber(-5100).status, true);
    });
    it('should return true when typeof number float:112.415', () => {
      assert.equal(Tools.isStringNumber(112.415).status, true);
    });
    it('should return true when typeof number float:100.7485', () => {
      assert.equal(Tools.isStringNumber(100.7485).status, true);
    });
    it('should return true when typeof number float:0.24', () => {
      assert.equal(Tools.isStringNumber(0.24).status, true);
    });
    it('should return true when typeof number float:-5100.51', () => {
      assert.equal(Tools.isStringNumber(-5100.51).status, true);
    });
    it('should return false when emtpy string', () => {
      assert.equal(Tools.isStringNumber('').status, false);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isStringNumber(null).status, false);
    });
    it('should return false when undefined', () => {
      assert.equal(Tools.isStringNumber(undefined).status, false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isStringNumber(true).status, false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isStringNumber(false).status, false);
    });

    it('should return true when typeof string number:1', () => {
      assert.equal(Tools.isStringNumber('1').status, true);
    });
    it('should return true when typeof string number:100', () => {
      assert.equal(Tools.isStringNumber('100').status, true);
    });
    it('should return true when typeof string number:0', () => {
      assert.equal(Tools.isStringNumber('0').status, true);
    });
    it('should return true when typeof string number:-5100', () => {
      assert.equal(Tools.isStringNumber('-5100').status, true);
    });
    it('should return true when typeof string number float:112.415', () => {
      assert.equal(Tools.isStringNumber('112.415').status, true);
    });
    it('should return true when typeof string number float:100.7485', () => {
      assert.equal(Tools.isStringNumber('100.7485').status, true);
    });
    it('should return true when typeof string number float:0.24', () => {
      assert.equal(Tools.isStringNumber('0.24').status, true);
    });
    it('should return true when typeof string number float:-5100.51', () => {
      assert.equal(Tools.isStringNumber('-5100.51').status, true);
    });

    it('should return 1 when typeof string number:1', () => {
      assert.equal(Tools.isStringNumber('1').value, 1);
    });
    it('should return 100 when typeof string number:100', () => {
      assert.equal(Tools.isStringNumber('100').value, 100);
    });
    it('should return 0 when typeof string number:0', () => {
      assert.equal(Tools.isStringNumber('0').value, 0);
    });
    it('should return -5100 when typeof string number:-5100', () => {
      assert.equal(Tools.isStringNumber('-5100').value, -5100);
    });
    it('should return 112.415 when typeof string number float:112.415', () => {
      assert.equal(Tools.isStringNumber('112.415').value, 112.415);
    });
    it('should return 100.7485 when typeof string number float:100.7485', () => {
      assert.equal(Tools.isStringNumber('100.7485').value, 100.7485);
    });
    it('should return 0.24 when typeof string number float:0.24', () => {
      assert.equal(Tools.isStringNumber('0.24').value, 0.24);
    });
    it('should return -5100.51 when typeof string number float:-5100.51', () => {
      assert.equal(Tools.isStringNumber('-5100.51').value, -5100.51);
    });

    it('should return false when emtpy string', () => {
      assert.equal(Tools.isStringNumber('').status, false);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isStringNumber(null).status, false);
    });
    it('should return false when undefined', () => {
      assert.equal(Tools.isStringNumber(undefined).status, false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isStringNumber(true).status, false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isStringNumber(false).status, false);
    });
  });
  describe('isString', () => {
    it('should return true when typeof string', () => {
      assert.equal(Tools.isString('Hello World'), true);
    });
    it('should return true when emtpy string', () => {
      assert.equal(Tools.isString(''), true);
    });
    it('should return false when null', () => {
      assert.equal(Tools.isString(null), false);
    });
    it('should return false when undefined', () => {
      assert.equal(Tools.isString(undefined), false);
    });
    it('should return false when a number:5', () => {
      assert.equal(Tools.isString(5), false);
    });
    it('should return false when a number:1', () => {
      assert.equal(Tools.isString(1), false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isString(true), false);
    });
    it('should return false when a boolean', () => {
      assert.equal(Tools.isString(false), false);
    });
  });
  describe('flattenObject', () => {
    it('should return flat', () => {
      let objToFlat = {
        name: {
          first: "Jon",
          last: "Doe",
          active: true,
          deleted: false,
        },
        age: 123,
        colors: ["Red", "Green", "Blue"]
      }
      let flatObj = Tools.flattenObject(objToFlat);
      assert.equal(flatObj['name.active'], true);
      assert.equal(flatObj['name.deleted'], false);
      assert.equal(flatObj['name.first'], 'Jon');
      assert.equal(flatObj['name.last'], 'Doe');
      assert.equal(flatObj['age'], 123);
      assert.equal(flatObj['colors.0'], 'Red');
      assert.equal(flatObj['colors.1'], 'Green');
      assert.equal(flatObj['colors.2'], 'Blue');
    });
  });
  describe('setUpdatedTemplatePathFinder', () => {
    it('should set strings down a obj path', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1)
      assert.equal(output.a.b.c.d, "hello", "string was not set down path");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it('should set strings down a obj path - not changing the path value', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1)
      assert.equal(path, 'a.b.c.d', "original path variable was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it('should set strings down a obj path - not changing original object', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1)
      assert.equal(obj1.a.b.c.d, undefined, "Original object was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it('should set array down a obj path where obj is not array, should overwrite object', () => {
      let obj1 = {
        a: {
          b: {
            c: {
              d: 'hellow'
            },
            x: true
          }
        }
      }
      let path = 'a.b.c.d.0';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1)
      assert.equal(Tools.isArray(output.a.b.c.d), true, "Change was not correctly placed into an array");
      assert.equal(output.a.b.c.d[0], "hello", "Array was not set to correctly");
    });
    it('should set array down a obj path', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d.0';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1)
      assert.equal(Tools.isArray(output.a.b.c.d), true, "Change was not correctly placed into an array");
      assert.equal(output.a.b.c.d[0], "hello", "Array was not appended to correctly");
    });
    it('should set array[1] down a obj path', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d.0';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = 'a.b.c.d.1';
      let value2 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      assert.equal(Tools.isArray(output.a.b.c.d), true, "Change was not correctly placed into an array");
      assert.equal(output.a.b.c.d[0], "hello", "Array order is incorrect/appended to incorrectly");
      assert.equal(output.a.b.c.d[1], "world", "Array order is incorrect/appended to incorrectly");
    });
    it('should set array[1] down a obj path', () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true
          }
        }
      }
      let path = 'a.b.c.d.0';
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = 'a.b.c.d.2';
      let value2 = "!";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      let path3 = 'a.b.c.d.1';
      let value3 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
      assert.equal(Tools.isArray(output.a.b.c.d), true, "Change was not correctly placed into an array");
      assert.equal(output.a.b.c.d[0], "hello", "Array order is incorrect/appended to incorrectly");
      assert.equal(output.a.b.c.d[1], "world", "Array order is incorrect/appended to incorrectly");
      assert.equal(output.a.b.c.d[2], "!", "Array order is incorrect/appended to incorrectly");
    });
  });
});