import Link from "next/link";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Go to Home Page using Linking</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to About Student using Linking</Link>
    </>
  );
};

export default About;
