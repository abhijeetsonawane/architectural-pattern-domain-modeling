import Contract from "./Contract";
import Recognisable from "./Recognisable";

export default class Product {
  constructor(private readonly name: string, private readonly recognisable: Recognisable){}

  calculateRecognitionFor(contract:  Contract): Contract{
    contract.addAllRevenueRecognition(
      this.recognisable.calculateRevenueRecognitionFor(contract)
    );
    return contract
  }
}