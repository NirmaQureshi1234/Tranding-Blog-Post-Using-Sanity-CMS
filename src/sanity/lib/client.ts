import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

interface CustomImage {
  asset: {
    _ref: string;
    _type: string;
  };

  [key: string]: unknown; 
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: CustomImage) {
  return builder.image(source);
}


