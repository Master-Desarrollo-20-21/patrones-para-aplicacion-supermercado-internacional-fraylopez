import { TicketController } from "../controllers/TicketController";
import { Menu } from "../utils/Menu";
import { AddSaleLineCommand } from "./AddSaleLineCommand";
import { RepeatLineCommand } from "./RepeatLineCommand";

export class AddLineMenu extends Menu {
  constructor(controller: TicketController) {
    super();
    this.addCommand(new AddSaleLineCommand(controller));
    this.addCommand(new RepeatLineCommand(controller));
  }
}
