import { useNavigate } from "react-router-dom";
import { getProductsByUserQuery } from "../../api/getProductsInUsersById";
import { DeashBoardOptions } from "../../components/dashboardOptions";
import * as S from "./styleds";
import { FaBoxOpen, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiEdit, FiLogOut, FiSave } from "react-icons/fi";
import { useState } from "react";

export const MyProfile = () => {
  const { data, isLoading, error } = getProductsByUserQuery();

  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  return (
    <S.Container>
      <DeashBoardOptions />
      <S.ProfileContent>
        <S.DataContent>
          <S.ProfileHeader>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaUserCircle size={64} color="#6c1b77" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <S.Title>{data?.name}</S.Title>
                <S.Email>{data?.email}</S.Email>
              </div>
            </div>

            <div
              onClick={() => setRender(true)}
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6c1b77",
                cursor: "pointer",
              }}
            >
              Editar Perfil
              <FiEdit
                style={{ marginLeft: "10px" }}
                size={20}
                color="#6c1b77"
              />
            </div>
          </S.ProfileHeader>

          <S.Section>
            <S.SectionTitle>📦 Meus Produtos</S.SectionTitle>
            <S.StatusCard
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/myproducts")}
            >
              <FaBoxOpen size={24} />
              <span>
                {data!.products?.length > 0
                  ? `${data?.products.length} produto(s) postado(s)`
                  : "Nenhum produto postado"}
              </span>
            </S.StatusCard>

            <S.StatusCard
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={24} />
              <span>
                {data!.cart?.length > 0
                  ? `${data?.cart.length} item(ns) no carrinho`
                  : "Carrinho vazio"}
              </span>
            </S.StatusCard>
          </S.Section>
        </S.DataContent>
        <S.Modal onClick={() => setRender(false)} $render={render}>
          <S.ContentModal onClick={(e) => e.stopPropagation()}>
            <form>
              <S.FormGroup>
                <S.Label>
                  Nome <S.ColorRed>*</S.ColorRed>
                </S.Label>
                <S.Input placeholder={data?.name} name="name" />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>Email</S.Label>
                <S.Input
                  disabled
                  type="email"
                  name="email"
                  placeholder={data?.email}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>
                  Celular<S.ColorRed>*</S.ColorRed>
                </S.Label>
                <S.Input name="phone" />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>
                  Nascimento<S.ColorRed>*</S.ColorRed>
                </S.Label>
                <S.Input name="age" />
              </S.FormGroup>
              <S.ContentButtons>
                <S.Button type="submit">
                  <FiSave style={{ marginRight: "8px" }} />
                </S.Button>
                <S.Button onClick={() => setRender(false)} type="reset">
                  <FiLogOut style={{ marginRight: "8px" }} />
                </S.Button>
              </S.ContentButtons>
            </form>
          </S.ContentModal>
        </S.Modal>
      </S.ProfileContent>
    </S.Container>
  );
};
