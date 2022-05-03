# OpenSea NFT React Gallery

OpenSea NFT Gallery is a React component to render any OpenSea collection in your website. It includes filtering, sorting and other cool features.

## Demo

https://opensea-nft-react-gallery-demo.vercel.app/

## How to use

First of all, you need to generate metadata json file to fetch NFT collection. OpenSea API do not allow to retrieve more than 50 assets per request, so we will need to have a JSON file.

You can generate it here: https://opensea-nft-json-generator-frontend.vercel.app/

Copy and host this file in any directory in the cloud and copy the URL path, you will need it to send as `collection-metadata-url={your_url}`

## Installation

`npm install opensea-nft-react-gallery`

```
import { OpenSeaNFTReactGallery } from "opensea-nft-react-gallery";

function Example() {
  return <OpenSeaNFTReactGallery collectionMetadataUrl="https://yourwebsite.com/my-collection.json" />
}
```

## Using with Next.js

index.tsx
```
const NFTGallery = dynamic(() => import("components/NFTGallery/NFTGallery"), {
  ssr: false,
});

export default function Page() {
  return <NFTGallery />;
}
```

components/NFTGallery/NFTGallery.tsx

```
import React, { FC } from "react";
import { OpenSeaNFTReactGallery } from "opensea-nft-react-gallery";

const NFTGallery: FC = () => {
  return (
    <OpenSeaNFTReactGallery collectionMetadataUrl="https://raw.githubusercontent.com/rafasegat/crypto-whale-watcher-frontend/main/public/nft-collection.json" />
  );
};

export default Gallery;
```
### Develop

This project uses storybook: `npm run storybook`
