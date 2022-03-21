import styles from "./PartOne.module.css";
import buttonStyles from "../UI/Button.module.css";
import Button from "../UI/Button";
const PartOne = (props) => {
	const requestFreeDemo = () => {
		props.onOpenFreeDemoModal();
	};
	return (
		<div className={styles.partone}>
			<h1 className={styles.title}>
				Accelerate Your <span className={styles.circle}></span>{" "}
				<span className={styles.arrow}></span> Referral Funnel
			</h1>
			<h4>The First Unified Platform to Boost Lead Generation & Referrals</h4>
			<p>
				Boost the Volume & Quantity of Qualified Referrals, Use Gamification to
				Reward Success & Improve Results, Grow Your Base of Active Users. 16+
				Optimized Workflows Proven to Grow Referrals.
			</p>
			{/* <div className={styles.requestFreeDemo}> */}
			<div>
				<Button
					style={{ height: "90px", width: "100px" }}
					onClick={requestFreeDemo}
					buttonClasses={`${buttonStyles.button_oval_orange} ${buttonStyles.request_free_demo}`}
					className={styles.requestFreeDemo}
				>
					Request Free Demo
				</Button>
			</div>
		</div>
	);
};

export default PartOne;
