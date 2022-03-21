import Card from "./Card";
import styles from "./FreeDemoModal.module.css";
import Button from "./Button";

const FreeDemoModal = (props) => {
	const handleChildElementClick = (e) => {
		e.stopPropagation();
	};
	const closeFreeDemoModal = () => {
		props.onCloseFreeDemoModal();
	};
	const submitHandler = () => {};
	return (
		<div className={styles.free_demo_modal_bg} onClick={closeFreeDemoModal}>
			<Card
				onClick={handleChildElementClick}
				classes={`${styles.free_demo_modal_card}`}
			>
				<div className={styles.x_close_modal}>
					<span onClick={closeFreeDemoModal}>x</span>
				</div>
				<h2>Get the Program Setup On Your Terms</h2>
				<p>
					Step 1 - Submit Requirements
					<span>
						<Button>1-800-547-1618</Button>
					</span>
				</p>

				<form onSubmit={submitHandler}>
					<div className={styles.personal_details}>
						<input type="text" placeholder="First Name*" name="first_name" />
						<input type="text" placeholder="Last Name*" name="last_name" />
						<input type="text" placeholder="Your Email*" name="email" />
						<input type="text" placeholder="Your Phone*" name="phone_number" />
					</div>
					<div className={styles.requirement_details}>
						<textarea
							name="requirement_details"
							id="requirement_details"
							cols="60"
							rows="5"
							placeholder="Requirement Details*"
						/>
					</div>
					<div className="step_2">
						Step 2 - Schedule Appointment
						<Button classes={styles.button_rectangle} type="submit">
							Next
						</Button>
					</div>
				</form>
			</Card>
		</div>
		// <div className={styles.free_demo_modal_bg} onClick={closeFreeDemoModal}>
		// 	<div onClick={handleChildElementClick} className={styles.free_demo_modal}>
		// 		<p>something 1</p>
		// 		<button onClick={closeFreeDemoModal}>Something</button>
		// 		<p>something 2</p>
		// 	</div>
		// </div>
	);
};
export default FreeDemoModal;
