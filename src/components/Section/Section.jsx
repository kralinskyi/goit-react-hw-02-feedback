import PropTypes from 'prop-types';
import css from './Section.module.css';

// Компонент відповідає за відображення секції з заголовком та дочірніми елементами
export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

// типізація
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
