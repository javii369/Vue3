import { AuthServices } from "@/services/auth.service";

export class LogoutUseCase {
  static execute() {
    return AuthServices.logout();
  }
}
