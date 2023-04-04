import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from 'redux/theme/themeSlice';
import { SwitcerBtnWrapper, StyleFaSun, StyleFaMoon } from './Switcer.styled';

const Switcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme?.isDarkMode);
  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme, isDarkMode]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <SwitcerBtnWrapper onClick={handleThemeToggle}>
        {isDarkMode ? <StyleFaMoon size={16} /> : <StyleFaSun size={16} />}
      </SwitcerBtnWrapper>
    </div>
  );
};

export default Switcher;
