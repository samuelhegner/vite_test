import { useState } from 'react';
import samHead from './assets/samHead.png';
import recordGif from './assets/RecordGif.gif';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div>
				<h1>Samuel's Website</h1>
				<h3>More to come....</h3>
			</div>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>
					<img className='headClass' src={samHead} />
				</button>
			</div>
			<h3>↓↓↓↓ I'm Samuel Hegner and I approve the message below ↓↓↓↓</h3>
			<div className='boxedDiv'>
				<h3>count is {count}</h3>
			</div>
			<div>
				<img src={recordGif}></img>
			</div>
		</div>
	);
}

export default App;
