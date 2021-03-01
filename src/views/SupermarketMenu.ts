import { TicketController } from "../controllers/TicketController";
import { Menu } from "../utils/Menu";
import { CloseTicketCommand } from "./CloseticketCommand";
import { EditTicketCommand } from "./EditTicketCommand";
import { OpenTicketCommand } from "./OpenTicketCommand";
import { PrintTicketCommand } from "./PrintTicketCommand";

export abstract class SupermarketMenu<T extends TicketController> extends Menu {
  constructor(protected controller: T) {
    super();
    this.addCommand(new OpenTicketCommand(controller));
    this.addCommand(new EditTicketCommand(this.getEditMenu(), controller));
    this.addCommand(new PrintTicketCommand(controller));
    this.addCommand(new CloseTicketCommand(controller));
  }

  abstract getEditMenu(): Menu;
}
