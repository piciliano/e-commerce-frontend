import { useDeleteProduct } from "../../api/deleteProduct";
import { getProductsByUserQuery } from "../../api/getProductsInUsersById";
import { CardProduct } from "../../components/cardProduct";
import { DeashBoardOptions } from "../../components/dashboardOptions";
import * as S from "./styleds";

export const MyProductsInDashboard = () => {
  const { data, isLoading, error } = getProductsByUserQuery();

  return (
    <S.Container>
      <DeashBoardOptions />

      <S.ContainerProducts>
        <S.ProductGrid>
          {data?.products?.map((product) => (
            <CardProduct
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.pictures[0]?.link}
              cartIcon={false}
              trashIcon={true}
              itemId={product.id}
            />
          ))}
        </S.ProductGrid>
      </S.ContainerProducts>
    </S.Container>
  );
};
