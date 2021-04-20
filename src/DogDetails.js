import { useParams } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ getDog }) => {
	const { name } = useParams();
	const dog = getDog(name);

	return (
		<div className="DogDetails">
			<h1>{dog.name}</h1>
			<img className="DogDetails-image" src={dog.src} alt={dog.name} />
			<p className="DogDetails-age">Age: {dog.age}</p>
			<p className="DogDetails-factsheading">Facts:</p>
			<ul className="DogDetails-facts">
				{dog.facts.map((fact, idx) => (
					<li key={idx} className="DogDetails-fact">
						{fact}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DogDetails;
