
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%&*+=()/|?";
var letterLowerCase = "abcdefghijklmnopqrstuvwxyz"
var letterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var allPasswordInput = "!@#$%&*+=()/|?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"


  
var generatePassword = function() {
  
  var passwordCriteria = window.prompt("Choose how long you want your password to be? It needs at least 8 characters and no more than 128 characters")
  if (!passwordCriteria) {
    return;
  }
  var letterLowerCase = window.prompt("Do you want lowercase letters in your password? Type: (yes or no)");
  if (!letterLowerCase) {
    return;
  }
  var letterUpperCase = window.prompt("Do you want uppercase letters in your password? Type: (yes or no)");
  if (!letterUpperCase) {
    return;
  }
  var specialCharacters = window.prompt("Do you want special characters in your password? Type:(yes or no)");
  if (!specialCharacters) {
    return;
  }

  var numeric = window.prompt("Do you want numeric numbers in your password? Type: (yes or no)");
  if (!numeric) {
    return;
  }
  


        if (letterLowerCase = "yes" ,letterUpperCase = "yes" ,specialCharacters = "yes" , numeric = "yes") {
          var characters = (allPasswordInput)
          var password = "";
          var result = password;
          for (i = 0; i < passwordCriteria; i++) {
            result+= characters.charAt(Math.floor(Math.random() * characters.length));      
        }
        return result;


      } else if (letterLowerCase = "yes" ,letterUpperCase = "yes" , specialCharacters = "yes" , numeric = "no") {
          var characters = (allPasswordInput);
          var password = "";
          var result = password;
          for (var i = 0; i < passwordCriteria; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
         } 
         return result;


         } else if (letterLowerCase = "yes" ,letterUpperCase = "yes" ,specialCharacters = "no" ,numeric = "yes") {
          var characters = (allPasswordInput);
          password = "";
          var result = password;
          for (var i = 0; i < passwordCriteria; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
         }
         return result;


        } else if (letterLowerCase = "yes" ,letterUpperCase = "no" ,specialCharacters = "yes" ,numeric = "yes") {
          var characters = (allPasswordInput);
          password = "";
          var result = password;
          for (var i = 0; i < passwordCriteria; i++) {
            result+= characters.charAt(Math.floor(Math.random() * characters.length));
         }
         return result;


        } else if (letterLowerCase = "no" ,letterUpperCase = "yes" ,specialCharacters = "yes" ,numeric = "yes") {
          var characters = (allPasswordInput);
          password = "";
          var result = password;
          for (var i = 0; i < passwordCriteria; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
         }
         return result;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }
