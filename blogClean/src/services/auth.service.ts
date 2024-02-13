import { AuthModel } from "../database/auth/auth.model";

export class AuthServices {
  public static signInWithEmailAndPassword(email: string, password: string) {
    return new AuthModel().signInEmailAndPassword(email, password);
  }
  public static singInWithGoogle() {
    return new AuthModel().singInWithGoogle();
  }
  public static registerUserWithEmailAndPassword(
    email: string,
    password: string
  ) {
    return new AuthModel().registerUserWithEmailAndPassword(email, password);
  }

  public static logout() {
    return new AuthModel().logout();
  }
}
