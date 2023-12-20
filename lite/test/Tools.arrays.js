const Tools = require("../lib/Tools").Tools;
const assert = require("assert");

describe("Tools.arrays", () => {
  describe("groupListBy", () => {
    it("should return 2 objects", () => {
      let result = Tools.arrays.groupListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(Object.keys(result).length, 2, "Not valid resp");
    });
    it("should return valid grouping", () => {
      let result = Tools.arrays.groupListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(result.tesla.length, 2, "Not valid resp");
    });
    it("should return object", () => {
      let result = Tools.arrays.groupListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(Tools.isObject(result), true, "Not valid resp");
    });
    it("should return object/array", () => {
      let result = Tools.arrays.groupListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(Tools.isArray(result.tesla), true, "Not valid resp");
    });
  });
  describe("collectListBy", () => {
    it("should return 2 arrays", () => {
      let result = Tools.arrays.collectListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(result.length, 2, "Not valid resp");
    });
    it("should return valid grouping", () => {
      let result = Tools.arrays.collectListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(result[0].length, 2, "Not valid resp");
    });
    it("should return array", () => {
      let result = Tools.arrays.collectListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(Tools.isArray(result), true, "Not valid resp");
    });
    it("should return array/array", () => {
      let result = Tools.arrays.collectListBy(
        (vehicle) => vehicle.make,
        [
          { make: "tesla", model: "3" },
          { make: "tesla", model: "y" },
          { make: "ford", model: "mach-e" },
        ]
      );
      assert.equal(Tools.isArray(result[0]), true, "Not valid resp");
    });
  });
  describe("head", () => {
    it("should return correct val 1", () => {
      let result = Tools.arrays.head([1, 2, 3]);
      assert.equal(result, 1, "Not valid resp");
    });
    it("should return undefined when no values", () => {
      let result = Tools.arrays.head([]);
      assert.equal(result, undefined, "Not valid resp");
    });
  });
  describe("tail", () => {
    it("should return correct val 1", () => {
      let result = Tools.arrays.tail([1, 2, 3]);
      assert.equal(result, 3, "Not valid resp");
    });
    it("should return undefined when no values", () => {
      let result = Tools.arrays.tail([]);
      assert.equal(result, undefined, "Not valid resp");
    });
  });
});
