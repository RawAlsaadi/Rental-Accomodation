import { integer, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { allowAll } from '@keystone-6/core/access';

export const Address = list({
  fields:{
    streetNum: integer( {validation: {isRequired: true}} ),
    postalCode: text( {validation: {isRequired: true}} ),
    townName: text( {validation: {isRequired: true}} ),
    country: select({
      validation: {isRequired: true},
      options: [
        { value: "GB", label: "United Kingdom" },
        { value: "IE", label: "Ireland" },
        { value: "IT", label: "Italy" },
        { value: "NL", label: "Netherlands" },
        { value: "SE", label: "Sweden" }
      ]
    })
  },
  access: allowAll,
});