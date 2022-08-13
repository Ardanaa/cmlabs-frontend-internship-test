import { Container, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { FiChevronRight } from "react-icons/fi"

function MealDetailProduct() {
  const [mealDetail, setMealDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foodData = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      console.log(response);
      const data = await response.data.meals[0];
      console.log(data);

      setMealDetail(data);
    };
    foodData();
  }, [id]);

  return (
    <>
      <Container id="meal-detail" className="mt-1 w-50" >
        <div>
          <AiFillHome className="mb-1 me-2"></AiFillHome>
          Home
          <FiChevronRight></FiChevronRight>
          Foods
          <FiChevronRight></FiChevronRight>
          {`${mealDetail.strCategory}`}
          <FiChevronRight></FiChevronRight>
          <span className="text-black-50">{`${mealDetail.strMeal}`}</span>
        </div>

        <h1 className="mt-5 text-center">{`${mealDetail.strMeal}`}</h1>
        <p className="mb-4 text-center" style={{ color: 'orange' }}>{`${mealDetail.strArea}`} Cullinary</p>

        <div className="d-flex justify-content-center">
          <img
            className="meal-image"
            src={`${mealDetail.strMealThumb}`}
            alt="Meal Thumbnail" />
        </div>

        <Row className="mt-5">
          <p className="fs-1 text-center">Recipes</p>
          <Col>
            <ul>
              <li className={`${mealDetail.strIngredient1}` ? "" : "d-none"}>{`${mealDetail.strMeasure1} ${mealDetail.strIngredient1}`}</li>
              <li className={`${mealDetail.strIngredient2}` ? "" : "d-none"}>{`${mealDetail.strMeasure2} ${mealDetail.strIngredient2}`}</li>
              <li className={`${mealDetail.strIngredient3}` ? "" : "d-none"}>{`${mealDetail.strMeasure3} ${mealDetail.strIngredient3}`}</li>
              <li className={`${mealDetail.strIngredient4}` ? "" : "d-none"}>{`${mealDetail.strMeasure4} ${mealDetail.strIngredient4}`}</li>
              <li className={`${mealDetail.strIngredient5}` ? "" : "d-none"}>{`${mealDetail.strMeasure5} ${mealDetail.strIngredient5}`}</li>
              <li className={`${mealDetail.strIngredient6}` ? "" : "d-none"}>{`${mealDetail.strMeasure6} ${mealDetail.strIngredient6}`}</li>
              <li className={`${mealDetail.strIngredient7}` ? "" : "d-none"}>{`${mealDetail.strMeasure7} ${mealDetail.strIngredient7}`}</li>
              <li className={`${mealDetail.strIngredient8}` ? "" : "d-none"}>{`${mealDetail.strMeasure8} ${mealDetail.strIngredient8}`}</li>
              <li className={`${mealDetail.strIngredient9}` ? "" : "d-none"}>{`${mealDetail.strMeasure9} ${mealDetail.strIngredient9}`}</li>
              <li className={`${mealDetail.strIngredient10}` ? "" : "d-none"}>{`${mealDetail.strMeasure10} ${mealDetail.strIngredient10}`}</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className={`${mealDetail.strIngredient11}` ? "" : "d-none"}>{`${mealDetail.strMeasure11} ${mealDetail.strIngredient11}`}</li>
              <li className={`${mealDetail.strIngredient12}` ? "" : "d-none"}>{`${mealDetail.strMeasure12} ${mealDetail.strIngredient12}`}</li>
              <li className={`${mealDetail.strIngredient13}` ? "" : "d-none"}>{`${mealDetail.strMeasure13} ${mealDetail.strIngredient13}`}</li>
              <li className={`${mealDetail.strIngredient14}` ? "" : "d-none"}>{`${mealDetail.strMeasure14} ${mealDetail.strIngredient14}`}</li>
              <li className={`${mealDetail.strIngredient15}` ? "" : "d-none"}>{`${mealDetail.strMeasure15} ${mealDetail.strIngredient15}`}</li>
              <li className={`${mealDetail.strIngredient16}` ? "" : "d-none"}>{`${mealDetail.strMeasure16} ${mealDetail.strIngredient16}`}</li>
              <li className={`${mealDetail.strIngredient17}` ? "" : "d-none"}>{`${mealDetail.strMeasure17} ${mealDetail.strIngredient17}`}</li>
              <li className={`${mealDetail.strIngredient18}` ? "" : "d-none"}>{`${mealDetail.strMeasure18} ${mealDetail.strIngredient18}`}</li>
              <li className={`${mealDetail.strIngredient19}` ? "" : "d-none"}>{`${mealDetail.strMeasure19} ${mealDetail.strIngredient19}`}</li>
              <li className={`${mealDetail.strIngredient20}` ? "" : "d-none"}>{`${mealDetail.strMeasure20} ${mealDetail.strIngredient20}`}</li>
            </ul>
          </Col>
        </Row>

        <div className="my-5">
          <p className="fs-1 text-center">Instructions</p>
          <p>{`${mealDetail.strInstructions}`}</p>
        </div>

        <p className={mealDetail.strYoutube === "" ? "d-none" : "fs-1 text-center"}>Tutorial</p>
        <div className="text-center">
        <iframe className="mx-auto" width="600" height="355" src={mealDetail.strYoutube} title="Tutorial" loading="lazy" allowfullscreen></iframe>
        </div>
      </Container>
    </>
  )
}

export default MealDetailProduct;