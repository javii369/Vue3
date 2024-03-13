import type { PublicationEntity } from "@/domain/entities/publications.entity";
import { DocumentData } from "firebase/firestore";

import { DateTime } from "luxon";

export const formatPublicationAdaper = (
  data: DocumentData,
  id: string
): PublicationEntity => {
  return {
    id,
    uid: data.uid,
    active: data.active,
    body: data.body,
    createdAt: DateTime.fromSeconds(data.createdAt.seconds).toLocaleString(
      DateTime.DATETIME_FULL
    ),
    img: data.img,
  };
};
