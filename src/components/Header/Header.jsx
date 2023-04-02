import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <h1>ghbdtn vbh</h1>
          <Navigation />
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
