import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = ({ robots }) => (
  <div>
    <h1>Robots</h1>
    <Link href="/">
      <button>Home</button>
    </Link>
    <ul>
      {robots.map((robot) => (
        <li key={robot.id}>
          <Link href={`/robots/${robot.id}`}>{robot.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

Robots.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
  return {
    robots: data,
  };
};

export default Robots;
