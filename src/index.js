const https = require("https");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

app.post("/santander", (req, res) => {
  const data = req.body;
  console.log(data);

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: "Nenhum dado fornecido" });
  }

  try {
    const folderPath = path.join(__dirname, "src", "data");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const fileName = `${timestamp}.json`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        console.error("Erro ao gravar os dados:", err);
        return res.status(500).json({ error: "Erro ao gravar os dados" });
      }
      console.log("Dados gravados com sucesso!");
      res.status(201).json({ fileName }); // Enviando o nome do arquivo gerado de volta para o cliente
    });
  } catch (error) {
    console.error("Erro ao escrever no arquivo:", error);
    res.status(500).json({ error: "Erro ao escrever no arquivo" });
  }
});

const privateKeyPath = "/home/etc/nginx/ssl/server.key";
const certificatePath = "/home/etc/nginx/ssl/server.cert";

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Servidor HTTPS rodando em https://191.101.70.186:${port}`);
});
