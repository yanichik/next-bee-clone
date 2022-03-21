import styles from "./PartTwo.module.css";
// import buttonStyles from "../UI/Button.module.css";
// import Button from "../UI/Button";
import amazon_card200 from "../../assets/amazon_card200.png";
import Card from "../UI/Card";
const PartOne = (props) => {
	return (
		<div className={styles.parttwo}>
			<Card classes={styles.amazon}>
				{/* ask Toli how to include amazon class  */}
				<img className={styles.amazon_img} src={amazon_card200} alt="" />
				<p className>We stand by our Best Price Guarantee!</p>
			</Card>
		</div>
	);
};

export default PartOne;
