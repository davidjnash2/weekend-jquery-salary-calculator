// console.log('yo!');
$(document).ready(onReady); // get ready

function onReady() { // declare onReady function
    // console.log(2);

    $('.submit-button').on('click', handleSubmit); // event listener for submit button clicks
    $('table').on('click', '.deleteMe', deleteEmployee); // event listener for deleteMe button click
    // $('.formInputClass').on('click', clearField); // failed test to clear inputs

} // end onReady function

// console.log(1)

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
   // return result;
} // end handleSubmit function

// failed attemped function to clear inputs
// function clearField() { 
//     console.log('clear inputs on click')
//     $('input').val('');
// }

function deleteEmployee() { // declare function to delete line on click of delete button
    $(this).closest('tr').remove(); // assign removal to occur on clicked line
} // end deleteEmployee function


// clear input defaults on click - DONE! via css
// add $ to salary field
//  