
import { CountryFactory } from "../../CountryFactory";
import { Footer } from "../../models/ticket/Footer";
import { Menu } from "../../utils/Menu";
import { SomeCountryHeader } from "./models/SomeCountryHeader";
import { SomeCountryMenu } from "./views/SomeCountryMenu";
import { SomeCountryTicket } from "./models/SomeCountryTicket";
import { SomeCountryBody } from "./models/SomeCountryBody";

export class SomeCountryFactory extends CountryFactory {
  getMenu(ticket: SomeCountryTicket): Menu {
    return new SomeCountryMenu(ticket);
  }

  getTicket(): SomeCountryTicket {
    const header = new SomeCountryHeader("some-supermarket-name");
    return new SomeCountryTicket(
      header,
      new SomeCountryBody(),
      new Footer(header),
    );
  }
}
