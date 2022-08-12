import { Container, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryDetailProduct() {
	const [foodDetail, setFoodDetail] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const foodData = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      console.log(response);
      const data = await response.data.meals;
      console.log(data);
  
      setFoodDetail(data);
    };
    foodData();
  }, [categoryName]);

  return (
    <>
    <Container id="category-detail" className="mt-5 w-50" >
				<Row>
					{foodDetail.map((foodDetail) =>
						<Col key={foodDetail.idMeal} className="col-3 mb-3 p-2" >
							<Link className="text-decoration-none text-black" to={`/produk/${foodDetail.id}`}>
								<Card>
									<Card.Img variant="top" className="border-none" src={`${foodDetail.strMealThumb}`} style={{maxHeight: "120px", objectFit: "cover" }} />
									{/* <Card.Body>
										<Card.Title className="fs-7 ">{foodDetail.name}</Card.Title>
										<p className="text-black-50 fs-8  mb-0">{foodDetail.Detail}</p>
										<Card.Text className="fs-7 ">{foodDetail.price}</Card.Text>
									</Card.Body> */}
								</Card>
							</Link>
						</Col>
					).reverse()}
				</Row>
			</Container>
    </>
  )
}

export default CategoryDetailProduct;