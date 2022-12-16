import { createAuth } from '@keystone-6/auth';
import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { Listing } from './schemas/Listing';
import { Address } from './schemas/Address';
import { ListingImage } from './schemas/ListingImage';
import 'dotenv/config';
// import { insertSeedData } from './seed-data';
import { insertSeedFormData } from './seed-data/indexSeedFormData';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-tourist-paradise';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should they stay signed in
  secret: process.env.COOKIE_SECRET || ''
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles here
  }
}) 

export default withAuth(config({
  server: {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  },
  db: {
    provider: 'postgresql',
    url: databaseURL,
    // TODO: Add data seeding here
    async onConnect(keystone) {
      console.log('Connected to the database!');
      if(process.argv.includes('--seed-data')){
        await insertSeedFormData(keystone);
      }
    },
  },
  lists: ({
    User,
    Product,
    ProductImage,
    Listing,
    Address,
    ListingImage,
  }),
  ui: {
    // Show the UI only for people who pass this test
    isAccessAllowed: ({ session }) => {
      console.log(session);
      return !!session?.data
    }
  },
  // TODO: Add session values here
  session: statelessSessions({
    maxAge: sessionConfig.maxAge,
    secret: sessionConfig.secret
      // GraphQL Query
      // User: `id name email`,
    }),
  })
);
