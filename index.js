const express = require('express'); // Require Express.js
const http = require('http'); // Still needed to create the underlying server
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Middleware function (example: logging requests)
const logRequestMiddleware = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Call the next middleware or the route handler
}

// Menu data
const menuItems = [
  { item: 'Chicken Bowl', price: 7.99 },
  { item: 'Steak', price: 15.99 },
  { item: 'Hamburger', price: 2.99 }
];

// Apply middleware to the /menu route
app.get('/menu', logRequestMiddleware, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let tableHTML = `
    <table>
      <tr>
        <th>Menu Item</th>
        <th>Price</th>
      </tr>`;

    menuItems.forEach(item => {
      tableHTML += `
      <tr>
        <td>${item.item}</td>
        <td>$${item.price.toFixed(2)}</td>
      </tr>`;
    });

    tableHTML += `</table>`;
  res.end(tableHTML);
});

const server = http.createServer(app); // Create server with Express app

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});