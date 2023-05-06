// console.log('yo!');
$(document).ready(onReady); // get ready

function onReady() { // declare onReady function
    // console.log(2);

    $('.submit-button').on('click', handleSubmit); // event listener for submit button clicks
    $('table').on('click', '.deleteMe', deleteEmployee); // event listener for deleteMe button click
    // $('.formInputClass').on('click', clearField); // failed test to clear inputs

}

// console.log(1)

function handleSubmit() {
    // console.log('are we there yet?')
    
    let firstNameInput=$('#firstNameInput').val();
    let lastNameInput=$('#lastNameInput').val();
    let employeeIdInput=$('#employeeIdInput').val();
    let jobTitleInput=$('#jobTitleInput').val();
    let annualSalaryInput=$('#annualSalaryInput').val();
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(employeeIdInput);
    console.log(jobTitleInput);
    console.log(annualSalaryInput);


    event.preventDefault();
    $('input').val('');

    $('tbody').append(`
        <tr>
        <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${employeeIdInput}</td>
        <td>${jobTitleInput}</td>
        <td>${annualSalaryInput}</td>
        <td><button class="deleteMe">❌🍖❌</button></td>
        </tr>`)
}

// failed attemped function to clear inputs
// function clearField() { 
//     console.log('clear inputs on click')
//     $('input').val('');
// }

function deleteEmployee() {
    $(this).closest('tr').remove();
}


// clear input defaults on click - DONE! via css
// add $ to salary field
//  