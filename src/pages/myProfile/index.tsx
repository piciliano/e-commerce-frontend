import { useNavigate } from "react-router-dom";
import { getProductsByUserQuery } from "../../api/getProductsInUsersById";
import { DeashBoardOptions } from "../../components/dashboardOptions";
import * as S from "./styleds";
import { FaBoxOpen, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiEdit, FiLogOut, FiSave } from "react-icons/fi";
import { useState } from "react";
import { useUpdateUser } from "../../api/updateUserProfile";

export const MyProfile = () => {
  const { data, isLoading, error } = getProductsByUserQuery();
  const { mutate: updateUser } = useUpdateUser();

  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    name: data?.name || "",
    phone: data?.phone || "",
    birth: data?.birth || "",
  });

  const navigate = useNavigate();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData = {
      name: formData.name || data?.name,
      phone: formData.phone || data?.phone,
      birth: formData.birth || data?.birth,
    };

    updateUser({ id: data?.id || "", data: updatedData });

    setRender(false);
  };

  return (
    <S.Container>
      <DeashBoardOptions />
      <S.ProfileContent>
        <S.DataContent>
          <S.ProfileHeader>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaUserCircle size={70} color="#6c1b77" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <S.Title>{data?.name}</S.Title>
                <S.Email>{data?.email}</S.Email>
                <S.Email>{data?.birth}</S.Email>
                <S.Email>{data?.phone}</S.Email>
              </div>
            </div>

            <S.EditProfileContainer onClick={() => setRender(true)}>
              <span>Editar Perfil</span>
              <FiEdit
                style={{ marginLeft: "10px" }}
                size={20}
                color="#6c1b77"
              />
            </S.EditProfileContainer>
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
            <form onSubmit={handleSubmit}>
              <S.FormGroup>
                <S.Label>
                  Nome <S.ColorRed>*</S.ColorRed>
                </S.Label>
                <S.Input
                  placeholder={data?.name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
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
                <S.Input
                  name="phone"
                  placeholder={data?.phone}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>
                  Nascimento<S.ColorRed>*</S.ColorRed>
                </S.Label>
                <S.Input
                  name="birth"
                  placeholder={data?.birth}
                  value={formData.birth}
                  onChange={handleChange}
                />
              </S.FormGroup>
              <S.ContentButtons>
                <S.Button type="submit">
                  <FiSave style={{ marginRight: "8px" }} />
                  Salvar
                </S.Button>
                <S.Button onClick={() => setRender(false)} type="reset">
                  <FiLogOut style={{ marginRight: "8px" }} />
                  Cancelar
                </S.Button>
              </S.ContentButtons>
            </form>
          </S.ContentModal>
        </S.Modal>
      </S.ProfileContent>
    </S.Container>
  );
};
