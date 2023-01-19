import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
	return (
		<div>
			<div>
				<Button primary outline rounded><GoBell/>Click Me!!</Button>
			</div>
			
			<div>
				<Button secondary outline> <GoCloudDownload />Buy Now</Button>
			</div>

			<div>
				<Button warning><GoDatabase/>See Deals</Button>
			</div>
			
			<div>
				<Button danger outline>Add to Favorites</Button>
			</div>

			<div>
				<Button success rounded>Buy Later</Button>
			</div>
		</div>
	);
}

export default ButtonPage;