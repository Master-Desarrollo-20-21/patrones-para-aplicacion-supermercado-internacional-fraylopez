import { TicketController } from "../controllers/TicketController";
import { Command } from "../utils/Command";

export abstract class TicketCommand<T extends TicketController = TicketController> extends Command {
  constructor(
    name: string,
    protected readonly ticketController: T,
  ) {
    super(name);
  }
}