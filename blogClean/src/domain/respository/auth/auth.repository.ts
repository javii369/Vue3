import type { UserCredential } from "firebase/auth";

export abstract class AuthRepository {
  public abstract signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;

  abstract singInWithGoogle(): Promise<UserCredential>;

  abstract registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;
  abstract logout(): Promise<void>;
}
