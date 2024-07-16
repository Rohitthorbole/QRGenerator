const express = require('express');
const path = require('path');
const QRCode = require('qrcode');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to generate QR code
app.post('/generate', (req, res) => {
    const { url } = req.body;

    // Generate QR code
    QRCode.toDataURL(url, (err, qrUrl) => {
        if (err) {
            res.status(500).send('Error generating QR code');
            return;
        }
        // Send the generated QR code as an HTML image
        res.send(`<img src="${qrUrl}">`);
    });
});

app.listen(port, () => {
    console.log(`QR Code generator app listening at http://localhost:${port}`);
});
