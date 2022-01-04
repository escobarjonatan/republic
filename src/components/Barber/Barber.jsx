// TODO: Remove image and replace with static one
import Image from "next/image";
import hero from "../../public/republic.jpeg";
import styles from "./Barber.module.css";

const Barber = ({
  barberName = "Barber Name",
  barberUrl = "https://app.waitwhile.com/welcome/republicbarbershop",
  barberImage = hero,
}) => (
  <>
    <div className={`sm:w-1/3 w-1/2 mb-3 ${styles.wrapper}`}>
      <a href={barberUrl}>
        <Image
          alt={barberName}
          height="200px"
          placeholder="blur"
          src={barberImage}
          width="200px"
        />
      </a>
      <div className="mt-3">{barberName}</div>
    </div>
  </>
);

export default Barber;
