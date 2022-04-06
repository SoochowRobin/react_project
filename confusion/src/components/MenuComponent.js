import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// convert class component to functional component 

// define functional component here
	function RenderMenuItem({ dish, onClick }) {
		return (
			<Card onClick={() => onClick(dish.id)}>

				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardImgOverlay body className="ml-5">
					<CardTitle heading>{dish.name}</CardTitle>
					{/* <p>{dish.description}</p> */}
				</CardImgOverlay>
			</Card>
		);

	}

	
	const Menu = (props) => {

	// iterate overall items 
	const menu = props.dishes.map((dish) => {
		return (
			<div className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} onClick={props.onClick} />
			</div>
		);
	});


	return (
		<div className='container'>
			<div className='row'>
				{menu}
			</div>

		</div>
	);
}





// export 
export default Menu;