import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
const HomePage = () => {
  return (
    <>
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default HomePage;
