import Card from "./Card";
import styles from "./ViewTermsModal.module.css";
import buttonStyles from "../UI/Button.module.css";
import Button from "./Button";
import popup_bee from "../../assets/popup-bee.png";
import amazon_card200 from "../../assets/amazon_card200.png";
import check_icon from "../../assets/check_icon.png";

const ViewTermsModal = (props) => {
	const modalCardClasses = props.modalState
		? `${styles.view_terms_modal_card} ${styles.on_screen}`
		: `${styles.view_terms_modal_card} ${styles.off_screen}`;

	const modalBgClasses = props.modalState
		? `${styles.view_terms_modal_bg}`
		: `${styles.view_terms_modal_bg_blank}`;

	const handleChildElementClick = (e) => {
		e.stopPropagation();
	};
	const closeViewTermsModal = () => {
		props.onCloseViewTermsModal();
	};
	const submitHandler = () => {};
	return (
		<div className={modalBgClasses} onClick={closeViewTermsModal}>
			<Card onClick={handleChildElementClick} classes={modalCardClasses}>
				<div className={styles.x_close_modal}>
					<span onClick={closeViewTermsModal}>x</span>
				</div>
				<div className={styles.content}>
					<div className={styles.line_1}>
						<div>
							<h4>
								Yes! You can receive a $200 Amazon gift card. <br></br>First,
								you must identify a competitor that can...
							</h4>
						</div>
						<div>
							<img src={popup_bee} alt="Popup Bee" />
						</div>
					</div>
					<div className={styles.line_2}>
						<div className={styles.amazon}>
							<img src={amazon_card200} alt="Amazon Card" />
						</div>
						<div className={styles.get_platform_demo}>
							<span>
								<img src={check_icon} alt="Check" />
								Match our platform, feature for feature,
							</span>
							<br />
							<span>
								<img src={check_icon} alt="Check" />
								And demonstrate the same or better results,
							</span>
							<br />
							<span>
								<img src={check_icon} alt="Check" />
								Plus quote a more competitive price.
							</span>
							<br />
							<span style={{ marginTop: "10px", marginBottom: "10px" }}>
								To Learn More and Compare, Start Here:
							</span>
							<Button buttonClasses={buttonStyles.button_oval_orange}>
								Get a Platform Features Demo
							</Button>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};
export default ViewTermsModal;
