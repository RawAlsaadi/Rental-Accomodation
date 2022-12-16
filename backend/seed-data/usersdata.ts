function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const users = [
  {
    name: "user1" ,
    email: 'test1@gmail.com',
    password: '',
  },
  {
    name: "user2" ,
    email: 'test2@gmail.com',
    password: '',
  },
  {
    name: "user3" ,
    email: 'test3@gmail.com',
    password: '',
  },
]