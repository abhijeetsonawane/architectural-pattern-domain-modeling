class Contract {

  private product: Product;
  private revenueRecognitions: Array<RevenueRecognition> = [];
  private whenWasSigned: Date;
  private revenue: Money;

  constructor(product: Product, whenWasSigned: Date){
    this.product = product;
    this.whenWasSigned = whenWasSigned;
    this.revenue =  Money.inr(0);
  }

  addRevenueRecognition(revenueRecognition: RevenueRecognition){
    this.revenueRecognitions.push(revenueRecognition);
  }
}