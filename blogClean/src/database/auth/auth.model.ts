import { signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { AuthRepository } from "../../domain/auth/auth.repository";
import { auth } from "../../config/firebaseconfig";

export class AuthModel extends AuthRepository {
  public signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
}
