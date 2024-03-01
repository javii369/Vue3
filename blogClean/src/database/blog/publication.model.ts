import { addDoc, collection, limit, orderBy, where } from "firebase/firestore";
import { publicationRepository } from "../../domain/use-cases/blog/publication.repository";
import { firestore } from "@/config/firebaseConfig";
import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { query } from "firebase/database";

export class PublicationModel extends publicationRepository {
  findAll() {
    return query(
      collection(firestore, "publications"),
      orderBy("createdAt", "desc"),
      limit(100),
      where("active", "==", true)
    );
  }
  create(publication: PublicationEntity) {
    const ref = collection(firestore, "publications");
    return addDoc(ref, publication);
  }
}
