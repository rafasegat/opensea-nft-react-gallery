# NFT Gallery

The goal of this project is to allow user insert a NFT name and automatically display a gallery with cool features such as filtering by traits, sorting by categories, etc,

## How to use

First of all, your need to generate dataset json file to fetch NFT collection.

OpenSea API do not allow to retrieve more than 50 assets per request, so we will need to have a JSON file.

`npm install opensea-nft-react-gallery`

```
import { OpenSeaNFTReactGallery } from "opensea-nft-react-gallery";

function Example() {
  return <OpenSeaNFTReactGallery collection-data-url="https://yourwebsite.com/my-collection.json" />
}
```

### Develop

This project uses storybook: `npm run storybook`
