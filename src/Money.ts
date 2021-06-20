class Money  {

  private constructor(private readonly amount: number,
              private readonly currency: string) {

  }

  static inr(value:  number): Money{
    return new Money(value, "INR");
  }
}