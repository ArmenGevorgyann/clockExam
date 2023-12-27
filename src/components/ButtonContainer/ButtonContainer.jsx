import PropTypes from 'prop-types';
import './ButtonContainer.scss';

export default function ButtonContainer({ stopTime, startTime }) {
	return (
		<div className="ButtonContainer">
			<button className="StopBtn" onClick={stopTime}>
				Stop
			</button>
			<button className="StartBtn" onClick={startTime}>
				Start
			</button>
		</div>
	);
}

ButtonContainer.propTypes = {
	stopTime: PropTypes.func.isRequired,
	startTime: PropTypes.func.isRequired,
};
