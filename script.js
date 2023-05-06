// console.log('yo!');
$(document).ready(onReady); // get ready

function onReady() { // declare onReady function
    // console.log(2);

    $('.submit-button').on('click', handleSubmit);
    $('table').on('click', '.deleteMe', deleteEmployee);


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

function deleteEmployee() {
    $(this).closest('tr').remove();
}