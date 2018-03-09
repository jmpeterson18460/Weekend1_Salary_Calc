$(document).ready(readyNow);

function readyNow(){

$('#firstName').attr('placeholder', 'First name');//creating placeholder for inputs
$('#lastName').attr('placeholder', 'Last name');
$('#identify').attr('placeholder', 'ID');
$('#title').attr('placeholder', 'Title');
$('#annualSalary').attr('placeholder', 'Annual Salary');

let fn = $('#firstName').val();//assigning input values
let ln = $('#lastName').val();
let ident = $('#identify').val();
let t = $('#title').val();
let as = $('#annualSalary').val();

let employees = [];

class Employee {
  constructor(firstName, lastName, identity, title, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.identity = identity;
    this.title = title;
    this.annualSalary = annualSalary;
  }//end constructor
}//end class Employee

$('#submit').on('click', calculate);

function calculate(){
  let creator = new Employee(fn, ln, ident, t, as);
  
}
}//end readyNow
