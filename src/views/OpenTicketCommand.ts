import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";
import { TicketController } from "../controllers/TicketController";

export class OpenTicketCommand extends TicketCommand {
  constructor(controller: TicketController) {
    super(TicketActions.OPEN, controller);
  }

  execute(): void {
    this.ticketController.open();
  }

  isActive(): boolean {
    return this.ticketController.canBeOpened();
  }
}
