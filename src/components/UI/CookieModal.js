import { Fragment } from "react";
// import { Link } from "react-router-dom";
import styles from "./CookieModal.module.css";
// import Button from "./Button";

const CookieModal = () => {
	return (
		<Fragment>
			<a href="https://web.nextbee.com/privacy-policy/" target="_blank" rel="noreferrer noopener">
				<div className={styles.cookieCircle}>
					{/* <img src={cookiesImg} alt="Cookie" /> */}
				</div>
				<div className={styles.cookieSideBar}>Our Cookie Policy</div>
				{/* <Button className={styles.cookieSideBar}>Our Cookie Policy</Button> */}
			</a>
		</Fragment>
	);
};
export default CookieModal;
