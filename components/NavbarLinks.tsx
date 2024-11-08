import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface NavbarLinksProps {
  closeMobileMenu: () => void;
}

function NavbarLinks({ closeMobileMenu }: NavbarLinksProps) {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    if (pathname !== "/") {
      router.push("/");
    }
    scrollToSection(sectionId);
  };

  return (
    <>
      <div className="navbar-section-link-container">
        <a
          href="/#home"
          className="text-white text-lg no-underline hover:text-purple-400"
          onClick={(e) => handleClick(e, "#home")}
        >
          Home
        </a>
      </div>

      <div className="navbar-section-link-container">
        <a
          href="/#about"
          className="text-white text-lg no-underline hover:text-purple-400"
          onClick={(e) => handleClick(e, "#about")}
        >
          About
        </a>
      </div>

      <div className="navbar-section-link-container">
        <a
          href="/#faq"
          className="text-white text-lg no-underline hover:text-purple-400"
          onClick={(e) => handleClick(e, "#faq")}
        >
          FAQ
        </a>
      </div>

      <div className="navbar-section-link-container">
        <a
          href="/#sponsors"
          className="text-white text-lg no-underline hover:text-purple-400"
          onClick={(e) => handleClick(e, "#sponsors")}
        >
          Sponsors
        </a>
      </div>

      <div className="navbar-section-link-container">
        <Link href="/team" passHref>
          <div
            className="text-white text-lg no-underline hover:text-purple-400"
            onClick={closeMobileMenu}
          >
            Team
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavbarLinks;
