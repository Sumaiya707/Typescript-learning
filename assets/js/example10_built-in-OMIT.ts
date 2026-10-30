type User = {
  id: number;
  name: string;
  email: string;
};
const users: User[] = [];
let lastId: number = 0;
function addUser(user: Omit<User, "id">): User {
  const newUser: User = {
    ...user,
    id: ++lastId,
  };
  users.push(newUser);
  return newUser;
}

addUser({ name: "SUMAIYA", email: "bdsumaiya@gmail.com" });
addUser({ name: "MARIAA", email: "sumaiya444@gmail.com" });
console.log(users);
