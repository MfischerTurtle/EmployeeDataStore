const inquirer = require("inquirer");
const connection = require("../config/connection")


function addDept(startUp) {
    inquirer
      .prompt({
        type: "input",
        message: "What would you like to name the new department?",
        name: "department"
      })
      .then(function(answer) {
          console.log(answer.department);
        connection.query("INSERT INTO department SET ?",
          {
            name: answer.department,
          },
          function(err, res) {
            if (err) throw err;
            startUp();
          });
      });
  };

  function deptView(startUp) {
    connection.query("SELECT * from department", function(err, res) {
      if (err) throw err;
      console.table(res);
      startUp();
    });
  };
  module.exports = {addDept, deptView}