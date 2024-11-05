
function removeElementFromArray(arr, element) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) 
        {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function setArrayLength() {
    const arrayLength = parseInt(document.getElementById("arrayLength").value, 10);
    array = Array(arrayLength).fill(0);
    displayResult(`Array initialized with length ${arrayLength}: [${array.join(', ')}]`);
}

function setArrayElements() {
    const arrayElementsInput = document.getElementById("arrayElements").value;
    array = arrayElementsInput.split(',').map(Number);
    displayResult(`Array set to: [${array.join(', ')}]`);
}

function removeElement() {
    const elementToRemove = parseInt(document.getElementById("elementToRemove").value, 10);
    array = removeElementFromArray(array, elementToRemove);
    displayResult(`After removing ${elementToRemove}: [${array.join(', ')}]`);
}

function checkValue() {
    const valueToCheck = parseInt(document.getElementById("valueToCheck").value, 10);
    
    const containsStandard = array.includes(valueToCheck);
    const standardResult = `Array ${containsStandard ? 'contains' : 'does not contain'} ${valueToCheck} (standard method).`;

    let foundCustom = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToCheck) {
            foundCustom = true;
            break;
        }
    }
    const customResult = `Array ${foundCustom ? 'contains' : 'does not contain'} ${valueToCheck} (custom method).`;

    displayResult(`${standardResult} ${customResult}`);
}

function displayArray() {
    displayResult(`Current Array: [${array.join(', ')}]`);
}

function emptyArray() {
    array = [];
    displayResult('Array has been emptied.');
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}
