import { PublcationStorageService } from "@/services/publicationStorage.service";

export class DownloadImageUrlUseCase {
  static execute(file: File) {
    return PublcationStorageService.getDownload(file);
  }
}
