declare global {
    type TypeValueLabel = {
        value: string;
        label: string;
    };
    type TypeCollection = {
        name: string;
        slug: string;
        traits: TypeCollectionTrait[];
        assets: TypeCollectionAsset[];
    };
    type TypeCollectionTrait = {
        trait_type: string;
        value: string;
    };
    type TypeCollectionAsset = {
        id: number;
        name: string;
        image_url: string;
        traits: TypeCollectionTrait[];
        permalink: string;
    };
    type TypeStatus = 'loading' | 'error' | 'no-data' | 'done';
}
export {};
