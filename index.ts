import Product from './src/Product';
import OneTimeRevenueRecognitionStrategy from "./src/OneTimeRevenueRecognitionStrategy";
import Contract from "./src/Contract";

const  product = new Product("Apple IPad", new OneTimeRevenueRecognitionStrategy());

const contract = new Contract(product, new Date());

let contract1 = product.calculateRecognitionFor(contract);

console.log(contract1);