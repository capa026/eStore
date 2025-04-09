import InputBox from "./UI/InputBox";
import InputError from "./UI/InputError";
import SubmitButton from "./UI/SubmitButton";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  // High-security validation rules
  const passwordValidation = {
    required: "Campor Requerido",
    minLength: {
      value: 8,
      message: "La contraseña debe ser de al menos 8 caracteres",
    },
    validate: {
      hasUpperCase: (value) =>
        /[A-Z]/.test(value) || "Debe contener al menos una letra Mayuscula",
      hasNumber: (value) =>
        /[0-9]/.test(value) || "Debe contener al menos 1 numero",
      hasSpecialChar: (value) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
        "Debe contener al menos un caracter especial",
      noSpaces: (value) =>
        !/\s/.test(value) || "Los espacios no son permitidos",
    },
  };

  const emailValidation = {
    required: "Campo requerido",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "El correo no es valido",
    },
    maxLength: {
      value: 255,
      message: "El correo tiene que tener menos de 255 caracteres",
    },
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <InputBox>
        <input
          placeholder="Nombre"
          {...register("name", { required: "Campo requerido" })}
        />
      </InputBox>
      {errors.name && <InputError message={errors.name.message} />}
      <InputBox>
        <input
          placeholder="Apellido"
          {...register("lastName", { required: "Campo requerido" })}
        />
      </InputBox>
      {errors.lastName && <InputError message={errors.lastName.message} />}
      <InputBox>
        <input
          placeholder="Correo Electronico"
          {...register("email", emailValidation)}
        />
      </InputBox>
      {errors.email && <InputError message={errors.email.message} />}
      <InputBox>
        <input
          placeholder="Contraseña"
          type={"password"}
          {...register("password", passwordValidation)}
        />
      </InputBox>
      {errors.password && <InputError message={errors.password.message} />}
      <InputBox>
        <input
          placeholder="Confirmar Contraseña"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
      </InputBox>
      {errors.confirmPassword && (
        <InputError message={errors.confirmPassword.message} />
      )}
      <SubmitButton />
    </form>
  );
};

export default RegisterForm;
