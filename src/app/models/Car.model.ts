export class CarModel{
  constructor(
    public id: number,
    public name: string,
    public brand: string,
    public model: string,
    public image: string,
    public description: string,
    public price: number,
    public status: string,
    public createdAt: any,
    public updatedAt: any
  ) {  }
}
