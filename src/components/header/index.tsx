import * as S from "./styleds";
import ImgHeader from "../../images/ecommerceHD.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useSearch } from "../../contexts/searchContext";
import { getProductsInCartQuery } from "../../api/getProductsInCart";
import { FiChevronDown, FiLogOut, FiSettings } from "react-icons/fi";

export const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const { searchQuery, setSearchQuery } = useSearch();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { data } = getProductsInCartQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUserName(decoded.name);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const cartCount = data?.products ? data.products.length : 0;

  const clickCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserName(null);
  };

  return (
    <S.HeaderContainer>
      <S.ImgHeader
        src={ImgHeader}
        alt="Imagem do header"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <S.InputHeader
        type="text"
        placeholder="Buscar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        $validation={isHomePage}
      />
      <S.UserContainer>
        {userName ? (
          <S.ContFlexForButton>
            <S.UserName>Olá, {userName}</S.UserName>
            <S.ButtonPainel onClick={() => setIsOpen((prev) => !prev)}>
              <FiChevronDown size={22} style={{ color: "#ffffff" }} />
            </S.ButtonPainel>

            <S.ModalPainel $isOpen={isOpen}>
              <S.ButtonInPainel onClick={() => navigate("/myprofile")}>
                <FiSettings />
              </S.ButtonInPainel>
              <S.ButtonInPainel onClick={handleLogout}>
                <FiLogOut />
              </S.ButtonInPainel>
            </S.ModalPainel>
          </S.ContFlexForButton>
        ) : (
          <>
            <S.LoginButton onClick={() => navigate("/login")}>
              Entrar
            </S.LoginButton>
            <S.LoginButton onClick={() => navigate("/signin")}>
              Cadastre-se
            </S.LoginButton>
          </>
        )}
        {isAuthenticated && (
          <S.CartContainer>
            <S.CartIcon
              src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              alt="Carrinho"
              onClick={clickCart}
            />
            {cartCount > 0 && <S.CartBadge>{cartCount}</S.CartBadge>}
          </S.CartContainer>
        )}
      </S.UserContainer>
    </S.HeaderContainer>
  );
};
