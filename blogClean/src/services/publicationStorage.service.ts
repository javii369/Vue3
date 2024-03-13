import { PublicationStorageModel } from "@/database/blog/publicationStorage.mordel";

export class PublcationStorageService {
  static storage(file: File) {
    return new PublicationStorageModel().storage(file);
  }
  static getDownload(file: File) {
    return new PublicationStorageModel().getDownload(file);
  }
}
