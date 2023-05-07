// console.log('yo!');
$(document).ready(onReady); // get ready

function onReady() { // declare onReady function
    // console.log(2);

    $('.submit-button').on('click', handleSubmit); // event listener for submit button clicks
    $('table').on('click', '.deleteMe', deleteEmployee); // event listener for deleteMe button click
    // $('.formInputClass').on('click', clearField); // failed test to clear inputs

} // end onReady function

// console.log(1)

let employeesArray=[]; // declare global empty array for employee objects
// let allSalariesArray = []; // thought I might need this for calculating salaries, but now not sure if I will, leaving just in case



function handleSubmit(event) { // declare handle submit function
    // console.log('are we there yet?') // log to test

    let firstNameInput=$('#firstNameInput').val(); // declare local variable to link input variable to form input
    let lastNameInput=$('#lastNameInput').val(); // declare local variable to link input variable to form input
    let employeeIdInput=$('#employeeIdInput').val(); // declare local variable to link input variable to form input
    let jobTitleInput=$('#jobTitleInput').val(); // declare local variable to link input variable to form input
    let annualSalaryInput=+$('#annualSalaryInput').val(); // declare local variable to link input variable to form input
    
    console.log(firstNameInput); // log to test
    console.log(lastNameInput); // log to test
    console.log(employeeIdInput); // log to test
    console.log(jobTitleInput); // log to test
    console.log(annualSalaryInput); // log to test

    

    event.preventDefault(); // stop browser from default clearing submit data from js
    
    $('input').val(''); // return input fields to default on click

    
    
    let result=false; // set default result for if/else conditional to ensure all fields are filled before submitting
    // use if/else conditional to either not accept submit if incomplete, or 
    // append new employee if fields are complete
    if ( firstNameInput === '' || lastNameInput === '' || employeeIdInput === '' || jobTitleInput === '' || annualSalaryInput === '' ) {
        alert('You did not complete all the required fields.'); 
    } else {
     $('tbody').append(`
            <tr>
            <td class="newEmployee">${firstNameInput}</td>
            <td class="newEmployee">${lastNameInput}</td>
            <td class="newEmployee">${employeeIdInput}</td>
            <td class="newEmployee">${jobTitleInput}</td>
            <td class="newEmployee">${annualSalaryInput}</td>
            <td><button class="deleteMe">❌🍖❌</button></td>
            </tr>`) // end append command
        result=true; // append result;
    } // end conditional

    //collect all input data, add to employeesArray as objects
    employeesArray.push({firstName: firstNameInput, lastName: lastNameInput, employeeId: employeeIdInput, jobTitle: jobTitleInput, salary: annualSalaryInput}); // push to array
    console.log(employeesArray); // log to test

    
    let sum = 0; // declare local sum variable and set initial value

    for (let obj of employeesArray) { // for of loop to get salary info for each employee object in employeesArray
        sum+=obj.salary; // add all salaries together
    }
    console.log(sum); // log to test

    let monthlySalary = (sum / 12).toFixed(2); // declare monthlySalary local variable and set value to sum operation performed within handleSubmit function
    console.log(monthlySalary); // log to test


    // isolate salary data, sum, divide by 12, and put in total
    $('#monthlySalaryCost').text(monthlySalary);
    

    // turn cost background red if over 20k
    // use if stmt
    if (monthlySalary > 20000.00) {
    $('#monthlySalaryCost').css('background', 'red');
    }


} // end handleSubmit function


function deleteEmployee() { // declare function to delete line on click of delete button
    $(this).closest('tr').remove(); // assign removal to occur on clicked line

    // add capacity to delete money from total

} // end deleteEmployee function

 

// The application should have an input form that collects 
// employee first name, last name, ID number, job title, 
// annual salary.


// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and 
// append this to the to DOM. If the total monthly cost 
// exceeds $20,000, add a red background color to the total 
// monthly cost.

// Create a delete button that removes an employee from 
// the DOM. For Base mode, it does not need to remove that 
// Employee's salary from the reported total.

// Files Provided
// No files have been provided (just instructions.md 
// and a readme.md). Instead of forking and cloning this 
// repo, please choose "Use This Template" (green button) 
// and name your new repo "weekend-jquery-salary-calculator"
//  and clone down from there. Make sure to commit 
// regularily!

