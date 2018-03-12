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
$('#delete').on('click', delFromDom);

function postToDom(){
  let fn = $('#firstName').val();
  let ln = $('#lastName').val();
  let ident = $('#identify').val();
  let t = $('#title').val();
  let as = $('#annualSalary').val();//assigning each input field to a variable
  let creator = new Employee(fn, ln, ident, t, as);//creating an object with an employee class

  employees.push(creator);//adding employee object to employees array which will get deleted later in order to avoid overlapping when new rows are created
  emptyArray.push(creator);//adding employee to array where they won't be deleted


  for (person of employees){
    let addInfo = $('<tr><td>'+person.firstName+'<td>' +person.lastName + '<td>'+person.identity + '<td>'+person.title + '<td>'+person.annualSalary+'</td></tr>');
    $('#fun').append(addInfo);
  }
  $('#bling').empty();
  budget += (parseInt(as)/12);
  $('#bling').append(budget.toFixed(2));
  if (budget > 20000){
    $('#bling').css('color', 'red');
  }
  employees.pop();
  fn = $('#firstName').val('');
  ln = $('#lastName').val('');
  ident = $('#identify').val('');
  t = $('#title').val('');
  as = $('#annualSalary').val('');//emptying each input field

}//end postToDom

function delFromDom (){
  let lastRow = $('#fun').children().last();
  let targetlr = lastRow.children().last();
  let sal = targetlr.children().last();

  targetlr.empty();//removes the last entry in the table
}//end delFromDom
}//end readyNow
