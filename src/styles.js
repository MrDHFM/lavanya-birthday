import styled from 'styled-components';

export const BirthdayBox = styled.div`
  position: relative;
  margin: 20px auto;
  max-width: 530px;
  width: 97vw;;
  padding: 32px 5vw 24px 5vw;
  background: rgba(255,255,255,0.90);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.16);
  border-radius: 20px;
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const BirthdayHeading = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2em;
  margin: 18px 0 14px 0;
  background: linear-gradient(92deg,#fe5f75, #fc9842);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Greeting = styled.p`
  font-size: 1.12em;
  color: #522e3b;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 150px;
  aspect-ratio: 3/4;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 12px;
  box-shadow: 0 2px 18px 0 rgba(100,40,70,0.09);
 
`;
