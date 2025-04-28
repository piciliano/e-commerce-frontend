import { use, useState } from "react";
import { getProductByIdQuery } from "../../api/getProductById";
import * as S from "./styleds";
import { useNavigate, useParams } from "react-router-dom";
import { useAddProductToCart } from "../../api/addProductToCart";
import { Comments } from "../../components/comments";

export const ProductDescriptionPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const navigate = useNavigate();

  const { mutate } = useAddProductToCart();

  const handleAddToCart = (id: string) => {
    mutate(id);
  };

  if (!id) {
    return <S.Error>Produto não encontrado.</S.Error>;
  }

  const { data: product, isLoading, error } = getProductByIdQuery(id);

  if (isLoading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  if (error) {
    return <S.Error>Erro ao carregar o produto.</S.Error>;
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.MainImageWrapper>
            <S.MainImage
              src={product?.pictures[selectedImage]?.link}
              alt={product?.title}
            />
          </S.MainImageWrapper>
          <S.Thumbnails>
            {product?.pictures.map((picture, index) => (
              <S.Thumbnail
                key={index}
                src={picture.link}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                className={selectedImage === index ? "active" : ""}
              />
            ))}
          </S.Thumbnails>
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>{product?.title}</S.Title>
          <S.JustifyDiv>
            <S.Price>Preço: R$ {product?.price}</S.Price>
            <S.QuantityContainer>
              <S.QuantityInfo>Restam:</S.QuantityInfo>
              <S.QuantityColor>{product?.quantity}</S.QuantityColor>
            </S.QuantityContainer>
          </S.JustifyDiv>
          <S.Description>{product?.description}</S.Description>
          <S.BuyButton onClick={() => navigate(`/payment/${product?.price}`)}>
            Comprar agora
          </S.BuyButton>
          <S.AddToCartButton
            onClick={() => {
              if (product?.id) {
                handleAddToCart(product.id);
              }
            }}
          >
            Adicionar ao carrinho
          </S.AddToCartButton>
        </S.InfoContainer>
      </S.Container>

      <S.CommentsSection>
        <S.CommentsTitle>O que estão achando deste produto?</S.CommentsTitle>
        {product?.comments.length ? (
          product.comments.map((comment) => (
            <S.CommentContainer key={comment.id}>
              <S.CommentRating>
                {Array.from({ length: comment.rating }).map((_, index) => (
                  <S.Star key={index}>⭐</S.Star>
                ))}
              </S.CommentRating>
              <S.CommentAuthor>{comment.author}</S.CommentAuthor>
              <S.CommentText>{comment.comment}</S.CommentText>
              <S.CommentDate>
                {new Date(comment.createdAt).toLocaleDateString()}
              </S.CommentDate>
            </S.CommentContainer>
          ))
        ) : (
          <S.NoComments>Este produto ainda não tem comentários.</S.NoComments>
        )}

        <Comments productId={product!.id} />
      </S.CommentsSection>
    </>
  );
};
