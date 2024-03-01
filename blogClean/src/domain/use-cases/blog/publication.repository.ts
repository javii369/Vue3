import type { PublicationEntity } from "@/domain/entities/publications.entity";

export abstract class publicationRepository {
  abstract findAll(): any;
  abstract create(publication: PublicationEntity): any;
}
