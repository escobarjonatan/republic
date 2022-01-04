import styles from "./Logo.module.css";

const Logo = ({ wrapperClasses = "" }) => (
  <a
    className={wrapperClasses}
    href="/"
    title="Republic Barbershop Home"
    aria-label="Navigate to Republic Barbershop home page"
  >
    <div className="relative">
      <span className="font-mono text-5xl">republic</span>
      <span className={`font-sans font-bold absolute ${styles.barbershop}`}>
        BARBERSHOP
      </span>
    </div>
  </a>
);

export default Logo;

// highlight color: text-red-600
// BG: bg-red-600
// Black color: text-gray-900
// BG: bg-gray-900
// White color: text-white
// BG: bg-white
