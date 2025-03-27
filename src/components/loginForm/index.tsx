import * as S from "./styleds";
import { useForm } from "react-hook-form";
import { FormData, schema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }
      navigate("/");
    },
    onError: (error) => {
      console.error("Erro no login:", error);
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Login</S.Title>
        <S.Input
          {...register("email")}
          type="text"
          placeholder="Digite seu Email"
        />
        {errors.email && <span>{errors.email?.message}</span>}
        <S.Input
          {...register("password")}
          type="password"
          placeholder="Digite sua Senha"
        />
        {errors.password && <span>{errors.password?.message}</span>}

        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
      <S.SignInLink>
        Não tem conta? <Link to={`/signin`}>Cadastre-se</Link>
      </S.SignInLink>
    </S.FormContainer>
  );
};
