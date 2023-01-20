const Tools = require("../lib/Tools").Tools;
const assert = require("assert");

describe("Tools", () => {
  describe("isUndefined", () => {
    it("should return false when typeof {}", () => {
      assert.equal(Tools.isUndefined({}), false);
    });
    it("should return false when typeof {object}", () => {
      let objj = {
        a: "john",
        b: "Sam",
      };
      assert.equal(Tools.isUndefined(objj), false);
    });
    it("should return true when typeof nothing", () => {
      assert.equal(Tools.isUndefined(), true);
    });
    it("should return false when emtpy string", () => {
      assert.equal(Tools.isUndefined(""), false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isUndefined(null), false);
    });
    it('should return false when "null"', () => {
      assert.equal(Tools.isUndefined("null"), false);
    });
    it('should return false when "undefined"', () => {
      assert.equal(Tools.isUndefined("undefined"), false);
    });
    it("should return true when undefined", () => {
      assert.equal(Tools.isUndefined(undefined), true);
    });
    it("should return false when []", () => {
      assert.equal(Tools.isUndefined([]), false);
    });
    it("should return false when [num array]", () => {
      assert.equal(Tools.isUndefined([0, 1, 2]), false);
    });
    it("should return false when [array]", () => {
      assert.equal(Tools.isUndefined(["Red", "Green", "Blue"]), false);
    });
  });
  describe("isObject", () => {
    it("should return true when typeof {}", () => {
      assert.equal(Tools.isObject({}), true);
    });
    it("should return true when typeof {object}", () => {
      let objj = {
        a: "john",
        b: "Sam",
      };
      assert.equal(Tools.isObject(objj), true);
    });
    it("should return false when typeof number:100", () => {
      assert.equal(Tools.isObject(100), false);
    });
    it("should return false when emtpy string", () => {
      assert.equal(Tools.isObject(""), false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isObject(null), false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isObject(undefined), false);
    });
    it("should return false when []", () => {
      assert.equal(Tools.isObject([]), false);
    });
    it("should return false when [num array]", () => {
      assert.equal(Tools.isObject([0, 1, 2]), false);
    });
    it("should return false when [array]", () => {
      assert.equal(Tools.isObject(["Red", "Green", "Blue"]), false);
    });
  });
  describe("isArray", () => {
    it("should return true when typeof []", () => {
      assert.equal(Tools.isArray([]), true);
    });
    it("should return true when typeof {array}", () => {
      let objj = [
        "john",
        "Sam"
      ];
      assert.equal(Tools.isArray(objj), true);
    });
    it("should return true when typeof {array[object]}", () => {
      let objj = [
        {a: "john"},
        {b: "Sam"},
      ];
      assert.equal(Tools.isArray(objj), true);
    });
    it("should return false when typeof number:100", () => {
      assert.equal(Tools.isArray(100), false);
    });
    it("should return false when emtpy string", () => {
      assert.equal(Tools.isArray(""), false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isArray(null), false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isArray(undefined), false);
    });
    it("should return false when {}", () => {
      assert.equal(Tools.isArray({}), false);
    });
    it("should return true when [num array]", () => {
      assert.equal(Tools.isArray([0, 1, 2]), true);
    });
  });
  describe("isNumber", () => {
    it("should return true when typeof number:1", () => {
      assert.equal(Tools.isNumber(1), true);
    });
    it("should return true when typeof number:100", () => {
      assert.equal(Tools.isNumber(100), true);
    });
    it("should return true when typeof number:0", () => {
      assert.equal(Tools.isNumber(0), true);
    });
    it("should return true when typeof number:-5100", () => {
      assert.equal(Tools.isNumber(-5100), true);
    });
    it("should return true when typeof number float:112.415", () => {
      assert.equal(Tools.isNumber(112.415), true);
    });
    it("should return true when typeof number float:100.7485", () => {
      assert.equal(Tools.isNumber(100.7485), true);
    });
    it("should return true when typeof number float:0.24", () => {
      assert.equal(Tools.isNumber(0.24), true);
    });
    it("should return true when typeof number float:-5100.51", () => {
      assert.equal(Tools.isNumber(-5100.51), true);
    });
    it("should return false when emtpy string", () => {
      assert.equal(Tools.isNumber(""), false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isNumber(null), false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isNumber(undefined), false);
    });
    it('should return false when a string number:"5"', () => {
      assert.equal(Tools.isNumber("5"), false);
    });
    it('should return false when a string number:"1"', () => {
      assert.equal(Tools.isNumber("1"), false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isNumber(true), false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isNumber(false), false);
    });
  });
  describe("isStringNumber", () => {
    it("should return true when typeof number:1", () => {
      assert.equal(Tools.isStringNumber(1).status, true);
    });
    it("should return true when typeof number:100", () => {
      assert.equal(Tools.isStringNumber(100).status, true);
    });
    it("should return true when typeof number:0", () => {
      assert.equal(Tools.isStringNumber(0).status, true);
    });
    it("should return true when typeof number:-5100", () => {
      assert.equal(Tools.isStringNumber(-5100).status, true);
    });
    it("should return true when typeof number float:112.415", () => {
      assert.equal(Tools.isStringNumber(112.415).status, true);
    });
    it("should return true when typeof number float:100.7485", () => {
      assert.equal(Tools.isStringNumber(100.7485).status, true);
    });
    it("should return true when typeof number float:0.24", () => {
      assert.equal(Tools.isStringNumber(0.24).status, true);
    });
    it("should return true when typeof number float:-5100.51", () => {
      assert.equal(Tools.isStringNumber(-5100.51).status, true);
    });
    it("should return false when emtpy string", () => {
      assert.equal(Tools.isStringNumber("").status, false);
    });
    it("should return false when IP Address string", () => {
      assert.equal(Tools.isStringNumber("0.0.0.0").status, false);
    });
    it("should return false when IP Address string", () => {
      assert.equal(Tools.isStringNumber("192.168.0.1").status, false);
    });
    it("should return false when Cron string", () => {
      assert.equal(Tools.isStringNumber("0 1,13,19 * * *").status, false);
      assert.equal(Tools.isStringNumber("0 2 * * *").status, false);
    });
    it("should return false when half string", () => {
      assert.equal(Tools.isStringNumber("a1a").status, false);
    });
    it("should return false when starts with number, but is string", () => {
      assert.equal(Tools.isStringNumber("1proof").status, false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isStringNumber(null).status, false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isStringNumber(undefined).status, false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isStringNumber(true).status, false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isStringNumber(false).status, false);
    });

    it("should return true when typeof string number:1", () => {
      assert.equal(Tools.isStringNumber("1").status, true);
    });
    it("should return true when typeof string number:100", () => {
      assert.equal(Tools.isStringNumber("100").status, true);
    });
    it("should return true when typeof string number:0", () => {
      assert.equal(Tools.isStringNumber("0").status, true);
    });
    it("should return true when typeof string number:-5100", () => {
      assert.equal(Tools.isStringNumber("-5100").status, true);
    });
    it("should return true when typeof string number float:112.415", () => {
      assert.equal(Tools.isStringNumber("112.415").status, true);
    });
    it("should return true when typeof string number float:100.7485", () => {
      assert.equal(Tools.isStringNumber("100.7485").status, true);
    });
    it("should return true when typeof string number float:0.24", () => {
      assert.equal(Tools.isStringNumber("0.24").status, true);
    });
    it("should return true when typeof string number float:-5100.51", () => {
      assert.equal(Tools.isStringNumber("-5100.51").status, true);
    });

    it("should return 1 when typeof string number:1", () => {
      assert.equal(Tools.isStringNumber("1").value, 1);
    });
    it("should return 100 when typeof string number:100", () => {
      assert.equal(Tools.isStringNumber("100").value, 100);
    });
    it("should return 0 when typeof string number:0", () => {
      assert.equal(Tools.isStringNumber("0").value, 0);
    });
    it("should return -5100 when typeof string number:-5100", () => {
      assert.equal(Tools.isStringNumber("-5100").value, -5100);
    });
    it("should return 112.415 when typeof string number float:112.415", () => {
      assert.equal(Tools.isStringNumber("112.415").value, 112.415);
    });
    it("should return 100.7485 when typeof string number float:100.7485", () => {
      assert.equal(Tools.isStringNumber("100.7485").value, 100.7485);
    });
    it("should return 0.24 when typeof string number float:0.24", () => {
      assert.equal(Tools.isStringNumber("0.24").value, 0.24);
    });
    it("should return -5100.51 when typeof string number float:-5100.51", () => {
      assert.equal(Tools.isStringNumber("-5100.51").value, -5100.51);
    });

    it("should return false when emtpy string", () => {
      assert.equal(Tools.isStringNumber("").status, false);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isStringNumber(null).status, false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isStringNumber(undefined).status, false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isStringNumber(true).status, false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isStringNumber(false).status, false);
    });
  });
  describe("isString", () => {
    it("should return true when typeof string", () => {
      assert.equal(Tools.isString("Hello World"), true);
    });
    it("should return true when emtpy string", () => {
      assert.equal(Tools.isString(""), true);
    });
    it("should return false when null", () => {
      assert.equal(Tools.isString(null), false);
    });
    it("should return false when undefined", () => {
      assert.equal(Tools.isString(undefined), false);
    });
    it("should return false when a number:5", () => {
      assert.equal(Tools.isString(5), false);
    });
    it("should return false when a number:1", () => {
      assert.equal(Tools.isString(1), false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isString(true), false);
    });
    it("should return false when a boolean", () => {
      assert.equal(Tools.isString(false), false);
    });
  });
  describe("flattenObject", () => {
    it("should return flat", () => {
      let objToFlat = {
        name: {
          first: "Jon",
          last: "Doe",
          active: true,
          deleted: false,
          test: null,
          test2: undefined,
        },
        age: 123,
        colors: ["Red", "Green", "Blue"],
        innerArray: [
          {
            name: "iArr1",
          },
          {
            name: "iArr2",
          },
        ],
      };
      let flatObj = Tools.flattenObject(objToFlat);
      assert.equal(flatObj["name.active"], true);
      assert.equal(flatObj["name.deleted"], false);
      assert.equal(flatObj["name.first"], "Jon");
      assert.equal(flatObj["name.last"], "Doe");
      assert.equal(flatObj["name.test"], null);
      assert.equal(flatObj["name.test2"], undefined);
      assert.equal(flatObj["age"], 123);
      console.log(flatObj)
      assert.equal(flatObj["colors.0"], "Red");
      assert.equal(flatObj["colors.1"], "Green");
      assert.equal(flatObj["colors.2"], "Blue");
      assert.equal(flatObj["innerArray.0.name"], "iArr1");
      assert.equal(flatObj["innerArray.1.name"], "iArr2");
    });
  });
  describe("setUpdatedTemplatePathFinder", () => {
    it("should set strings down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(output.a.b.c.d, "hello", "string was not set down path");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it("should set strings down a obj path - not changing the path value", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(path, "a.b.c.d", "original path variable was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it("should set strings down a obj path - not changing original object", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(obj1.a.b.c.d, undefined, "Original object was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it("should set array down a obj path where obj is not array, should overwrite object", () => {
      let obj1 = {
        a: {
          b: {
            c: {
              d: "hellow",
            },
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        `Change was not correctly placed into an array (${typeof output.a.b.c
          .d}) (${JSON.stringify(output.a.b.c.d)})`
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        `Array was not set to correctly (${JSON.stringify(output.a.b.c.d)})`
      );
    });
    it("should set array down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array was not appended to correctly"
      );
    });
    it("should set array[1] down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = "a.b.c.d.1";
      let value2 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[1],
        "world",
        "Array order is incorrect/appended to incorrectly"
      );
    });
    it("should set array[1] down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = "a.b.c.d.2";
      let value2 = "!";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      let path3 = "a.b.c.d.1";
      let value3 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[1],
        "world",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[2],
        "!",
        "Array order is incorrect/appended to incorrectly"
      );
    });
    it("should set array[1].name object down a obj path", () => {
      let exceptCaught = false;
      try {
        let obj1 = {
          a: {
            b: {
              c: {},
              x: true,
            },
          },
        };
        let path = "a.b.c.d.0.name";
        let value = "hello";
        let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
        let path2 = "a.b.c.d.2.name";
        let value2 = "!";
        output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
        let path3 = "a.b.c.d.1.name";
        let value3 = "world";
        output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
        let path4 = "a.b.c.d.1.value";
        let value4 = "cheese";
        output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
        console.log(JSON.stringify(output));
        console.log(JSON.stringify(output.a.b.c.d));
        assert.equal(
          Tools.isArray(output.a.b.c.d),
          true,
          "Change was not correctly placed into an array object"
        );
        assert.equal(
          output.a.b.c.d[0].name,
          "hello",
          "Array order is incorrect/appended to incorrectly object (0)"
        );
        assert.equal(
          output.a.b.c.d[1].name,
          "world",
          "Array order is incorrect/appended to incorrectly object (1)"
        );
        assert.equal(
          output.a.b.c.d[2].name,
          "!",
          "Array order is incorrect/appended to incorrectly object (2)"
        );
        assert.equal(
          output.a.b.c.d[1].value,
          "cheese",
          "Array order is incorrect/appended to incorrectly object (value in 1)"
        );
      } catch (exc) {
        exceptCaught = true;
      }
      assert.equal(
        exceptCaught,
        true,
        "Cannot handle objects in arrays nicely..."
      );
    });
  });
  describe("clampNumber", () => {
    it("should return number within region", () => {
      assert.equal(Tools.clampNumber(0, 100, 60), 60, "Not clamping number");
    });
    it("should return min when low", () => {
      assert.equal(Tools.clampNumber(0, 100, -5), 0, "Not clamping number min");
    });
    it("should return max when high", () => {
      assert.equal(
        Tools.clampNumber(0, 100, 1050),
        100,
        "Not clamping number max"
      );
    });
    it("should error when min > max", () => {
      try {
        Tools.clampNumber(1000, 100, 1050);
        assert.fail("Not throwing exception");
      } catch (e) {
        assert.ok('Throws error');
      }
    });
  });
  /*describe("getValueFromObjectBasedOnStringPathSearcher", () => {
    it("should get strings down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {
              d: "Hlloe 1",
            },
            x: true,
          },
        },
      };
      let output = Tools.GetValueFromObjectBasedOnStringPathSearcher(
        obj1,
        "a.b.c.d"
      );
      assert.equal(output, "Hlloe 1", "string was not gotten");
      let output2 = Tools.GetValueFromObjectBasedOnStringPathSearcher(
        obj1,
        "a.b.x"
      );
      assert.equal(output2, true, "original boolean was not gotten");
    });
    it("should set strings down a obj path - not changing the path value", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(path, "a.b.c.d", "original path variable was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it("should set strings down a obj path - not changing original object", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(obj1.a.b.c.d, undefined, "Original object was altered");
      assert.equal(output.a.b.x, true, "original boolean was changed");
    });
    it("should set array down a obj path where obj is not array, should overwrite object", () => {
      let obj1 = {
        a: {
          b: {
            c: {
              d: "hellow",
            },
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        `Change was not correctly placed into an array (${typeof output.a.b.c
          .d}) (${JSON.stringify(output.a.b.c.d)})`
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        `Array was not set to correctly (${JSON.stringify(output.a.b.c.d)})`
      );
    });
    it("should set array down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array was not appended to correctly"
      );
    });
    it("should set array[1] down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = "a.b.c.d.1";
      let value2 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[1],
        "world",
        "Array order is incorrect/appended to incorrectly"
      );
    });
    it("should set array[1] down a obj path", () => {
      let obj1 = {
        a: {
          b: {
            c: {},
            x: true,
          },
        },
      };
      let path = "a.b.c.d.0";
      let value = "hello";
      let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
      let path2 = "a.b.c.d.2";
      let value2 = "!";
      output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
      let path3 = "a.b.c.d.1";
      let value3 = "world";
      output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
      assert.equal(
        Tools.isArray(output.a.b.c.d),
        true,
        "Change was not correctly placed into an array"
      );
      assert.equal(
        output.a.b.c.d[0],
        "hello",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[1],
        "world",
        "Array order is incorrect/appended to incorrectly"
      );
      assert.equal(
        output.a.b.c.d[2],
        "!",
        "Array order is incorrect/appended to incorrectly"
      );
    });
    it("should set array[1].name object down a obj path", () => {
      let exceptCaught = false;
      try {
        let obj1 = {
          a: {
            b: {
              c: {},
              x: true,
            },
          },
        };
        let path = "a.b.c.d.0.name";
        let value = "hello";
        let output = Tools.setUpdatedTemplatePathFinder(path, value, obj1);
        let path2 = "a.b.c.d.2.name";
        let value2 = "!";
        output = Tools.setUpdatedTemplatePathFinder(path2, value2, output);
        let path3 = "a.b.c.d.1.name";
        let value3 = "world";
        output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
        let path4 = "a.b.c.d.1.value";
        let value4 = "cheese";
        output = Tools.setUpdatedTemplatePathFinder(path3, value3, output);
        console.log(JSON.stringify(output));
        console.log(JSON.stringify(output.a.b.c.d));
        assert.equal(
          Tools.isArray(output.a.b.c.d),
          true,
          "Change was not correctly placed into an array object"
        );
        assert.equal(
          output.a.b.c.d[0].name,
          "hello",
          "Array order is incorrect/appended to incorrectly object (0)"
        );
        assert.equal(
          output.a.b.c.d[1].name,
          "world",
          "Array order is incorrect/appended to incorrectly object (1)"
        );
        assert.equal(
          output.a.b.c.d[2].name,
          "!",
          "Array order is incorrect/appended to incorrectly object (2)"
        );
        assert.equal(
          output.a.b.c.d[1].value,
          "cheese",
          "Array order is incorrect/appended to incorrectly object (value in 1)"
        );
      } catch (exc) {
        exceptCaught = true;
      }
      assert.equal(
        exceptCaught,
        true,
        "Cannot handle objects in arrays nicely..."
      );
    });
  });*/
});
