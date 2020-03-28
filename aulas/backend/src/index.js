const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();


app.use(cors()); /**permite que qualquer app web acesse  */
app.use(express.json());
/**request.body→ o resultado foi undefine porque era uma requisição JSON.Logo teve que add a linha de codigo
 * app.use(express.json()); e reiniciei o servidor NOde.js com Ctrl+C isso quer dizer que: estou falando para o EXPRESS IR lá no CORPO DA REQUISIÇÃO/IMSOMNIA 
 * e converter esse JSON em um onjeto do javascript e transformar em algo entendivel */
app.use(routes);

app.listen(3333);