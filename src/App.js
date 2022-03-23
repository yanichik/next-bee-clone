import { useState } from "react";
import Header from "./components/Layout/Header";
import PartOne from "./components/Body/PartOne";
import PartTwo from "./components/Body/PartTwo";
import CookieModal from "./components/UI/CookieModal";
import FreeDemoModal from "./components/UI/FreeDemoModal";
import ViewTermsModal from "./components/UI/ViewTermsModal";
// import styles from "./App.module.css";
function App() {
	const [freeDemoModalState, setFreeDemoModalState] = useState(false);
	const [viewTermsState, setViewTermsState] = useState(false);
	const openFreeDemoModalHandler = () => {
		document.body.style.overflow =
			"hidden"; /* de-activates scroll on body while modal is open */
		setFreeDemoModalState(true);
	};
	const closeFreeDemoModalHandler = () => {
		document.body.style.overflow = ""; /* re-activates scroll on body */
		setFreeDemoModalState(false);
	};

	const viewTermsHandler = () => {
		document.body.style.overflow =
			"hidden"; /* de-activates scroll on body while modal is open */
		setViewTermsState(true);
	};
	const closeViewTermsHandler = () => {
		document.body.style.overflow = ""; /* re-activates scroll on body */
		setViewTermsState(false);
	};
	return (
		<div>
			<Header />
			<CookieModal />
			{/* {freeDemoModalState && (
				<FreeDemoModal onCloseFreeDemoModal={closeFreeDemoModalHandler} />
			)} */}
			<FreeDemoModal
				modalState={freeDemoModalState}
				onCloseFreeDemoModal={closeFreeDemoModalHandler}
			/>
			<ViewTermsModal
				modalState={viewTermsState}
				onCloseViewTermsModal={closeViewTermsHandler}
			/>

			<PartOne onOpenFreeDemoModal={openFreeDemoModalHandler} />
			<PartTwo onViewTerms={viewTermsHandler} />
      <br />
		</div>
	);
}

export default App;
