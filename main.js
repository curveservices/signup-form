const firstName  = document.querySelector('#firstname');
const firstNameError = document.querySelector('.first-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const pw = document.querySelector('#password');
const pwError = document.querySelector('.pwd-error');
const pwC = document.querySelector('#con-pass');
const pwcError = document.querySelector('.con-pwd-error');
const lastName = document.querySelector('#lastname');
const lastNameError = document.querySelector('.last-name-error');


firstName.addEventListener('input', () => {
    firstName.value === '' ? firstNameError.textContent = '* Please enter your first name.' : firstNameError.textContent = '';
});

lastName.addEventListener('input', () => {
    lastName.value === '' ? lastNameError.textContent = '* Please enter your last name' : lastNameError.textContent = '';
});

email.addEventListener('input', (e) => {
    email.validity.typeMismatch ? emailError.textContent = '* Please enter a vaild email address' : emailError.textContent = '';
});

pw.addEventListener("input", function (event) {
    if (pw.validity.patternMismatch){
        const currentValue = pw.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (regExpCap.test(currentValue)){
            result += '';
        } else {
        result += `Missing at least 1 capital letter. `;
        result += '\n';
        }
           
        if (regExpDig.test(currentValue)){
            result += '';
        } else {
            result += 'Missing at least 1 number. ';
            result += '\n';
          }
          
          if (currentValue.length < 8){
            result += 'Password must be at least 8 characters. '
            result += '\n';
          } else {
            result += '';
          }

          console.log(result)
          pwError.textContent = result

        } else {
          pwError.textContent = '';
        }
      });

pwC.addEventListener('input', (e) => {
    pwC.value !== pw.value ? pwcError.textContent = '* Password does not match' : pwcError.textContent = '';
    });