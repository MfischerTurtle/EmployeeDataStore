const inquirer = require("inquirer");
const connection = require("../config/connection")


function addRole(startUp) {
    let questions = [
      {
        type: "input",
        message: "What type of role would you like to add?",
        name: "title"
      },
      {
        type: "input",
        message: "In what department is the new role?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary"
      }
    ];
    inquirer.prompt(questions).then(function(answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          department_id: answer.id,
          salary: answer.salary
        },
        function(error, res) {
          if (error) throw error;
          startUp();
        }
      );
    });
  };

  function roleView(startUp) {
    connection.query("SELECT * from role", function(err, res) {
      if (err) throw err;
      console.table(res);
      startUp();
    });
  };

  module.exports = {roleView, addRole}
  