import { AuthServices } from "@/services/auth.service";

export class LoginGoogleUseCase {
  static execute() {
    return AuthServices.singInWithGoogle();
  }
}
