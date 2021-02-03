import express from 'express';
import resolvers from './resolvers/resolvers';
import sequelize from './util/database';
import typeDefs from './schema/schema';
import bodyParser from 'body-parser';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

sequelize
    .sync()
    .then(_ => {
        app.listen(7000);
    })
    .catch(e => console.log(e))
