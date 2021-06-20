import Recognisable from "./Recognisable";
import RevenueRecognition from "./RevenueRecognition";
import Contract from "./Contract";

export default class OneTimeRevenueRecognitionStrategy implements Recognisable{
  calculateRevenueRecognitionFor(contract: Contract): RevenueRecognition[] {
    return [new RevenueRecognition(contract.totalRevenue(),  contract.signedOn())];
  }
}