export const multiplyMatrices = (req, res) => {
    const { matrix1, matrix2 } = req.body;

    // Validar que las matrices estén presentes en la solicitud
    if (!matrix1 || !matrix2) {
        return res.status(400).json({ error: 'Se requieren ambas matrices para realizar la multiplicación.' });
    }

    // Validar que las matrices sean arrays
    if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        return res.status(400).json({ error: 'Las matrices deben ser representadas como arrays.' });
    }

    // Obtener las dimensiones de las matrices
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    // Validar que las dimensiones sean compatibles para la multiplicación
    if (cols1 !== rows2) {
        return res.status(400).json({ error: 'Las dimensiones de las matrices no son compatibles para la multiplicación.' });
    }

    // Realizar la multiplicación de las matrices
    const result = [];
    for (let i = 0; i < rows1; i++) {
        result[i] = [];
        for (let j = 0; j < cols2; j++) {
            result[i][j] = 0;
            for (let k = 0; k < cols1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    // Enviar el resultado como respuesta
    return res.status(200).json(result);
};
