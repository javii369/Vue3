import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { Timestamp } from "firebase/firestore";

interface createPublication {
  body: string;
  img: string;
}

export const formatPublicationDataSourcesAdaper = (
  data: createPublication,
  uid: string
): PublicationEntity => {
  return {
    uid,
    active: true,
    body: data.body,
    createdAt: Timestamp.now(),
    img: data.img,
  };
};
