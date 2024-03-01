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

  return {
    create,
    data,
    findAll,
  };
});
