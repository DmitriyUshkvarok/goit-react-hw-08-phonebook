import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Navigation />
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
