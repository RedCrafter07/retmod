import express from 'express';
import path from 'path';
import chalk from 'chalk';
import mongoose from 'mongoose';

const app = express();

const MongoDBConfig: {
	ip: string;
	port: string;
	db: string;
	username: string;
	password: string;
} = {
	db: 'main',
	ip: '0.0.0.0',
	port: '27017',
	password: 'passwd',
	username: 'user',
};

mongoose
	.connect(
		`mongodb://${MongoDBConfig.username}:${MongoDBConfig.password}@${MongoDBConfig.ip}:${MongoDBConfig.port}`,
		{
			dbName: MongoDBConfig.db,
		},
	)
	.then(() => {
		console.log(chalk.blue('[DATABASE]: Connected!'));
	});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(3000, () => {
	console.log(chalk.green(`[SERVER]: Listening on port 3000`));
});
