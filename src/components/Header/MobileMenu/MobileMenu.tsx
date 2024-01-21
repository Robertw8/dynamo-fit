import { DrawerStyled } from '../MobileMenu/MobileMenu.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../redux/auth/operations';
import { AppDispatch } from '../../../redux';

import { NavMenu, NavLinkStyled, CloseBtn, Logout } from './MobileMenu.styled';
import Icon from '../../Icon/Icon';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [drawerWidth, setDrawerWidth] = useState('200px');

  useEffect(() => {
    const updateDrawerWidth = () => {
      const isTablet = window.matchMedia('(min-width: 768px)').matches;
      setDrawerWidth(isTablet ? '350px' : '200px');
    };
    updateDrawerWidth();
    window.addEventListener('resize', updateDrawerWidth);
    return () => {
      window.removeEventListener('resize', updateDrawerWidth);
    };
  }, []);

  const handleLogOut = (): void => {
    toggleMenu();
    dispatch(logOutUser({}));
  };

  return (
    <>
      <DrawerStyled
        placement="right"
        onClose={toggleMenu}
        visible={isOpen}
        width={drawerWidth}
      >
        <CloseBtn onClick={toggleMenu}>
          <Icon
            name="x"
            iconWidth={{ mobile: '24px', tablet: '32px' }}
            iconHeight={{ mobile: '24px', tablet: '32px' }}
            stroke="#ffffff"
          />
        </CloseBtn>

        <NavMenu>
          <NavLinkStyled to="/diary" onClick={toggleMenu}>
            Diary
          </NavLinkStyled>
          <NavLinkStyled to="/products" onClick={toggleMenu}>
            Products
          </NavLinkStyled>
          <NavLinkStyled to="/exercises" onClick={toggleMenu}>
            Exercises
          </NavLinkStyled>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <Icon
            name="logout"
            iconWidth={{ mobile: '20px', tablet: '20px' }}
            iconHeight={{ mobile: '20px', tablet: '20px' }}
            stroke="#fff"
          />
        </Logout>
      </DrawerStyled>
    </>
  );
};

export default MobileMenu;
