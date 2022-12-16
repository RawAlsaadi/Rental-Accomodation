function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const photos = [
  {
    image: {
      "_meta": {
        "url": "http://res.cloudinary.com/rentalaccommodation/image/upload/v1671219984/rental/clbqx894m0001p7nb8fzx9w60.jpg",
        "etag": "a5e7bae74d57ed75dbe9cc6260da3c06",
        "tags": [],
        "type": "upload",
        "bytes": 111853,
        "width": 600,
        "folder": "rental",
        "format": "jpg",
        "height": 900,
        "api_key": "897846439791171",
        "version": 1671219984,
        "asset_id": "2511eaed9cdf86bc3421355249a29d12",
        "public_id": "rental/clbqx894m0001p7nb8fzx9w60",
        "signature": "f3b3b796e72e29dba0a2e4622c55d76e376ee38f",
        "created_at": "2022-12-16T19:46:24Z",
        "secure_url": "https://res.cloudinary.com/rentalaccommodation/image/upload/v1671219984/rental/clbqx894m0001p7nb8fzx9w60.jpg",
        "version_id": "307699e598065bba391ce88e1cc5c434",
        "placeholder": false,
        "resource_type": "image",
        "original_filename": "file"
      },
      "encoding": "7bit",
      "filename": "racoon-doggo.jpeg",
      "mimetype": "image/jpeg",
      "originalFilename": "racoon-doggo.jpeg"
    },
    altText: "BLA1",
  },
  {
    image: {
      "_meta": {
        "url": "http://res.cloudinary.com/rentalaccommodation/image/upload/v1671220028/rental/clbqx96go0002p7nbhfq9673f.webp",
        "etag": "8c45dd1a01c415e1b67bb37537ee7898",
        "tags": [],
        "type": "upload",
        "bytes": 40402,
        "pages": 1,
        "width": 1024,
        "folder": "rental",
        "format": "webp",
        "height": 714,
        "api_key": "897846439791171",
        "version": 1671220028,
        "asset_id": "0f90c32c42a98fd2789f4f947b3352bd",
        "public_id": "rental/clbqx96go0002p7nbhfq9673f",
        "signature": "aab07078e15c5254f6528c4bd3c3ece38b2aa4b3",
        "created_at": "2022-12-16T19:47:08Z",
        "secure_url": "https://res.cloudinary.com/rentalaccommodation/image/upload/v1671220028/rental/clbqx96go0002p7nbhfq9673f.webp",
        "version_id": "0d0bef006e7e008f808a3209cf58b5e3",
        "placeholder": false,
        "resource_type": "image",
        "original_filename": "file"
      },
      "encoding": "7bit",
      "filename": "shmiling-doggo.webp",
      "mimetype": "image/webp",
      "originalFilename": "shmiling-doggo.webp"
    },
    altText: "BLA2",
  },
  {
    image: {
      "_meta": {
        "url": "http://res.cloudinary.com/rentalaccommodation/image/upload/v1671220103/rental/clbqxas9k0003p7nb818e6e5d.webp",
        "etag": "8c45dd1a01c415e1b67bb37537ee7898",
        "tags": [],
        "type": "upload",
        "bytes": 40402,
        "pages": 1,
        "width": 1024,
        "folder": "rental",
        "format": "webp",
        "height": 714,
        "api_key": "897846439791171",
        "version": 1671220103,
        "asset_id": "81f5c4dbfbeb31a038ea07b3f79abb2a",
        "public_id": "rental/clbqxas9k0003p7nb818e6e5d",
        "signature": "53be88ec8e1573ae68df3052ad871210ff22ec9e",
        "created_at": "2022-12-16T19:48:23Z",
        "secure_url": "https://res.cloudinary.com/rentalaccommodation/image/upload/v1671220103/rental/clbqxas9k0003p7nb818e6e5d.webp",
        "version_id": "33d56c13a4be66dd7fdc0e7f8442a4db",
        "placeholder": false,
        "resource_type": "image",
        "original_filename": "file"
      },
      "encoding": "7bit",
      "filename": "shmiling-doggo.webp",
      "mimetype": "image/webp",
      "originalFilename": "shmiling-doggo.webp"
    },
    altText: "BLA3",
  },
]