const { config } = require('dotenv');
config();

const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();
const fileName = 'handwritting.png';

// Performs text detection on the local file
( async () => {
  const [result] = await client.textDetection(fileName);
  console.log(result);
  const detections = result.textAnnotations;
  console.log('Text:');
  detections.forEach(text => console.log(text));
})();
