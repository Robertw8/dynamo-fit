import { useState } from 'react';
import { UserBar } from '../UserBar/UserBar';
import { UserNav } from '../UserNav/UserNav';
import { LogOutBtn } from '../../LogoutBtn/LogoutBtn';
import { MobileMenuBtn } from '../MobileMenuBtn/MobileMenuBtn';
import MobileMenu from '../MobileMenu/MobileMenu';
import useAuth from '../../../hooks/useAuth';
import Icon from '../../Icon/Icon';
import { Container } from '../..';
import {
  HeaderContainer,
  LinkLogo,
  UserContainer,
  HeaderWrap,
  UserBarWrapper,
  NavWrap,
} from './Header.styled';

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const onClickMenuBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <HeaderContainer
        style={
          isLoggedIn
            ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
            : { borderBottom: 'none' }
        }
      >
        <HeaderWrap>
          <LinkLogo to="/">
            <Icon
              name="logo"
              iconWidth={{ mobile: '36px', tablet: '44px' }}
              iconHeight={{ mobile: '13px', tablet: '17px' }}
            />
            <span>PowerPulse</span>
          </LinkLogo>
         
          {isLoggedIn && (
            <UserContainer>
              <NavWrap>
                <UserNav />
              </NavWrap>
              <UserBarWrapper>
                <UserBar />
                <LogOutBtn />
                <MobileMenuBtn onClick={onClickMenuBtn} />
                <MobileMenu isOpen={isOpen} />
              </UserBarWrapper>
            </UserContainer>
          )}
        </HeaderWrap>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
