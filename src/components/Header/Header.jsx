import { useSelector } from 'react-redux';
import { NavLinkStyled, HeaderStyled } from './Header.styled';

import LoginForm from 'components/LoginForm';

export default function Header() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <HeaderStyled>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled>}
      </nav>
      <LoginForm />
    </HeaderStyled>
  );
}
