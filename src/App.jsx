import { useEffect, useState } from 'react';
import { ButtonContainer, TimeContainer } from './components';
import './App.css';

function App() {
	const [currentTime, setCurrentTime] = useState(new Date());
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		const id = setInterval(() => {
			if (isRunning) {
				setCurrentTime(new Date());
			}
		}, 1000);
		return () => clearInterval(id);
	}, [isRunning]);

	const stopTime = () => {
		setIsRunning(false);
	};

	const startTime = () => {
		setIsRunning(true);
	};

	return (
		<div className="App">
			<TimeContainer currentTime={currentTime} />
			<ButtonContainer stopTime={stopTime} startTime={startTime} />
		</div>
	);
}

export default App;
