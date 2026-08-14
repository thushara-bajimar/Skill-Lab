-- sql:
-- struc data : formatting
-- create database
-- create table
-- sql : case ins
-- create table tbname (
-- columnName datatype
--)

create table employee(
  employee_id int, 
  employee_name varchar(40),
  department varchar(50),
  salary int,
  age int,
  city varchar(50),
  experience int
);
insert into employee
(employee_id, employee_name, department, salary, age, city, experience)
values 
  (2, 'rahul', 'hr', 50000, 25, 'delhi', 3),
  (3, 'sakshi', 'pa', 10000, 40, 'goa', 2),
  (4, 'hima', 'it', 75000, 30, 'mysuru', 5),
  (5, 'manju', 'dev', 90000, 43, 'delhi', 3);

-- display table
select * from employee;
select city from employee;
select city, experience from employee;

-- crud sql
-- update table_name
-- set col1 = val1, col2 = val2, ...
-- where condition;

update employee
set experience = 4
where employee_name = 'sakshi';

select * from employee;

delete from employee
where employee_name = 'rahul';

select * from employee;