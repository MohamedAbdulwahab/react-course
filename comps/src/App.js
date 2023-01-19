import Accordion from "./components/Accordion";

function App() {
	const items = [
		{
			id: 'mkldasnfkl',
			label: 'Can I use React on a project?',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odio velit sapiente suscipit? Similique at sed ea nesciunt itaque eos consequatur maiores placeat! In vel natus animi ea dolor voluptates?'
		}, 
		{
			id: 'msaknijaf',
			label: 'Can I use JS on a project?',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odio velit sapiente suscipit? Similique at sed ea nesciunt itaque eos consequatur maiores placeat! In vel natus animi ea dolor voluptates?'
		}, 
		{
			id: 'snmdkankdsl',
			label: 'Can I use C++ on a project?',
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odio velit sapiente suscipit? Similique at sed ea nesciunt itaque eos consequatur maiores placeat! In vel natus animi ea dolor voluptates?'
		}
	];

	return (
		<Accordion items={items}/>
	)
}

export default App;