
    document.getElementById("btn").addEventListener('click',
    function(){
        let text = document.getElementById('input-text').value;
        verifyPalindrome(text);

    });

    
    const verify = document.querySelector("#input-text");
    const response = document.querySelector("#response");
    const submitButton = document.getElementById('btn');

    
    function verifyPalindrome() {

        if (palindrome(verify.value) === true) {
            response.innerText = "This is a Palindrome!"
        } else if (!palindrome(verify.value)) {
            response.innerText = "This is NOT a Palindrome."
        }
    }

    function palindrome(str) {
        let regEx = /[\W_]/g;
        let lowerStr = str.toLowerCase().replace(regEx, '');
        let reverseStr = lowerStr.split('').reverse().join('');
        return reverseStr === lowerStr;
    }
    

