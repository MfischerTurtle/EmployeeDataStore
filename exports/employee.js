const inquirer = require("inquirer");
const connection = require("../config/connection")


function empAllView(startUp) {
    connection.query(
      "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;",
      function(err, res) {
        if (err) throw err;
        console.table(res);
        startUp();
      }
    );
  };

  function updateEmpManager (empID, roleID){
    connection.query("UPDATE employee SET role_id = ? WHERE employee_id = ?", [roleID, empID])
    };
    
    function addEmp(startUp) {
      let questions = [
        {
          type: "input",
          message: "What's the employee's first name?",
          name: "first_name"
        },
        {
          type: "input",
          message: "What's the employee's last name?",
          name: "last_name"
        },
        {
          type: "input",
          message: "What's the employee's title (role_id)?",
          name: "titleID"
        },
        {
          type: "input",
          message: "Who's the employee's manager (employee_id)?",
          name: "managerID"
        }
      ];
      inquirer.prompt(questions).then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.titleID,
            manager_id: answer.managerID,
          },
          function(error) {
            if (error) throw error;
            updateEmpManager(answer.titleID, answer.managerID);
            empAllView(startUp);
          }
        );
      });
    };

    function updateEmpRole(startUp) {
        let employees = empAllView(startUp);
        let empChoices = employees.map(index => {
          id: id;
        })
        inquirer.prompt({
         type: "list",
         name: "role id",
        message: " WHich role would you like to assign the employee?",
        choices: empChoices
      
        })
        connection.query("UPDATE employee SET role_id = ? WHERE employee_id = ?", [roleID, empID])
      
      };

      module.exports = {updateEmpRole, empAllView, addEmp}