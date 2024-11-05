

let array = [];

function createCustomArray() {
    const userInput = document.getElementById('customArrayInput').value;
    if (userInput) {
        array = userInput.split(',').map(item => {
            item = item.trim();
            if (!isNaN(item)) return Number(item);  // Convert to number if applicable
            if (item.toLowerCase() === 'true') return true;
            if (item.toLowerCase() === 'false') return false;
            return item;  // Keep as string otherwise
        });
        displayResult(`Custom Array:\n[${array.join(', ')}]`);
    }
}

function addObject() {
    const userInput = document.getElementById('objectInput').value.trim();
    if (userInput) {
        let obj = {};
        const keyValuePairs = userInput.split(',');
        keyValuePairs.forEach(pair => {
            const [key, value] = pair.split(':').map(item => item.trim());
            if (key && value !== undefined) {
                let parsedValue;
                if (!isNaN(value)) {
                    parsedValue = Number(value);
                } else if (value.toLowerCase() === 'true') {
                    parsedValue = true;
                } else if (value.toLowerCase() === 'false') {
                    parsedValue = false;
                } else {
                    parsedValue = value;
                }
                obj[key] = parsedValue;
            }
        });
        array.push(obj);
        displayResult(`Array after adding object:\n[${array.join(', ')}]`);
    }
}

function appendArray() {
    const userInput = document.getElementById('newArrayInput').value;
    if (userInput) {
        const newArray = userInput.split(',').map(item => {
            item = item.trim();
            if (!isNaN(item)) return Number(item);
            if (item.toLowerCase() === 'true') return true;
            if (item.toLowerCase() === 'false') return false;
            return item;
        });
        array.push(newArray);
        displayResult(`Array after appending new array:\n[${array.join(', ')}]`);
    }
}

function checkElementTypes() {
    let types = array.map(element => {
        if (Array.isArray(element)) {
            return `Array: ${JSON.stringify(element)}`;
        } else if (typeof element === 'object') {
            return `Object: ${JSON.stringify(element)}`;
        } else {
            return `${typeof element}: ${JSON.stringify(element)}`;
        }
    });
    document.getElementById("result").innerHTML = `Element Types:\n${types.join('\n')}`;
}


function displayResult() {
    const formattedArray = array.map(element => {
        if (typeof element === 'object') {
            return JSON.stringify(element);
        }
        return element;
    });
    document.getElementById("result").innerHTML = `Array Contents:\n[${formattedArray.join(', ')}]`;
}

