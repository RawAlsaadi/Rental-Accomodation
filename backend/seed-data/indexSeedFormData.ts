import { KeystoneContext } from '@keystone-6/core/types';
import { listings } from './listingsdata';
import { users } from './usersdata';
 import { addresses } from './addressesdata'
import { photos } from './photosdata';

export async function insertSeedFormData({ prisma }: KeystoneContext) {

  for (let i=0; i<3; i++) {
    const createdUser = await prisma.user.create({
      data: 
        users[i]
    })

    const createAddress = await prisma.address.create({
      data: 
        addresses[i]
    })

    const createPhoto = await prisma.listingImage.createMany({
      data: 
        photos[i]
    })

    // @ts-ignore
    listings[i].userId = createdUser.id
    // @ts-ignore
    listings[i].addressId = createAddress.id
    // @ts-ignore
    listings[i].photo = createPhoto.id

    await prisma.listing.create({
      data:
        listings[i]
    })
  }
  process.exit();
}