import { TicketController } from "../controllers/TicketController";

export class CloseTicketView {
  interact(controller: TicketController) {
    controller.close();
  }
}
