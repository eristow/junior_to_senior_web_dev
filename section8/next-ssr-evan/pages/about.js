import Link from 'next/link';

import Image from '../components/Image';

const About = () => (
  <div style={{ fontSize: '20px', color: 'blue' }}>
    <h1>About</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
    <Image />
    <p>What a cool website :)</p>
  </div>
);

export default About;
