const { config } = require('dotenv');
config();

const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();
const fileName = 'sample.jpg';

// Performs text detection on the local file
( async () => {
  const [result] = await client.textDetection(fileName);
  const data = result.fullTextAnnotation.text;
  console.log(data);
})();
