import { Ticket } from "./models/ticket/Ticket";
import { Menu } from "./utils/Menu";

export abstract class CountryFactory {
  abstract getMenu(ticket: Ticket): Menu
  abstract getTicket(): Ticket
}


