import Image from "next/image";
import { Navlink } from "../navbar/navLink";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="footer bottom-0 bg-base-200 px-8 py-10 text-base-content md:px-28">
      <aside>
        <Image
          src="/images/logo.png"
          objectFit="cover"
          width={50}
          height={50}
          alt="logo"
        />
        <p>
          Lokal Bite
          <br />
          Providing Local Food since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Restaurant</h6>
        {Navlink.map((item) => (
          <Link key={item.href} href={item.href}>
            {
              <li className="link-hover link inline-flex hover:text-primary-soft-orange">
                {item.title}
              </li>
            }
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
    </footer>
  );
};
