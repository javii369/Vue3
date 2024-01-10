import { AuthServices } from "../../../services/auth.service";
export class LoginUseCase {
  public static execute(email: string, password: string) {
    AuthServices.signInWithEmailAndPassword(email, password);
  }
}
