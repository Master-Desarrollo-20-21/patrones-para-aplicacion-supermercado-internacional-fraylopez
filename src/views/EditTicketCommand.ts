import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";
import { TicketController } from "../controllers/TicketController";
import { Menu } from "../utils/Menu";

export class EditTicketCommand<T extends TicketController> extends TicketCommand<T> {
  constructor(private readonly editMenu: Menu, controller: T) {
    super(TicketActions.EDIT, controller);
  }

  async execute(): Promise<void> {
    await this.editMenu.execute();
  }

  isActive(): boolean {
    return this.ticketController.isEditable();
  }
}
