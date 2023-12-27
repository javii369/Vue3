import { AuthModel } from "../database/auth/auth.model";

export class AuthServices {
  public static signInWithEmailAndPassword(email: string, password: string) {
    return new AuthModel().signInEmailAndPassword(email, password);
  }
}
