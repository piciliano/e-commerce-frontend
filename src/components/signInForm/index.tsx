import * as S from "./styleds";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { schemaSignIn, SignInFormData } from "../../schemas/signInSchema";
import { useSignIn } from "../../api/signIn";

export const SigInForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schemaSignIn),
  });

  const onSubmit = (data: SignInFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (err) => {
        console.error("Erro ao registrar:", err);
      },
    });
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Registre-se</S.Title>

        <S.Input
          {...register("name")}
          type="text"
          placeholder="Digite seu nome"
        />
        {errors.name && <span>{errors.name?.message}</span>}

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

        <S.Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirme sua Senha"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword?.message}</span>
        )}

        <S.Button type="submit" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar"}
        </S.Button>

        {error && <p style={{ color: "red" }}>Erro ao registrar.</p>}
      </S.Form>
      <S.loginLink>
        Ou faça <Link to={`/login`}>Login</Link>
      </S.loginLink>
    </S.FormContainer>
  );
};
