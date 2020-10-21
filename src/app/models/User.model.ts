export class UserModel{
  constructor(
    public id: number,
    public role: string,
    public name: string,
    public surname: string,
    public avatar: string,
    public address: string,
    public city: string,
    public phone: string,
    public email: string,
    public password: string
  ) {
  }
}
