class Contract {
  private revenueRecognitions: Array<RevenueRecognition> = [];
  private whenWasSigned: Date;
  private revenue: Money;

  constructor(whenWasSigned: Date){
    this.whenWasSigned = whenWasSigned;
    this.revenue =  Money.inr(0);
  }

  addRevenueRecognition(revenueRecognition: RevenueRecognition){
    this.revenueRecognitions.push(revenueRecognition);
  }
}