import styles from "./PartTwo.module.css";
// import cardStyles from "../UI/Card.module.css";
// import buttonStyles from "../UI/Button.module.css";
// import Button from "../UI/Button";
import amazon_card200 from "../../assets/amazon_card200.png";
import check_icon from "../../assets/check_icon.png";
import bee from "../../assets/bee.png";
import Card from "../UI/Card";
import Button from "../UI/Button";
const PartOne = (props) => {
	const viewTerms = ()=>{
		props.onViewTerms();
	}
	const cardClasses = `${styles.amazon}`;
	return (
		<div className={styles.parttwo}>
			<Card classes={cardClasses}>
				<div className={styles.amazon_img}>
					<img src={amazon_card200} alt="Amazon Card" />
				</div>
				<p className>We stand by our Best Price Guarantee!</p>
				<p>
					<span>
						<img src={check_icon} alt="Check" />
					</span>
					Fees of $1 Per 1000 Tracked Activities Means 400%+ ROI
				</p>
				<p>
					<span>
						<img src={check_icon} alt="Check" />
					</span>
					30% Better Results & Savings of 70%+ from Any Competitor
				</p>
				<div className={styles.bottom_part_2}>
					Show Us a Better Quote or a Better Solution - We will Give You a $200
					Gift Card <Button onClick={viewTerms}>View Terms</Button>
					<div>
						<img src={bee} alt="Bee" />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default PartOne;
