import styles from "./Logo.module.css";
import Link from "next/link";

const Logo = ({ wrapperClasses = "" }) => (
  <Link href="/">
    <a
      aria-label="Navigate to Republic Barbershop home page"
      className={wrapperClasses}
      title="Republic Barbershop Home"
    >
      <div className="relative">
        <span className="font-mono text-5xl">republic</span>
        <span className={`font-sans font-bold absolute ${styles.barbershop}`}>
          BARBERSHOP
        </span>
      </div>
    </a>
  </Link>
);

export default Logo;

// highlight color: text-red-600
// BG: bg-red-600
// Black color: text-gray-900
// BG: bg-gray-900
// White color: text-white
// BG: bg-white
