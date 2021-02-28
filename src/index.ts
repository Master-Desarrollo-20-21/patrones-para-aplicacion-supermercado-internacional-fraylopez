import { SomeCountryFactory } from "./config/some-country/SomeCountryFactory";
import { Supermarket } from "./Supermarket";

const someCountryFactory = new SomeCountryFactory();
new Supermarket(someCountryFactory).operate();