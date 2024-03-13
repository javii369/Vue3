import { Timestamp } from "firebase/firestore";
import { DateTime } from "luxon";

export interface PublicationEntity {
  uid: string;
  id?: string;
  active: boolean;
  createdAt: Date | Timestamp | DateTime | string;
  body: string;
  img?: string;
}

export interface PublicationsEntity {
  publications: PublicationEntity[];
}
