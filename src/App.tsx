import { useState } from 'react';
import reactLogo from './assets/react.svg';
import samHead from './assets/samHead.png';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div>
				<h1>Samuel's Website</h1>
				<h3>More to come...</h3>
			</div>
			<div>
				<button className='.logo' onClick={() => setCount((count) => count + 1)}>
					<img src={samHead} />
				</button>
			</div>
			<div className='card'>
				<h2>count is {count}</h2>
			</div>
		</div>
	);
}

export default App;
