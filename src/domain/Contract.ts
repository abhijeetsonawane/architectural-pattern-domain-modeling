import Product from "./Product";
import RevenueRecognition from "./RevenueRecognition";
import Money from "./Money";
import Instance from "./Instance";

export default class Contract {

  private readonly product: Product;
  private revenueRecognitions: Array<RevenueRecognition> = [];
  private readonly whenWasSigned: Instance;
  private readonly signedAmount: Money;

  constructor(product: Product, whenWasSigned: Instance, signedAmount: Money){
    this.product = product;
    this.whenWasSigned = whenWasSigned;
    this.signedAmount =  signedAmount;
  }

  public signedOn(): Instance{
    return this.whenWasSigned;
  }

  public totalRevenue(){
    return this.signedAmount;
  }

  addRevenueRecognition(revenueRecognition: RevenueRecognition){
    this.revenueRecognitions.push(revenueRecognition);
  }

  addAllRevenueRecognition(revenueRecognitions: RevenueRecognition[]) {
    this.revenueRecognitions = revenueRecognitions
  }
}