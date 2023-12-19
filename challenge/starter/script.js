var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  

  // Function to prompt user for password options

  //Prompt for password length,range (length>=8 and lenght<=128). if range invalid-->call the function again
  //
  function getPasswordOptions() {
    const passwordLengthAnswer= prompt("How many characters would you like in your password?");
    if (passwordLengthAnswer===""){
        const empty=confirm ("Password length can not be empty. Try again!");
        getPasswordOptions();
    }else{
    //prompts store data as string, need to parse into a number
    const passwordLength= parseInt(passwordLengthAnswer,10);

    if ((passwordLength<8) || (passwordLength>128)){
        confirm ("Password length must be between 8 and 128 characters. Try again!");
        getPasswordOptions();
    } else {

        //Code should validate for each input and at least one character type should be selected
        //in case the user want all types--->return the password valid length.
        //otherwise--->password format invalid so ask if the user wants to start again
        //if answer is yes: start again
        //if answer is no: no password generated
        
        var boolean=true;
        var again;
      
        while (boolean===true){
            const lower= confirm("Would you like Lowercase characters in your password?");
            if (lower=== false){
                boolean=false;
                again=confirm("Password format invalid. Would you like to start again?!")
                if(again===true){
                    getPasswordOptions();
                }else{
                    return 0;
                }
            }
            else {
                const upper= confirm("Would you like Upercase characters in your password?");
                if (upper=== false){
                    boolean=false;
                    again=confirm("Password format invalid. Would you like to start again?!")
                    if(again===true){
                        getPasswordOptions();
                    } else{
                        return 0;
                    }
                }
                 else{
                        const num= confirm("Would you like Numbers in your password?");
                        if (num=== false){
                            boolean=false;
                            again=confirm("Password format invalid. Would you like to start again?!")
                            if(again===true){
                                getPasswordOptions();
                            }else{
                                return 0;
                            }
                        }
                            else {
                                const spec= confirm("Would you like Special characters in your password?");
                                if (spec=== false){
                                    boolean=false;
                                    again=confirm("Password format invalid. Would you like to start again?!")
                                    if(again===true){
                                        getPasswordOptions();
                                    }else{
                                        return 0;
                                    }
                                }else{
                                    boolean=false;
                                    
                                }
                            }
                }
            }
            
        }
        
    }
    
    return passwordLength;
   }
  }
        
  
  
  // Function for getting a random element from an array
  //function getRandom(arr) {}
  
  // Function to generate password with user input

  function generatePassword (len) {
    var length = len;
    var password = "";
    var character = "";
    
    //while the number of times that matches the length the user choice
    //generate the random number of all character types that will be the index in the arrays (lowerCasedCharacters, numericCharacters and specialCharacters)
    while( password.length<length ) {
        valueType1 = Math.ceil(lowerCasedCharacters.length * Math.random()*Math.random());
        valueType2 = Math.ceil(numericCharacters.length * Math.random()*Math.random());
        valueType3 = Math.ceil(specialCharacters.length * Math.random()*Math.random());
     
        hold = lowerCasedCharacters[valueType1];
        //if password length is even number ---> add character but in it uppercase value
        if (password.length%2==0){
            hold=upperCasedCharacters[valueType1];
        }
        //add character to the password
        character += hold;
        character += numericCharacters[valueType2];
        character += specialCharacters[valueType3];
        password = character;

    }
    //return generated password (string.substr(start, length))
    return password.substr(0,len);
}
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    const len=getPasswordOptions();
    var password = generatePassword(len);
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  
  

  



