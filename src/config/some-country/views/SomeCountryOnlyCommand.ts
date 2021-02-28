import { TicketCommand } from "../../../views/TicketCommand";
import { SomeCountryTicketActions } from "./SomeCountryTicketActions";
import { SomeCountryTicketController } from "../controllers/SomeCountryTicketController";


export class SomeCountryOnlyCommand extends TicketCommand<SomeCountryTicketController> {
  constructor(controller: SomeCountryTicketController) {
    super(SomeCountryTicketActions.RETURN_ITEM, controller);
  }

  execute(): void {
    this.ticketController.someCountryOnlyMethod();
  }

  isActive(): boolean {
    return true;
  }
}
