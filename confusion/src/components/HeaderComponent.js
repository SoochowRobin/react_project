import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{

	render(){
		return(
			<React.Fragment>

				<Navbar dark >
					<div className='container'>
						<NavbarBrand href="/">Robin confusion</NavbarBrand>
					</div>
				</Navbar>

				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1>Robin Chen Con Fusion</h1>
								<p>We take inspiration from the world's best cuisiones! ..............
									Here are some contents!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>

			</React.Fragment>
		);
	}
}

export default Header;