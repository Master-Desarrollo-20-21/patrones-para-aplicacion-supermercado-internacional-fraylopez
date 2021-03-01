import { Ticket } from "../../../models/ticket/Ticket";

export class SomeCountryTicket extends Ticket {
  edit() {
    throw new Error("Method not implemented.");
  }

  isEditable(): boolean {
    return this._isOpen;
  }

  someCountryLineOperation() {
    throw new Error("Method not implemented.");
  }
}
