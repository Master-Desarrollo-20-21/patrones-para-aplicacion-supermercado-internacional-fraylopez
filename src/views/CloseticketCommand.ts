import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";
import { TicketController } from "../controllers/TicketController";

export class CloseTicketCommand extends TicketCommand {
  constructor(controller: TicketController) {
    super(TicketActions.CLOSE, controller);
  }

  execute(): void {
    this.ticketController.close();
  }

  isActive(): boolean {
    return this.ticketController.isClosable();
  }
}

