import Link from 'next/link';

export default function Header() {
	return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/timetrack">
          <a>Timetrack</a>
        </Link>
      </li>
    </ul>
  );
}
