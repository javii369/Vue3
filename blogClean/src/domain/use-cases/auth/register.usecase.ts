import { AuthServices } from "../../../services/auth.service";
export class RegisterUseCase {
  public static execute(email: string, password: string) {
    AuthServices.registerUserWithEmailAndPassword(email, password);
  }
}
