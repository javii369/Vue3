import { PublicationService } from "@/services/publications.service";

export class LoadPublicationsUseCase {
  static execute() {
    return PublicationService.findAll();
  }
}
