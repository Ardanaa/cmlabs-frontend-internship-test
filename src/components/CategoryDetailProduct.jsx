import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import ReactLoading from 'react-loading';

function CategoryDetailProduct() {
	const [foodDetail, setFoodDetail] = useState([]);
	const { categoryName } = useParams();
	const [loading, setLoading] = useState(false); 

	useEffect(() => {
		setLoading(true);
		const foodData = async () => {
			const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
			console.log(response);
			const data = await response.data.meals;
			console.log(data);

			setFoodDetail(data);
			setLoading(false);
		};
		foodData();
	}, [categoryName]);

	return (
		<>
			{loading ?
				<ReactLoading className="mx-auto" type="bubbles" color="#FFA500" height={'20%'} width={'20%'} />
				:
				<Container id="category-detail" className="mt-1 w-50" >
					<div>
						<AiFillHome className="mb-1 me-2"></AiFillHome>
						<a href="/">Home</a>
						<FiChevronRight></FiChevronRight>
						<a href="/">Foods</a>
						<FiChevronRight></FiChevronRight>
						<span className="text-black-50">{`${categoryName}`}</span>
					</div>

					<h1 className="my-4">
						{`${categoryName}`} Meals
					</h1>
					<Row>
						{foodDetail.map((foodDetail) =>
							<Col key={foodDetail.idMeal} className="col-6 col-md-3 mb-3 p-2" >
								<Link className="text-decoration-none text-black" to={`/meal/${foodDetail.idMeal}`}>
									<Card className="border-0 meals" style={{ overflow: "hidden", borderRadius: "20px" }}>
										<Card.Img className="img-hover-zoom--quick-zoom" src={`${foodDetail.strMealThumb}`} style={{ objectFit: "cover" }} />
										<div className="text-overlay text-center">
											{`${foodDetail.strMeal}`}
										</div>
									</Card>
								</Link>
							</Col>
						).reverse()}
					</Row>
				</Container>
			}
		</>
	)
}

export default CategoryDetailProduct;