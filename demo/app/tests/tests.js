var Acedrawingview = require("nativescript-acedrawingview").Acedrawingview;
var acedrawingview = new Acedrawingview();

describe("greet function", function() {
    it("exists", function() {
        expect(acedrawingview.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(acedrawingview.greet()).toEqual("Hello, NS");
    });
});