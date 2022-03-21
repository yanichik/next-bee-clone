import styles from "./Button.module.css";
const Button = (props) => {
	return (
		<button
			className={props.buttonClasses}
			type={props.type || styles.button}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
