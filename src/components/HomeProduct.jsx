import { Container, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

function HomeProduct() {
	const [foodCategory, setFoodCategory] = useState([]);

  useEffect(() => {
    const foodData = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      console.log(response);
      const data = await response.data.categories;
      console.log(data);
  
      setFoodCategory(data);
    };
    foodData();
  }, []);

  return (
    <>
    <Container id="products" className="mt-5 w-50" >
				<Row>
					{foodCategory.map((foodCategory) =>
						<Col key={foodCategory.id} className="col-4 mb-3 p-2" >
							<Link className="text-decoration-none text-black" to={`/category/${foodCategory.strCategory}`}>
								<Card className="border-0 category-food">
									<Card.Img variant="top" className="img-hover-zoom--blur" src={`${foodCategory.strCategoryThumb}`} style={{maxHeight: "120px", objectFit: "cover" }} />
									<div className="category-overlay">
										{`${foodCategory.strCategory}`}
									</div>
								</Card>
							</Link>
						</Col>
					)}
				</Row>
			</Container>
    </>
  )
}

export default HomeProduct;