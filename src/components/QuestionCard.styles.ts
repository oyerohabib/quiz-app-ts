import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: gray;
  border-radius: 10px;
  border: 2px solid red;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  isClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    font-size: 0.8rem;
    background: ${({ correct, isClicked }) =>
      correct ? "green" : !correct && isClicked ? "red" : "purple"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
