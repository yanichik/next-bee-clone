import Card from "./Card";
import styles from "./FreeDemoModal.module.css";
import buttonStyles from "../UI/Button.module.css";
import Button from "./Button";

const FreeDemoModal = (props) => {
	const modalCardClasses = props.modalState
		? `${styles.free_demo_modal_card} ${styles.on_screen}`
		: `${styles.free_demo_modal_card} ${styles.off_screen}`;

	const modalBgClasses = props.modalState
		? `${styles.free_demo_modal_bg}`
		: `${styles.free_demo_modal_bg_blank}`;

	const handleChildElementClick = (e) => {
		e.stopPropagation();
	};
	const closeFreeDemoModal = () => {
		props.onCloseFreeDemoModal();
	};
	const submitHandler = () => {};

	return (
		<div className={modalBgClasses} onClick={closeFreeDemoModal}>
			<Card onClick={handleChildElementClick} classes={modalCardClasses}>
				<div className={styles.x_close_modal}>
					<h2
						style={{ marginRight: "25px", marginTop: "30px", fontSize: "22px" }}
					>
						Get the Program Setup On Your Terms
					</h2>
					<span onClick={closeFreeDemoModal}>x</span>
				</div>
				<div className={styles.content}>
					<p className={styles.step_1}>
						Step 1 - Submit Requirements
						<a href="tel:1-800-547-1618">1-800-547-1618</a>
					</p>

					<form onSubmit={submitHandler}>
						<div className={styles.personal_details}>
							<input
								type="text"
								placeholder="First Name*"
								name="first_name"
								id={styles.first_name}
							/>
							<input
								type="text"
								placeholder="Last Name*"
								name="last_name"
								id={styles.last_name}
							/>
							<input
								type="text"
								placeholder="Your Email*"
								name="email"
								id={styles.email}
							/>
							<input
								type="text"
								placeholder="Your Phone*"
								name="phone_number"
								id={styles.phone_number}
							/>
						</div>
						<div className={styles.requirement_details}>
							<textarea
								name="requirement_details"
								id="requirement_details"
								rows="6"
								placeholder="Requirement Details*"
							/>
						</div>
						<div className={styles.step_2}>
							<div className={styles.step_2_schedule}>
								Step 2 - Schedule <br />
								Appointment
							</div>
							<Button
								buttonClasses={buttonStyles.button_rectangle_next}
								// type="submit"
							>
								Next
							</Button>
						</div>
					</form>
				</div>
			</Card>
		</div>
	);
};
export default FreeDemoModal;
