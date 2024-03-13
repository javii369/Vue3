import { PublcationStorageService } from "@/services/publicationStorage.service";

export class StorageImageUseCase {
  static execute(file: File) {
    return PublcationStorageService.storage(file);
  }
}
