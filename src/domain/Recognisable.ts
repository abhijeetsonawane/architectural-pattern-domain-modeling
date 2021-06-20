import Contract from "./Contract";
import RevenueRecognition from "./RevenueRecognition";

export default interface Recognisable {
  calculateRevenueRecognitionFor(contract:  Contract):  RevenueRecognition[]
}