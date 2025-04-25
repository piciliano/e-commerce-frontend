import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: #6a1b9a;
  }
  &.active {
    border-color: #6a1b9a;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: #2e8b57;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BuyButton = styled.button`
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #7b1fa2;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #fff;
  color: #6a1b9a;
  border: 2px solid #6a1b9a;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const Loading = styled.div`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;

export const Error = styled.div`
  font-size: 1.2rem;
  color: #ff0000;
  text-align: center;
  margin-top: 20px;
`;

export const CommentsSection = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`;

export const CommentsTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const CommentContainer = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CommentText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 10px;
  padding-left: 0.2rem;
  font-style: italic;
`;

export const CommentRating = styled.div`
  font-size: 1.2rem;
  color: #ff9800;
  margin-bottom: 10px;
`;

export const Star = styled.span`
  margin-right: 2px;
`;

export const CommentDate = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin: 0;
  text-align: left;
  padding-left: 0.2rem;
`;

export const NoComments = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
`;

export const CommentAuthor = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin: 0 0 5px;
  padding-left: 0.2rem;
`;

export const JustifyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityInfo = styled.p`
  color: gray;
  font-style: italic;
`;

export const QuantityColor = styled.p`
  color: rgb(155, 11, 11);
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
