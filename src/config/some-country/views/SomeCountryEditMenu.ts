import { EditMenu } from "../../../views/EditMenu";
import { SomeCountryTicketController } from "../controllers/SomeCountryTicketController";
import { SomeCountryTicket } from "../models/SomeCountryTicket";
import { SomeCountryOnlyCommand } from "./SomeCountryOnlyCommand";

export class SomeCountryEditMenu extends EditMenu<SomeCountryTicketController> {

  constructor(controller: SomeCountryTicketController) {
    super(controller);
    this.addCommand(new SomeCountryOnlyCommand(controller));
  }
}
