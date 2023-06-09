import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
      <div className="topNav">
        <Image src={'/images/logo.png'} alt="logo" height={50} width={50}/>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
        </ul>
      </nav>
      </div>
      <h1 className="title">Events around the world</h1>
      </div>
    </header>
  );
};
