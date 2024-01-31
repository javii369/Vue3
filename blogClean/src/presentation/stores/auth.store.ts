import { defineStore } from "pinia";
import { reactive } from "vue";
import { LoginEmailAndPasswordUseCase } from "../../domain/use-cases/auth/loginEmailAndPassword.usecase";
import { RegisterUseCase } from "@/domain/use-cases/auth/register.usecase";

const authFormInitialState = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

export const useAuthStore = defineStore("auth", () => {
  const authForm = reactive({ ...authFormInitialState });
  const resetForm = () => {
    (authForm.email = authFormInitialState.email),
      (authForm.password = authFormInitialState.password);
    authForm.confirmPassword = authFormInitialState.confirmPassword;
  };

  const loginWithEmailAndPassword = async () => {
    try {
      const user = await LoginEmailAndPasswordUseCase.execute(
        authForm.email,
        authForm.password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
      resetForm();
    }
  };

  const registerWithEmailAndPassword = async () => {
    try {
      const user = await RegisterUseCase.execute(
        authForm.email,
        authForm.password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
      resetForm();
    }
  };

  return {
    authForm,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    resetForm,
  };
});
