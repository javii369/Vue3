import { PublicationStorageRepository } from "@/domain/respository/blog/publicationStorage.repository";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";

export class PublicationStorageModel extends PublicationStorageRepository {
  storage(file: File) {
    const storageRef = ref(storage, `publications/${file.name}`);
    return uploadBytes(storageRef, file);
  }

  getDownload(file: File) {
    const storageRef = ref(storage, `publications/${file.name}`);

    return getDownloadURL(storageRef);
  }
}
