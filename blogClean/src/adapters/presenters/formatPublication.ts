import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { DocumentData } from "firebase/firestore";

export const formatPublicationAdaper = (
  data: DocumentData,
  id: string
): PublicationEntity => {
  return {
    id,
    uid: data.uid,
    active: true,
    body: data.body,
    createdAt: new Date(),
    img: "https://media.sivasdescalzo.com/media/catalog/product/I/E/IE6180_sivasdescalzo-adidas-ATHLETICS_I_BASKETBALL-1708091367-1.jpg?quality=70&auto=webp&fit=bounds&width=420",
  };
};
