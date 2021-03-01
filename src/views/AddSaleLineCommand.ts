import { TicketController } from "../controllers/TicketController";
import { Console } from "../utils/Console";
import { TicketActions } from "./TicketActions";
import { TicketCommand } from "./TicketCommand";

export class AddSaleLineCommand extends TicketCommand {
  private readonly console: Console;
  constructor(controller: TicketController) {
    super(TicketActions.ADD_LINE_SALE, controller);
    this.console = new Console();
  }
  async execute(): Promise<void> {
    const inputData = await this.console.readString("scan product...");
    this.ticketController.addLine(inputData);
  }

  isActive(): boolean {
    return true;
  }
}
