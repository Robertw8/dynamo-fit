import styled from '@emotion/styled';

const ExercisesList = styled.ul`
  width: 100%;
  height: 2240px;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px 15px;
    height: 682px;
  }

  @media screen and (min-width: 1440px) {
    height: 444px;
  }
`;

export { ExercisesList };
