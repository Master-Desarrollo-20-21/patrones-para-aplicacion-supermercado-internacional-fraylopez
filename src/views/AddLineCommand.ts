import { TicketController } from "../controllers/TicketController";
import { AddLineMenu } from "./AddLineMenu";
import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";

export class AddLineCommand extends TicketCommand {
  constructor(controller: TicketController) {
    super(TicketActions.ADD_LINE, controller);
  }

  async execute(): Promise<void> {
    await new AddLineMenu(this.ticketController).execute();
  }

  isActive(): boolean {
    return this.ticketController.isOpen();
  }
}
