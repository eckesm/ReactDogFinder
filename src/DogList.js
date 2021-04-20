import { Link } from 'react-router-dom';
import DogFacts from './DogFacts';
import './DogList.css';

const DogList = ({ dogs }) => {
	return (
		<div className="DogList">
			<h1 className="DogList-header">Want a dog? We have {DogFacts.length}!</h1>
			<p className="DogList-subheader">(which is {DogFacts.length} too many in my opinion...)</p>
			<div className="DogList-links">
				{dogs.map((dog, idx) => (
            <Link className="DogList-link" key={idx} to={`/dogs/${dog.name}`}>{dog.name}</Link>
				))}
			</div>
		</div>
	);
};

export default DogList;
