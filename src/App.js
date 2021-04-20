import { Route, Switch, Redirect } from 'react-router-dom';
import DogFacts from './DogFacts';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import './App.css';

function App({ dogs }) {

	function getDog(name) {
		let foundDog = null;
		DogFacts.forEach(dog => {
			if (dog.name === name) {
				foundDog = dog;
			}
		});
		return foundDog;
	}

	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route exact path="/dogs">
					<DogList dogs={dogs} />
				</Route>
				<Route exact path="/dogs/:name">
					<DogDetails getDog={getDog} />
				</Route>
				<Redirect to="/dogs" />
			</Switch>
		</div>
	);
}

App.defaultProps = {
	dogs : DogFacts
};

export default App;
