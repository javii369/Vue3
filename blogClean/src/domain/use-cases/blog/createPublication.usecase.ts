import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { PublicationService } from "@/services/publications.service";

export class createPublicationUseCase {
  static execute(publication: PublicationEntity) {
    return PublicationService.create(publication);
  }
}
