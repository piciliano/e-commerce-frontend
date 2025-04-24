import { useState } from "react";
import { CardProduct } from "../cardProduct";
import * as S from "./styleds";
import image from "../../images/ecommerceHD.png";
import { useSearch } from "../../contexts/searchContext";
import { useAllProducts } from "../../api/getProducts";

export const Products = () => {
  const { searchQuery } = useSearch();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useAllProducts(searchQuery, page);

  return (
    <>
      <S.Container>
        {data?.data.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            image={product.pictures[0]?.link || image}
            title={product.title}
            price={product.price}
            description={product.description}
            cartIcon={true}
          />
        ))}
      </S.Container>

      {(data?.totalPages ?? 0) >= 1 ? (
        <S.PaginationContainer>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>

          <span>
            Página {data?.page} de {data?.totalPages}
          </span>

          <button
            disabled={page === data?.totalPages}
            onClick={() => setPage(page + 1)}
          >
            Próxima
          </button>
        </S.PaginationContainer>
      ) : (
        ""
      )}
    </>
  );
};
