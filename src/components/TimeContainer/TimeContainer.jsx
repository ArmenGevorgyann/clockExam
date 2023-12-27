import PropTypes from 'prop-types';
import './TimeContainer.scss';

export default function TimeContainer({ currentTime }) {
	return (
		<div className="TimeContainer">
			<span className="TimeContainer-hours time">
				{currentTime.getHours() < 10 ? 0 : ''}
				{currentTime.getHours()}
			</span>
			<span className="doubleDots">:</span>
			<span className="TimeContainer-minutes time">
				{currentTime.getMinutes() < 10 ? 0 : ''}
				{currentTime.getMinutes()}
			</span>
			<span className="doubleDots">:</span>
			<span className="TimeContainer-seconds time">
				{currentTime.getSeconds() < 10 ? 0 : ''}
				{currentTime.getSeconds()}
			</span>
		</div>
	);
}

TimeContainer.propTypes = {
	currentTime: PropTypes.object.isRequired,
};
