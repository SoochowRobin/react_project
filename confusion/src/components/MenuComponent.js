import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


// convert class component to functional component 

// define functional component here
	function RenderMenuItem({dish}) {
		return (
			<Card>
				<Link to={`/menu/${dish.id}`} >
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardImgOverlay body className="ml-5">
					<CardTitle heading>{dish.name}</CardTitle>
					{/* <p>{dish.description}</p> */}
				</CardImgOverlay>
				</Link>
			</Card>
		);

	}

	
	const Menu = (props) => {

	// iterate overall items 
	const menu = props.dishes.map((dish) => {
		return (
			<div className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} />
			</div>
		);
	});


	return (
		<div className='container'>
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to='/home'>Main Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>Menu</BreadcrumbItem>
				</Breadcrumb>
				<div className='col-12'>
					<h3>Menu</h3>
					<hr />
				</div>
				<div className='row'>
					{menu}
				</div>
			</div>
		</div>
	);
}





// export 
export default Menu;