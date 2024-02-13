import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

const DesktopTitleWrap = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

const Desktop = styled.li`
  color: #ef8964;
  font-size: 12px;
  line-height: 18px;
`;

const DesktopTitle = styled(Desktop)`
  @media screen and (min-width: 768px) {
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`;

const DesktopCategory = styled(Desktop)`
  @media screen and (min-width: 768px) {
    width: 132px;
  }

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;

const DesktopName = styled(Desktop)`
  @media screen and (min-width: 768px) {
    width: 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 131px;
  }
`;

const DesktopStyled = styled(Desktop)`
  @media screen and (min-width: 768px) {
    width: 78px;
  }

  @media screen and (min-width: 1440px) {
    width: 93px;
  }
`;

export {
  List,
  DesktopTitleWrap,
  DesktopTitle,
  DesktopCategory,
  DesktopStyled,
  DesktopName,
};
