import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Redirect, Route, Switch} from 'react-router-dom';

// main container component here

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
			selectedDish: null
		};
	}

	// onDishSelect(dishId) {
	// 	this.setState({ selectedDish: dishId });

	// }

	render() {

		const HomePage = () => {
			return(
				<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
				promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
				leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
			);
		}

		
		const DishWithId = ({match}) => {
			return(
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
				comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
				
				/>
			);
		}

		const AboutUsPage = () =>{
			return (
			<About leaders={this.state.leaders}
			/>
			);
		}

		return (
			<div>

				{/* Here is the Header Component */}
				<Header />

				{/* <Menu dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)} /> */}

				<Switch>
					
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route exact path="/contactus" component={Contact}/>
					<Route exact path="/aboutus" component={AboutUsPage}/>
					<Redirect to="/home" />
					
				</Switch>
				


				{/* go out and select specific dish information */}
				{/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

				<Footer />
			</div>
		)
	};
}

export default Main;
