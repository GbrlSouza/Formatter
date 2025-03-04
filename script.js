document.getElementById('format-button').addEventListener('click', function() {
    const inputCode = document.getElementById('input-code').value;
    const formattedCode = formatCode(inputCode);
    document.getElementById('output-code').value = formattedCode;
});

function formatCode(code) {    
    const formatted = code
        .replace(/\s+/g, ' ') 
        .replace(/\{|\}/g, '\n$&\n')
        .replace(/\n\s*\n/g, '\n')
        .split('\n')
        .map((line, index, arr) => {
            const indentation = '  '.repeat(getIndentLevel(arr, index));
            return indentation + line.trim();
        })
        .join('\n');

    return formatted;
}

function getIndentLevel(arr, index) {
    let level = 0;

    for (let i = index - 1; i >= 0; i--) {
        if (arr[i].includes('{')) {
            level++;
        } else if (arr[i].includes('}')) {
            level--;
        }
    }

    return level;
}
