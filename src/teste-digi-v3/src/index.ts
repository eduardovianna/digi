import "reflect-metadata"
import { loadContainer } from "./config/load-container";
import express from "express";
import { loadControllers } from "awilix-express";
import * as bodyParser from "body-parser";
import * as swagger from "swagger-express-ts";
import cors from "cors";


const app: express.Application = express();

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

loadContainer(app);

app.use(loadControllers(
  'controllers/*/*.ts',
  { cwd: __dirname }
));

app.get('/', function(req, res, next) {
  res.redirect('/api/swagger');
});

app.use('/api/swagger', express.static('swagger'));
app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
app.use( bodyParser.json() );
app.use( swagger.express(
  {
      definition : {
          info : {
              title : "Teste Digi V3" ,
              description: "Versão alternativa em Node.js do teste Digi",
              version : "1.0"
          }
          // Models can be defined here
      }
  }
) );

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});