import { list } from "@keystone-6/core";
import { text, password, relationship } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export const User = list({
  // access
  // ui
  fields: {
    name: text({ 
      validation: {isRequired: true}, 
    }),
    email: text({ 
      validation: { isRequired: true },
      hooks: {
        validateInput: ({ addValidationError, resolvedData, fieldKey }) => {
          const email = resolvedData[fieldKey];
          if (email !== undefined && email !== null && !email.includes('@')) {
            addValidationError(`The email address ${email} provided for the field ${fieldKey} must contain an '@' character`);
          }
        }
      }
    }),
    password: password(),
    // TODO, add roles, cart and orders
  },
  access: allowAll,
})