function validateForm() {    // Function to validate the form fields

    // Get the value of the form fields
    var user = document.querySelector('input[type=text]').value; /*get text from username box*/
    var pass = document.querySelector('input[type=password]').value; /*get text from password box*/

if (user == '' || pass == '') /*if one of field is empty*/

    { 
alert('Please fill out both fields!'); /*show message*/

    return false; /*can't submit*/
} else 
    
    {
    alert('Successfully logged in!'); /*if filled both of them, show succ. looged in message*/
}


}
