import Link from 'next/link';

const Header = ({styles, currentPath}) => {
  const paths = [
    {text: 'Bio', path: '/'},
    {text: 'Work', path: '/work'}
  ];

  const path = currentPath.split('/')[1];
  return (
    <div className={`${styles.header} ${styles[currentPath.split('/')[1]]}`}>
      {path & path === 'work' ?
        <img src="/images/black-headphone.png" className={styles.headphones} />
        :
        <img src="/images/white-headphone.png" className={styles.headphones} />

      }
      <ul>
        {paths.map(path => (
          <li
            key={path.text}
            className={
              (currentPath === path.path)
              ? styles.selected
              : ''
            }
          >
            <Link href={`${path.path}?animate=true`}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Header;
