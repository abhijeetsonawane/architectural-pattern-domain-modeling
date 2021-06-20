import Product from "./Product";
import RevenueRecognition from "./RevenueRecognition";
import Money from "./Money";

export default class Contract {

  private readonly product: Product;
  private revenueRecognitions: Array<RevenueRecognition> = [];
  private readonly whenWasSigned: Date;
  private readonly revenue: Money;

  constructor(product: Product, whenWasSigned: Date){
    this.product = product;
    this.whenWasSigned = whenWasSigned;
    this.revenue =  Money.inr(0);
  }

  public signedOn(){
    return this.whenWasSigned;
  }

  public totalRevenue(){
    return this.revenue;
  }

  addRevenueRecognition(revenueRecognition: RevenueRecognition){
    this.revenueRecognitions.push(revenueRecognition);
  }

  addAllRevenueRecognition(revenueRecognitions: RevenueRecognition[]) {
    this.revenueRecognitions = revenueRecognitions
  }
}