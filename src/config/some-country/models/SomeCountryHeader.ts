import { Header } from "../../../models/ticket/Header";

export class SomeCountryHeader extends Header {
  get countryFields(): string {
    return "some-country";
  }
}
