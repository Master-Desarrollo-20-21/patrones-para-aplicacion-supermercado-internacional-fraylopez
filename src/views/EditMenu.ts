import { TicketController } from "../controllers/TicketController";
import { Menu } from "../utils/Menu";
import { AddLineCommand } from "./AddLineCommand";

export class EditMenu<T extends TicketController> extends Menu {
  constructor(protected controller: T) {
    super();
    this.addCommand(new AddLineCommand(controller));
  }
}
