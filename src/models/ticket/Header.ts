export abstract class Header {
  private readonly _creationTime: Date;

  constructor(
    private readonly _supermarketName: string
  ) {
    this._creationTime = new Date();
  }
  abstract get countryFields(): string;

  get supermarketName(): string {
    return this._supermarketName;
  }

  get creationTime(): string {
    return this._creationTime.toISOString();
  }

  render(): string {
    return this.supermarketName + "\n" +
      this._creationTime + "\n" +
      this.countryFields + "\n"
  }
}
