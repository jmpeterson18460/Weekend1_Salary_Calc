$(document).ready(readyNow);

function readyNow(){

let budget = 0;
let fn = $('#firstName').val();//assigning input values
let ln = $('#lastName').val();
let ident = $('#identify').val();
let t = $('#title').val();
let as = $('#annualSalary').val();

let employees = [];
let emptyArray = [];

class Employee {
  constructor(firstName, lastName, identity, title, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.identity = identity;
    this.title = title;
    this.annualSalary = annualSalary;
  }//end constructor
}//end class Employee

$('#submit').on('click', postToDom);

function postToDom(){
  let fn = $('#firstName').val();
  let ln = $('#lastName').val();
  let ident = $('#identify').val();
  let t = $('#title').val();
  let as = $('#annualSalary').val();//assigning each input field to a variable
  let creator = new Employee(fn, ln, ident, t, as);//creating an object with an employee class

  employees.push(creator);//adding employee object to employees array
  emptyArray.push(creator);


  for (person of employees){
    let addInfo = $('<tr><td>'+person.firstName+'<td>' +person.lastName + '<td>'+person.identity + '<td>'+person.title + '<td>'+person.annualSalary+'</td></tr>');
    $('#fun').append(addInfo);
  }
  $('#bling').empty();
  budget += (parseInt(as)/12);
  $('#bling').append(budget);
  if (budget > 20000){
    $('#bling').css('color', 'red');
  }
  employees.pop();
  fn = $('#firstName').val('');
  ln = $('#lastName').val('');
  ident = $('#identify').val('');
  t = $('#title').val('');
  as = $('#annualSalary').val('');//emptying each input field

}
}//end readyNow
