import { TicketController } from "../controllers/TicketController";
import { Console } from "../utils/Console";
import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";

export class RepeatLineCommand extends TicketCommand {
  private readonly console: Console;
  constructor(controller: TicketController) {
    super(TicketActions.REPEAT_LINE_SALE, controller);
    this.console = new Console();
  }
  async execute(): Promise<void> {
    this.ticketController.repeatLast();
  }

  isActive(): boolean {
    return true;
  }
}
