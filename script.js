// console.log('yo!');
$(document).ready(onReady); // get ready

function onReady() { // declare onReady function
    // console.log(2);

    $('.submit-button').on('click', handleSubmit); // event listener for submit button clicks
    $('table').on('click', '.deleteMe', deleteEmployee); // event listener for deleteMe button click
    // $('.formInputClass').on('click', clearField); // failed test to clear inputs

} // end onReady function

// console.log(1)

let employees=[];


function handleSubmit() { // declare handle submit function
    // console.log('are we there yet?') // log to test

    let firstNameInput=$('#firstNameInput').val(); // link input variable to form input
    let lastNameInput=$('#lastNameInput').val(); // link input variable to form input
    let employeeIdInput=$('#employeeIdInput').val(); // link input variable to form input
    let jobTitleInput=$('#jobTitleInput').val(); // link input variable to form input
    let annualSalaryInput=$('#annualSalaryInput').val(); // link input variable to form input
    
    let result=false;

    console.log(firstNameInput); // log to test
    console.log(lastNameInput); // log to test
    console.log(employeeIdInput); // log to test
    console.log(jobTitleInput); // log to test
    console.log(annualSalaryInput); // log to test

    

    event.preventDefault(); // stop browser from default clearing submit data from js
    
    $('input').val(''); // return input fields to default on click

    
    // append to create new line from user inputs
    if (firstNameInput === '' || lastNameInput === ''|| employeeIdInput === '' || jobTitleInput === '' || annualSalaryInput === '') {
        alert('You did not complete all the required fields.'); 
    } else {
     $('tbody').append(`
            <tr>
            <td>${firstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${employeeIdInput}</td>
            <td>${jobTitleInput}</td>
            <td>${annualSalaryInput}</td>
            <td><button class="deleteMe">❌🍖❌</button></td>
            </tr>`) // end append command
        result=true;
    }

    //collect salary data, sum, divide by 12
    


   // return result;
} // end handleSubmit function


function deleteEmployee() { // declare function to delete line on click of delete button
    $(this).closest('tr').remove(); // assign removal to occur on clicked line
} // end deleteEmployee function

 

// The application should have an input form that collects 
// employee first name, last name, ID number, job title, 
// annual salary.


// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

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

