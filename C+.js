function printf(message) {
    console.log(message);
}
function line() {
    console.log("_");
}

function binary(input) {
    let binaryString = '';
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        const binaryRepresentation = charCode.toString(2);
        binaryString += binaryRepresentation.padStart(8, '0') + ' '; // pad with 0 to ensure 8 bits
    }
    return binaryString.trim(); // remove trailing space
}

// code in C+
const message = "hello world";
const binaryMessage = binary(message);
printf(binaryMessage);
printf(message);

// Check for semicolons
const cPlusCode = `
line();
const message = "hello world";
const binaryMessage = binary(message);
printf(binaryMessage);
printf(message);
`;

// Execute C+ code
const cPlusLines = cPlusCode.split('\n');
for (let i = 0; i < cPlusLines.length; i++) {
    if (cPlusLines[i].trim() === "line();") {
        line();
    }
}

// Check for semicolons
console.log("");
if (!cPlusCode.includes(';')) {
    console.error("ERROR: Missing semicolons in C+ code. Please ensure every line ends with a semicolon.");
}
console.log("================Program ended================")
