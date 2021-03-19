import Link from 'next/link';
const Header = ({styles, currentPath}) => {
  const paths = [
    {text: 'Bio', path: '/'},
    {text: 'Work', path: '/work'}
  ]
  return (
    <div className={styles.header}>
      <ul>
        {paths.map(path => (
          <li
            className={
              (currentPath === path.path)
              ? styles.selected
              : ''
            }
          >
            <Link href={path.path}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Header;
