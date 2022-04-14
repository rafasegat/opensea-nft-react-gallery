var fetch = require('node-fetch');
var fs = require('fs');

const COLLECTION_SLUG = process.argv[2];

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'X-API-KEY': 'e95ef47fb91e4f9988df4dd232802623'
  }
};

if(!COLLECTION_SLUG) {
  console.log("Please, run the script with your collection name. Example, 'npm run generate doodles-oficial'");
  return;
}

const run = async () => {

  const fetchCollectionData = async () => {
    const result = await fetch(
      `https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`,
      { method: 'GET' }
    );
    const json = await result.json();
    return json;
  };

  const collectionJson = await fetchCollectionData();
  console.log(collectionJson)

  console.log(`Generating NFT collection ${COLLECTION_SLUG} JSON file...`);


  // var obj = {id: 1, square:2};
  // var json = JSON.stringify(obj);
  // fs.writeFile('src/assets/data/collection-nft.json', json, 'utf8', () => {});
}

run();