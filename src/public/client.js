const submitData = async () => {
    const rows1 = document.getElementById('rows1').value;
    const cols1 = document.getElementById('cols1').value;
    const rows2 = document.getElementById('rows2').value;
    const cols2 = document.getElementById('cols2').value;

    if (!rows1 || !cols1 || !rows2 || !cols2) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear cajas de texto para la matriz 1
    const matrix1Inputs = document.createElement('div');
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols1; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix1_${i}_${j}`;
            matrix1Inputs.appendChild(input);
        }
        matrix1Inputs.appendChild(document.createElement('br'));
    }

    // Crear cajas de texto para la matriz 2
    const matrix2Inputs = document.createElement('div');
    for (let i = 0; i < rows2; i++) {
        for (let j = 0; j < cols2; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix2_${i}_${j}`;
            matrix2Inputs.appendChild(input);
        }
        matrix2Inputs.appendChild(document.createElement('br'));
    }

    // Mostrar las cajas de texto para las matrices
    document.getElementById('matricesInputs').appendChild(matrix1Inputs);
    document.getElementById('matricesInputs').appendChild(matrix2Inputs);

    // Ocultar el botón de envío
    document.getElementById('submitBtn').style.display = 'none';
};

document.getElementById('submitBtn').addEventListener('click', submitData);
