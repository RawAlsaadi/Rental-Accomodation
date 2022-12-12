import { relationship, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { allowAll } from '@keystone-6/core/access';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_KEY!,
  apiSecret: process.env.CLOUDINARY_SECRET!,
  folder: 'rental',
};
export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      // label: 'Source'
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' })
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
  access: allowAll,
});