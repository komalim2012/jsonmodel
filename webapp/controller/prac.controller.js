sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5fiori.controller.prac", {
        onInit() {
            //JSON object
            var jModel = {
                EmployeeDetails: [
                    {
                        empId: "001",
                        Name: "Komali",
                        Salary: "30000"
                    },
                    {
                        empId: "002",
                        Name: "Ram",
                        Salary: "45000"
                    },
                    {
                        empId: "003",
                        Name: "sanjana",
                        Salary: "25000"
                    }
                ]
            };
            //JSON model
            var JModel = new JSONModel(jModel);
            this.getView().setModel(JModel, "EmployeeModel")
        },
    });
});