# NFT Gallery

The goal of this project is to allow user insert a NFT name and automatically display a gallery with cool features such as filtering, sorting, etc etc.

## How to use

First of all, run `npm run generate COLLECTION_SLUG` to generate dataset json file to fetch NFT collection. Then check public/data/collection-nft.json

We need to run this script because OpenSea API do not allow to retrieve more than 50 assets per request, so we will need to jave a local file.

`npm install nft-gallery`

```
import NFTGallery from "nft-gallery"

function Example() {
  return <NFTGallery opensea-collection="my-collection" />
}
```

### Develop

This project uses storybook:
`npm run storybook`
