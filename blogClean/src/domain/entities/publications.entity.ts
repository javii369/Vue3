import { Timestamp } from "firebase/firestore";
export interface PublicationEntity {
  uid: string;
  id?: string;
  active: boolean;
  createdAt: Date | Timestamp;
  body: string;
  img?: string;
}

export interface PublicationsEntity {
  publications: PublicationEntity[];
}
