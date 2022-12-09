import { integer, relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { allowAll } from '@keystone-6/core/access';

export const Product = list({
  // TODO
  // access:
  fields:{
    name: text({ 
      validation: {isRequired: true}, 
    }),
    description: text({ 
      ui:{
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'alText'],
        inlineCreate: { fields: ['image', 'alText'] },
        inlineEdit:  { fields: ['image', 'alText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden'},
      },
    }),
    price: integer(),
    // TODO: Photo
  },
  access: allowAll,
});