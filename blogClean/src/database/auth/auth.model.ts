import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { AuthRepository } from "../../domain/respository/auth/auth.repository";
import { auth } from "../../config/firebaseConfig";

export class AuthModel extends AuthRepository {
  public signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }
}
