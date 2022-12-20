DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department( 
department_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR (30) NOT NULL
);

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

CREATE TABLE role (
role_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR (30) NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
department_id INT,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE CASCADE
);
INSERT INTO role (department_id, title, salary)
VALUES (1, "Sales Lead", 110000);
INSERT INTO role (department_id,title, salary )
VALUES (1, "Salesperson", 68000);
INSERT INTO role (department_id,title, salary)
VALUES (2, "Lead Engineer", 125000);
INSERT INTO role (department_id, title, salary)
VALUES (2, "Software Engineer", 115000);
INSERT INTO role (department_id , title, salary)
VALUES (3, "Account Manager", 1605000);
INSERT INTO role (department_id, title, salary)
VALUES (3, "Accountant", 113000);
INSERT INTO role (department_id, title, salary)
VALUES (4, "Legal Team Lead", 217000);
INSERT INTO role (department_id, title, salary)
VALUES (4, "Lawyer", 190000);

CREATE TABLE employee(
employee_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (35) NOT NULL,
last_name VARCHAR (35) NOT NULL,
role_id INT,
manager_id INT NULL,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE SET NULL,
CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE CASCADE
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bruce", "Wanye", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Barry", "Allen", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Grodan", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harley", "Quin", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jon", "Sweart", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Thor", "Odinson", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Loki", "Odinson", 8, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Rogers", 5, null);
INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Madson", 6, null);