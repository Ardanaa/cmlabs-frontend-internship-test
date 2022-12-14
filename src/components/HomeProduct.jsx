import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import ReactLoading from 'react-loading';

function HomeProduct() {
	const [foodCategory, setFoodCategory] = useState([]);
	const [loading, setLoading] = useState(false); 

	useEffect(() => {
		setLoading(true)
		const foodData = async () => {
			const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
			console.log(response);
			const data = await response.data.categories;
			console.log(data);

			setFoodCategory(data);
			setLoading(false)
		};
		foodData();
	}, []);

	return (
		<>
			{loading ?
				<ReactLoading className="mx-auto" type="bubbles" color="#FFA500" height={'20%'} width={'20%'} />
				:
				<Container id="home-food" className="mt-5 w-50" >
					<Row>
						{foodCategory.map((foodCategory) =>
							<Col key={foodCategory.id} className="col-6 col-md-3 mb-3 p-2" >
								<Link className="text-decoration-none text-black" to={`/category/${foodCategory.strCategory}`}>
									<Card className="border-0 food-category">
										<Card.Img variant="top" className="img-hover-zoom--blur" src={`${foodCategory.strCategoryThumb}`} style={{ maxHeight: "120px", objectFit: "cover" }} />
										<div className="text-overlay">
											{`${foodCategory.strCategory}`}
										</div>
									</Card>
								</Link>
							</Col>
						)}
					</Row>
				</Container>
			}
		</>
	)
}

export default HomeProduct;