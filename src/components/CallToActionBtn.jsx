import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(100, 70, 30);
  color: #ffff;
  font-size: 1rem;
  border: none;
  border-radius: 24px;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 300ms ease;
  box-shadow: 2px 3px 3px gray;
  &:hover {
    opacity: 0.8;
    transition: 300ms ease;
    transform: scale(1.1);
  }
  &:active {
    opacity: 1;
    background-color: rgb(58, 36, 8);
  }
`;

function CallToActionBtn() {
  return <StyledButton>Book Now</StyledButton>;
}
export default CallToActionBtn;
