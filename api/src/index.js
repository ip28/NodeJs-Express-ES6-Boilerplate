
//importing dependencies
import express from 'express';
import '@babel/polyfill';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config';
import getAll from './services/getAll';
import getRecord from './services/getRecord';

dotenv.config();
const app = express();
app.use(cors({
	exposedHeaders: ["Link"]
}));
app.use(bodyParser.urlencoded({ extended: false }));  

const getAllRecords = new getAll();
app.get('/',async (req,res)=> {
		try{
			const response = await getAllRecords.List(req);
			res.json(response);
		}
		catch(err){
			console.log(err);
			res.status(500).send({message:'Internal error has occurred'});
		}
});

const getSingleRecord = new getRecord();
app.get('/:id',async (req,res)=> {
		try{
			const id = parseInt(req.params.id);
			const response = await getSingleRecord.SearchById(id);
			response?res.json(response):res.status(404).send({message: `Record with id-${id} doesn't exist`});
		}
		catch(err){
			console.log(err);
			res.status(500).send({message:'Internal error has occurred'});
		}
});

app.listen(config.port, () => console.log(`App listening on port ${config.port}!`));


