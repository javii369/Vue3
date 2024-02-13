import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from "firebase/auth";
import { AuthRepository } from "../../domain/respository/auth/auth.repository";
import { auth, googleAuthProvider } from "../../config/firebaseConfig";

export class AuthModel extends AuthRepository {
  public signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  singInWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(auth, googleAuthProvider);
  }
  registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  logout(): Promise<void> {
    return signOut(auth);
  }
}
