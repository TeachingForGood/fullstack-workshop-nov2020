export class LoginData {
  username: string;
  password: string;
}

export class SignupData extends LoginData {
  passwordTwo: string;
}
