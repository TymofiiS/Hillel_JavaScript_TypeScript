class UserNew {
  name!: string;
}

class AdminNew {
  name!: string;
  age!: number;
}

let u: UserNew = new UserNew();
let a: AdminNew = new AdminNew();

a = new UserNew() as AdminNew;
u = new AdminNew();

//************************************ */
class UserA {
  login(name: string, email: string): void;
  login(name: string): void {}
}

class UserB {
  login(name: string, email: string): void {}
}

let userA: UserA = new UserA();
let userB: UserB = new UserB();

userA = new UserB();
userB = new UserA();

//****************************** */
// The same logic with generic

//********************************** */
// access identificator is matter!
