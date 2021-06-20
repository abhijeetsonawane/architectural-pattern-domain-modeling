import Money from "./Money";
import Instance from "./Instance";

export default class RevenueRecognition {
  constructor(private  readonly money: Money,
              private  readonly date: Instance){}
}