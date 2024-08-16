/*const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/fetch-pnr-details', async (req, res) => {
    const { pnr } = req.body;

    if (!pnr) {
        return res.status(400).json({ error: 'PNR is required' });
    }

    try {
        const response = await axios.get(`https://example-train-pnr-status-website.com/${pnr}`);
        const html = response.data;
        const $ = cheerio.load(html);

        // Replace the below selector with the actual selectors from the website
        const trainDetails = {
            trainNumber: $('#train-number-selector').text(),
            trainName: $('#train-name-selector').text(),
            journeyDate: $('#journey-date-selector').text(),
            status: $('#pnr-status-selector').text(),
            // Add more fields as needed
        };

        res.json(trainDetails);
    } catch (error) {
        console.error('Error fetching PNR details:', error);
        res.status(500).json({ error: 'Failed to fetch PNR details' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/
/*const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8319961705',
  headers: {
    'x-rapidapi-key': '8d470b2df8mshc42a8c81db5028ap13fd8djsndd16048cb26f',
    'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
  }
};

async function getPNRStatus() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getPNRStatus();

*/
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878',
  headers: {
    'x-rapidapi-key': '8d470b2df8mshc42a8c81db5028ap13fd8djsndd16048cb26f',
    'x-rapidapi-host': 'pnr-status-indian-railway.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}