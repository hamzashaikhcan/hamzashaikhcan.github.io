const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 9001;
const db = require('./Database/connect');

const NODE_ENV = process.env.NODE_ENV || 'production';

app.use(cors());

db.initializeDB();

app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(
	bodyParser.urlencoded({
		parameterLimit: 100000,
		extended: true,
		limit: '50mb',
	}),
);

const routes = require('./Routes/index');
app.use('/api', routes);
app.use('/downloads/', express.static(path.join(__dirname, 'assets')));

if (NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.clear();
	console.log('Your application is running at http://localhost:' + PORT + '/');
});
