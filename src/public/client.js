document.addEventListener('DOMContentLoaded', () => {
    const createMatricesBtn = document.getElementById('crearMatricesBtn');
    const calculateBtn = document.getElementById('calcular');

    createMatricesBtn.addEventListener('click', createMatrices);
    calculateBtn.addEventListener('click', calculate);

    function createMatrices() {
        // Lógica para crear las matrices en el cliente
        console.log('Creando matrices...');
    }

    function calculate() {
        // Lógica para calcular la multiplicación de las matrices y enviar al servidor
        console.log('Calculando...');
    }
});
