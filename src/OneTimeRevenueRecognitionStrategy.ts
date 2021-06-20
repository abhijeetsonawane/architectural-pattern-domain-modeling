import Recognisable from "./domain/Recognisable";
import RevenueRecognition from "./domain/RevenueRecognition";
import Contract from "./domain/Contract";

export default class OneTimeRevenueRecognitionStrategy implements Recognisable{
  calculateRevenueRecognitionFor(contract: Contract): RevenueRecognition[] {
    return [new RevenueRecognition(contract.totalRevenue(),  contract.signedOn())];
  }
}