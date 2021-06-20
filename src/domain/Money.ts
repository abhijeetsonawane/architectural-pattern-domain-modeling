export default class Money  {

  private constructor(private readonly amount: number,
              private readonly currency: string) {}

  static inr(value:  number): Money{
    return new Money(value, "INR");
  }

  divideInThreeParts(): Money[] {
    return [Money.inr(this.amount/3), Money.inr(this.amount/3), Money.inr(this.amount/3)];
  }
}