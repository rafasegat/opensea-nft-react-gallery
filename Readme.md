# OpenSea NFT React Gallery

The goal of this project is to allow user insert a NFT name and automatically display a gallery with cool features such as filtering by traits, sorting by categories, etc,

## How to use

First of all, you need to generate metadata json file to fetch NFT collection. You can generate it here: https://opensea-nft-json-generator-frontend.vercel.app/

Copy and host this file in any directory in the cloud and copy the URL path, you will need it to send as `collection-metadata-url={your_url}`

OpenSea API do not allow to retrieve more than 50 assets per request, so we will need to have a JSON file.

## Installation

`npm install opensea-nft-react-gallery`

```
import { OpenSeaNFTReactGallery } from "opensea-nft-react-gallery";

function Example() {
  return <OpenSeaNFTReactGallery collection-metadata-url="https://yourwebsite.com/my-collection.json" />
}
```

### Develop

This project uses storybook: `npm run storybook`
