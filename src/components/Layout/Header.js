import { Fragment } from "react";
import { useState } from "react";
import Button from "../UI/Button";
import beeAvatar from "../../assets/beeAvatar.png";
import capterra_icon from "../../assets/capterra_icon.png";
import g2_icon from "../../assets/g2_icon.png";
import topPhone from "../../assets/topPhone.png";
import buttonStyles from "../UI/Button.module.css";
import headerStyles from "./Header.module.css";
const Header = (props) => {
	const [scrolled, setScrolled] = useState(false);
	const addShadowToNavbar = () => {
		if (window.scrollY > 45) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	window.addEventListener("scroll", addShadowToNavbar);
	return (
		<Fragment>
			<header className={headerStyles.header_top}>
				<img src={topPhone} alt="Phone" />
				<h5>1-800-547-1618</h5>
			</header>
			<header
				className={
					scrolled
						? `${headerStyles.header_permanent} ${headerStyles.scrolled}`
						: headerStyles.header_permanent
				}
			>
				<div className={headerStyles.nextbee_logo}>
					<img src={beeAvatar} alt="Avatar" />
					<h1 className={headerStyles.next}>
						Next<span className={headerStyles.bee}>Bee</span>
					</h1>
				</div>
				<div className={headerStyles.header_images}>
					<figure className={headerStyles.capterra_icon}>
						<img
							className={headerStyles.capterra_icon}
							src={capterra_icon}
							alt="Capterra Icon"
						/>
					</figure>
					<figure className={headerStyles.g2_icon}>
						<img src={g2_icon} alt="G2 Icon" />
					</figure>
					{scrolled && (
						<Button
							buttonClasses={`${buttonStyles.button_rectangle} ${buttonStyles.header_request_demo}`}
						>
							Request Demo
						</Button>
					)}
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
