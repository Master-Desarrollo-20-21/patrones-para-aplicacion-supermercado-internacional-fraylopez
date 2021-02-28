import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";
import { TicketController } from "../controllers/TicketController";
import { Console } from "../utils/Console";

export class PrintTicketCommand extends TicketCommand {
  private readonly console: Console;
  constructor(controller: TicketController) {
    super(TicketActions.PRINT, controller);
    this.console = new Console();
  }

  execute(): void {
    this.console.writeln("Printing..." + "\n" + this.ticketController.print());
  }

  isActive(): boolean {
    return this.ticketController.isPrintable();
  }
}

