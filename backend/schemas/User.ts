import { list } from "@keystone-6/core";
import { text, password } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export const User = list({
  fields: {
    name: text({ 
      validation: {isRequired: true}, 
    }),
    email: text({ 
      validation: { isRequired: true},
      isIndexed: 'unique',
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
  },
  access: allowAll,
})