import Product from './src/domain/Product';
import Contract from "./src/domain/Contract";
import Money from "./src/domain/Money";
import Instance from "./src/domain/Instance";
import QuarterlyRevenueRecognitionStrategy from "./src/QuarterlyRevenueRecognitionStrategy";

const  product = new Product("Apple IPad", new QuarterlyRevenueRecognitionStrategy());

const contract = new Contract(product, new Instance(new Date()), Money.inr(300));

let contract1 = product.calculateRecognitionFor(contract);

console.log(contract1);