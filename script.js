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

let monthlySalary= Number(0);


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
            <td id="currency" class="newEmployeeMoney">$${annualSalaryInput}</td>
            <td><button class="deleteMe">delete</button></td>
            </tr>`) // end append command
        result=true; // append result;
    } // end conditional

    // $('.currency').css('align', 'right');
    // $('.currency').css('content', '$');
    // $('.currency').css('float', 'justify');
    $('#deleteMe').css('display', 'flex');

    //collect all input data, add to employeesArray as objects
    employeesArray.push({firstName: firstNameInput, lastName: lastNameInput, employeeId: employeeIdInput, jobTitle: jobTitleInput, salary: annualSalaryInput}); // push to array
    console.log(employeesArray); // log to test

    
    let sum = 0; // declare local sum variable and set initial value

    for (let obj of employeesArray) { // for of loop to get salary info for each employee object in employeesArray
        sum+=obj.salary; // add all salaries together
    }
    console.log(sum); // log to test

    monthlySalary = Number((sum / 12).toFixed(2));
    console.log(monthlySalary); // log to test


    // isolate salary data, sum, divide by 12, and put in total
    $('#monthlySalaryCost').text(monthlySalary);

    

    // use if conditional turn cost background red if over 20k
    if (monthlySalary > 20000) {
    $('#monthlySalaryCost').css('background', 'red');
    }
    let formattedCost = monthlySalary.toLocaleString("en-US", { style: "currency", currency: "USD" });
    document.getElementById("monthlySalaryCost").textContent = formattedCost;

    
} // end handleSubmit function


function deleteEmployee() { // declare function to delete line on click of delete button
    // let index = $(this).closest().index();
    $(this).closest('tr').remove(); // assign removal to occur on clicked line
    // employeesArray.splice(index, 1);
    // console.log(employeesArray);

    // let sum=monthlySalary * 12;
    // console.log(sum);

    // for (let obj of employeesArray) { // for of loop to get salary info for each employee object in employeesArray
    //     sum-=obj.salary; // add all salaries together
    // }
    // console.log(sum);


    // monthlySalary = Number((sum / 12).toFixed(2));
    // console.log(monthlySalary); // log to test

    
    

    // isolate salary data, sum, divide by 12, and put in total
    // $('#monthlySalaryCost').text(monthlySalary);

    // add capacity to delete money from total

} // end deleteEmployee function

 



// set so that deleteEmployee function aggregates to cost total
// check to see if clicking submit can advance cursor, or clear from input
// clean up DOM styling

