const number = document.getElementById("number");
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const romanNumerals = [
    { value: 1000, romanNumeral: 'M' },
    { value: 900, romanNumeral: 'CM' },
    { value: 500, romanNumeral: 'D' },
    { value: 400, romanNumeral: 'CD' },
    { value: 100, romanNumeral: 'C' },
    { value: 90, romanNumeral: 'XC'},
    { value: 50, romanNumeral: 'L' },
    { value: 40, romanNumeral: 'XL' },
    { value: 10, romanNumeral: 'X' },
    { value: 9, romanNumeral: 'IX' },
    { value: 5, romanNumeral: 'V' },
    { value: 4, romanNumeral: "IV"},
    { value: 1, romanNumeral: "I"},
];
const convertToRoman = (userInput) => {
    let romanResult = '';
    let num = userInput;
    romanNumerals.forEach((romannohairetsudata) => {
        while (num >= romannohairetsudata.value) {
            romanResult = romanResult + romannohairetsudata.romanNumeral;
            num = num - romannohairetsudata.value; //2025 - 1000 = 1025
        }
    })
    return romanResult;
};
const checkUserInput = () => {
    const userInput = parseInt(number.value);
    if (userInput === -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.remove('hidden');
        return;
    } else if(userInput < -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.remove('hidden');
        return;
    } else if (!number.value || isNaN(userInput) || userInput < 1) {
        output.textContent = "Please enter a valid number";
        output.classList.remove('hidden');
        return;
    } else if (userInput > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.remove('hidden');
        return;
    } else {
        const romanNumeral = convertToRoman(userInput);
        output.textContent = romanNumeral;
        output.classList.remove('hidden');
    }  
}
convertBtn.addEventListener("click",checkUserInput);
