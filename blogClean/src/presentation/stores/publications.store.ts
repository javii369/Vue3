import { defineStore } from "pinia";
import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.usecase";
import { reactive } from "vue";
import { onSnapshot } from "firebase/firestore";
import type {
  PublicationEntity,
  PublicationsEntity,
} from "../../domain/entities/publications.entity";
import { formatPublicationAdaper } from "@/adapters/presenters/formatPublication";
import { createPublicationUseCase } from "@/domain/use-cases/blog/createPublication.usecase";
import Swal from "sweetalert2";
import { StorageImageUseCase } from "@/domain/use-cases/blog/storageImage.usecase";
import { getDownloadURL } from "firebase/storage";
import { DownloadImageUrlUseCase } from "@/domain/use-cases/blog/getDownoaldImageUrl.usecase";

export const usepublications = defineStore("publications", () => {
  const data = reactive<PublicationsEntity>({
    publications: [],
  });

  const findAll = async () => {
    const query = await LoadPublicationsUseCase.execute();

    onSnapshot(query, (docs) => {
      data.publications = [];

      docs.forEach((publication) => {
        if (publication.exists()) {
          const formatPublication: PublicationsEntity = formatPublicationAdaper(
            publication.data(),
            publication.id
          );
          data.publications.push(formatPublication);
        }
      });
    });
  };

  const create = async (publicationData: PublicationEntity) => {
    try {
      Swal.showLoading();
      await createPublicationUseCase.execute(publicationData);
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };

  const uploadImage = async (file: File) => {
    try {
      Swal.showLoading();
      await StorageImageUseCase.execute(file);
    } catch (error) {
      console.log(error);
      Swal.hideLoading();
    }
  };

  const getDownloadURL = async (file: File) => {
    try {
      const res = await DownloadImageUrlUseCase.execute(file);
      return res;
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };
  return {
    create,
    data,
    findAll,
    uploadImage,
    getDownloadURL,
  };
});
