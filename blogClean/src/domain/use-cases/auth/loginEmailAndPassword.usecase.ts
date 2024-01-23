import type { UserCredential } from "firebase/auth";
import { AuthServices } from "../../../services/auth.service";

export class LoginEmailAndPasswordUseCase {
  public static execute(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return AuthServices.signInWithEmailAndPassword(email, password);
  }
}
