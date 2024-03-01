import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { Timestamp } from "firebase/firestore";

interface createPublication {
  body: string;
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
    img: "https://images.unsplash.com/photo-1708778002586-37c4f23b7f3f?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
};
