import { TicketController } from "../controllers/TicketController";
import { Menu } from "../utils/Menu";
import { CloseTicketCommand } from "./CloseticketCommand";
import { OpenTicketCommand } from "./OpenTicketCommand";
import { PrintTicketCommand } from "./PrintTicketCommand";

export class SupermarketMenu<T extends TicketController> extends Menu {
  constructor(protected controller: T) {
    super();
    this.addCommand(new OpenTicketCommand(controller));
    this.addCommand(new PrintTicketCommand(controller));
    this.addCommand(new CloseTicketCommand(controller));
  }
}
