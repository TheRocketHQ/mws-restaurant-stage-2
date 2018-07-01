import express from 'express'; 
import React from 'react'; 
import ReactDOM from 'react-dom/server'; 
import App from './components/App'; 
 
const server = express(); 
const port = process.env.PORT || 3000; 
server.get('*', (req, res) => { 
  const title = 'Sample Application'; 
  const app = ReactDOM.renderToString(<App />); 
  res.send(`<!doctype html> 
<html> 
<head> 
<title>${title}</title> 
<src script="client.js"></script> 
</head> 
<body> 
<div id="app">${app}</div> 
</body> 
</html>`); 
}); 
 
server.listen(port, () => { 
  console.log(`App is listening at http://localhost:${port}/`); 
}); 