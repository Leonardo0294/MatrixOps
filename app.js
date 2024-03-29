import express from 'express';
import bodyParser from 'body-parser';
import { multiplyMatrices } from './src/controller/controller.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware para el análisis de cuerpos de solicitud en JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Ruta principal para servir la página HTML
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'src', 'views') });
});

// Ruta para manejar la multiplicación de matrices
app.post('/multiply', multiplyMatrices);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
