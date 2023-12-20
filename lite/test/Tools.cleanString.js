const Tools = require("../lib/Tools").Tools;
const assert = require("assert");

const allChars = ` \`1234567890-=~!@#$%^&*()_+[]\{}|;':",./< >?qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMவணக்கம்你好안녕하세요こんにちは `;

describe("Tools.cleanString", () => {
  describe("limit", () => {
    it("should limit output", () => {
      assert.equal(
        Tools.cleanString(allChars, 10).length,
        10,
        "Not limiting to 10"
      );
      assert.equal(
        Tools.cleanString(allChars, 50).length,
        50,
        "Not limiting to 50"
      );
      assert.equal(
        Tools.cleanString(allChars, 1).length,
        1,
        "Not limiting to 1"
      );
    });
  });
  describe("return", () => {
    it("undefined", () => {
      const randomString = undefined;
      assert.equal(
        Tools.cleanString(randomString, undefined, undefined, true),
        undefined,
        "Does not return undefined"
      );
      assert.equal(
        Tools.cleanString(randomString, undefined, undefined, false),
        "",
        "Does not blank"
      );
    });
    it("null", () => {
      const randomString = null;
      assert.equal(
        Tools.cleanString(randomString, undefined, undefined, true),
        null,
        "Does not return null"
      );
      assert.equal(
        Tools.cleanString(randomString, undefined, undefined, false),
        "",
        "Does not blank"
      );
    });
    it("blank string", () => {
      const randomString = "";
      assert.equal(Tools.cleanString(randomString), "", "Does not blank");
    });
  });
  describe("strength", () => {
    it("soft", () => {
      assert.equal(
        Tools.cleanString(allChars, 255, "soft"),
        "1234567890-~@_+:,./ qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Not correctly cleaning soft"
      );
    });
    it("url", () => {
      assert.equal(
        Tools.cleanString(allChars, 255, "url"),
        "1234567890-=~@%&_+:,./ ?qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Not correctly cleaning url"
      );
      assert.equal(
        Tools.cleanString(
          "https://stackoverflow.com/questions/72604265/how-to-update-the-compose-ui-if-the-mutablelivemutablelistobject-value-is-co",
          255,
          "url"
        ),
        "https://stackoverflow.com/questions/72604265/how-to-update-the-compose-ui-if-the-mutablelivemutablelistobject-value-is-co",
        "Not correctly cleaning url"
      );
      assert.equal(
        Tools.cleanString(
          "https://stackoverflow.com/nocaptcha?s=614866bb-e2dd-482f-acb4-a9a5b3acf32b",
          255,
          "url"
        ),
        "https://stackoverflow.com/nocaptcha?s=614866bb-e2dd-482f-acb4-a9a5b3acf32b",
        "Not correctly cleaning url"
      );
    });
    it("ip", () => {
      assert.equal(
        Tools.cleanString(allChars, 255, "ip"),
        "1234567890%:./qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Not correctly cleaning ip"
      );
      assert.equal(
        Tools.cleanString("fe80::7:8%eth0", 255, "ip"),
        "fe80::7:8%eth0",
        "Not correctly cleaning ip"
      );
      assert.equal(
        Tools.cleanString("fe80::7:8%1", 255, "ip"),
        "fe80::7:8%1",
        "Not correctly cleaning ip"
      );
      assert.equal(
        Tools.cleanString("2001:db8:3:4::192.0.2.33", 255, "ip"),
        "2001:db8:3:4::192.0.2.33",
        "Not correctly cleaning ip"
      );
      assert.equal(
        Tools.cleanString("192.168.0.1", 255, "ip"),
        "192.168.0.1",
        "Not correctly cleaning ip"
      );
      assert.equal(
        Tools.cleanString("192.168.0.1/32", 255, "ip"),
        "192.168.0.1/32",
        "Not correctly cleaning ip"
      );
    });
    it("hard", () => {
      assert.equal(
        Tools.cleanString(allChars, 255, "hard"),
        "1234567890-~_:,./qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Not correctly cleaning hard"
      );
      assert.equal(
        Tools.cleanString(allChars, 255),
        "1234567890-~_:,./qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Default is hard"
      );
    });
    it("exhard", () => {
      assert.equal(
        Tools.cleanString(allChars, 255, "exhard"),
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        "Not correctly cleaning exhard"
      );
    });
  });
});
