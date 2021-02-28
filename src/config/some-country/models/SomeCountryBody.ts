import { Body } from "../../../models/ticket/Body";

export class SomeCountryBody extends Body {
  get countryFields(): string {
    return "some-country";
  }
}
