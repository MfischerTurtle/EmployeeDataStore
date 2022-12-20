const connection = require("./config/connection")
const inquirer = require("inquirer");
const {addDept, deptView} = require("./exports/department");
const {updateEmpRole, empAllView, addEmp} = require("./exports/employee");
const {roleView, addRole} = require("./exports/role")



connection.connect(function(err) {
  if (err) throw err;
  startUp();
});

function startUp() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?", 
      choices: ["View All Employees", 
      "View All Departments", 
      "View All Roles", "Add Employees", 
      "Add Departments", 
      "Add Roles", 
      "Update Employee Role", 
      "exit"],
      name: "action"
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View All Employees":
          empAllView(startUp);
          break;
        case "View All Departments":
          deptView(startUp);
          break;
        case "View All Roles":
          roleView(startUp);
          break;
        case "Add Employees":
          addEmp(startUp);
          break;
        case "Add Departments":
          addDept(startUp);
          break;
        case "Add Roles":
          addRole(startUp);
          break;
        case "Update Employee Roles":
          updateEmpRole(startUp);
          break;
        case "exit":
          connection.end();
          break;
      }
    });
};

