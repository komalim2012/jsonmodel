/*global QUnit*/

sap.ui.define([
	"ui5fiori/controller/prac.controller"
], function (Controller) {
	"use strict";

	QUnit.module("prac Controller");

	QUnit.test("I should test the prac controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
