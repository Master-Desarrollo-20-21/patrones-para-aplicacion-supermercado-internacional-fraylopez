import { Ticket } from "../models/ticket/Ticket";
import { CloseTicketController } from "./CloseTicketController";
import { OpenTicketController } from "./OpenTicketController";
import { PrintTicketController } from "./PrintTicketController";

export class TicketController {

  protected readonly openTicketController: OpenTicketController;
  protected readonly printTicketController: PrintTicketController;
  protected readonly closeTicketController: CloseTicketController;

  constructor(protected readonly ticket: Ticket) {
    this.openTicketController = new OpenTicketController(ticket);
    this.printTicketController = new PrintTicketController(ticket);
    this.closeTicketController = new CloseTicketController(ticket);
  }

  isEditable(): boolean {
    // TODO:
    return true;
  }

  isClosable(): boolean {
    return this.closeTicketController.isClosable();
  }

  close() {
    this.closeTicketController.close();
  }

  isPrintable(): boolean {
    return this.printTicketController.isPrintable();
  }

  print(): string {
    return this.printTicketController.print();
  }

  canBeOpened(): boolean {
    return this.openTicketController.canBeOpened();
  }

  open() {
    return this.openTicketController.open();
  }
}
