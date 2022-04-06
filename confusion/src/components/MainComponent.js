
import Menu from './MenuComponent';
import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

// main container component here

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			selectedDish: null
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });

	}

	render() {
		return (
			<div>

				{/* Here is the Header Component */}
				
				<Header />

				<Menu dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)} />


				{/* go out and select specific dish information */}
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

				<Footer />
			</div>
		)
	};
}

export default Main;
