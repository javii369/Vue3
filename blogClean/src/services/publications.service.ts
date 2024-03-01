import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { PublicationModel } from "../database/blog/publication.model";

export class PublicationService {
  static findAll() {
    return new PublicationModel().findAll();
  }
  static create(publication: PublicationEntity) {
    return new PublicationModel().create(publication);
  }
}
