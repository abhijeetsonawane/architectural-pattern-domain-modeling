class Contract {
  private revenueRecognitions: Array<RevenueRecognition> = [];
  private whenWasSigned: Date;
  private revenue: Money;

  constructor(whenWasSigned: Date){
    this.whenWasSigned = whenWasSigned;
    this.revenue =  Money.inr(0);
  }
}