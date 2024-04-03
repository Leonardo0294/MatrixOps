import express from 'express';
import bodyParser from 'body-parser';
import { multiplyMatrices } from './src/controller/controller.js';
import path from 'path';

const app = express();

// Middleware para el análisis de cuerpos de solicitud en JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde el directorio 'public'
const publicPath = path.join(process.cwd(), 'src','public');
app.use(express.static(publicPath));

// Ruta principal para servir la página HTML
const viewsPath = path.join(process.cwd(), 'src', 'views');
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: viewsPath });
});

// Ruta para manejar la multiplicación de matrices
app.post('/multiply', multiplyMatrices);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
