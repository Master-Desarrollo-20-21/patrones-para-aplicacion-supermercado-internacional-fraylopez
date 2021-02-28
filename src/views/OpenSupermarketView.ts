import { CloseTicketController } from "../controllers/CloseTicketController";
import { TicketController } from "../controllers/TicketController";
import { View } from "../utils/View";
import { CloseTicketView } from "./CloseTicketView";

export class OpenSupermarketView extends View {

  private readonly closeTicketView: CloseTicketView;
  constructor() {
    super();
    this.closeTicketView = new CloseTicketView();
  }

  visitCloseTicketController(controller: TicketController) {
    this.closeTicketView.interact(controller);
  }
}
