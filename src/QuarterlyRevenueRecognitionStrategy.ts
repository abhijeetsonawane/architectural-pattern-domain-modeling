import Recognisable from "./domain/Recognisable";
import Contract from "./domain/Contract";
import RevenueRecognition from "./domain/RevenueRecognition";
import Money from "./domain/Money";

export default class QuarterlyRevenueRecognitionStrategy implements Recognisable{
  calculateRevenueRecognitionFor(contract: Contract): RevenueRecognition[] {
    const allocations: Money[] = contract.totalRevenue().divideInThreeParts();
    return allocations.map((allocation: Money) => {
      return new RevenueRecognition(allocation, contract.signedOn().addInDays(60))
    })
  }
}