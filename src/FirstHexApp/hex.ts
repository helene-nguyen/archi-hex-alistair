export const app = {
  getValue : () => {
    return 'Hello';
  }
};

export class TestRepo {
  //& Properties
  myRepo; // info from DB

  constructor() {}

  //& METHODS
  sayHi(): string {
    return 'hi';
  }
}
// myApp = FirstHexApp.new( TestRepo.new() ) myApp.getValue()
