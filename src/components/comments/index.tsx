import { useCommentRequest } from "../../api/addCommentInProduct";
import * as S from "./styleds";
import { useState } from "react";

type CommentsProps = {
  productId: string;
};

export const Comments = ({ productId }: CommentsProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { mutate } = useCommentRequest();

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleData = () => {
    mutate({
      id: productId,
      data: {
        rating,
        comment,
      },
    });
  };

  return (
    <S.Container>
      <S.InputText
        placeholder="Digite seu comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <S.RatingContainer>
        {[...Array(5)].map((_, index) => (
          <S.Star
            key={index}
            $filled={rating > index}
            onClick={() => handleStarClick(index)}
          >
            ★
          </S.Star>
        ))}
      </S.RatingContainer>
      <S.Button onClick={handleData}>Enviar</S.Button>
    </S.Container>
  );
};
