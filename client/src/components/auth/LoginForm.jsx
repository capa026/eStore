import { useState } from "react";
import InputBox from "./UI/InputBox";
import InputError from "./UI/InputError";
import SubmitButton from "./UI/SubmitButton";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <input
          placeholder="Correo Electronico"
          {...register("email", { required: "Campo Requerido" })}
        />
      </InputBox>
      {errors.email && <InputError message={errors.email.message} />}
      <InputBox>
        <input
          placeholder="Contraseña"
          type={viewPassword ? "text" : "password"}
          {...register("password", { required: "Campo Requerido" })}
        />
        {viewPassword ? (
          <EyeClosed
            className="cursor-pointer hover:text-white/70"
            onClick={() => setViewPassword(!viewPassword)}
          />
        ) : (
          <Eye
            className="cursor-pointer hover:text-white/70"
            onClick={() => setViewPassword(!viewPassword)}
          />
        )}
      </InputBox>
      {errors.password && <InputError message={errors.password.message} />}
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
