import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"


export default function CardFilm({item}) {

  const handleRefresh = () => {
    // Memanggil fungsi refetch untuk mengambil data terbaru dari sumber data
    refetch();
  };

    return (
      <Link to={`/detailmovie/` + item.id} style={{ textDecoration:"none"}} onClick={handleRefresh}>
        <Card style={{ width: '10rem', background:"black", color:"white",}}>
      <Card.Img variant="top" src={item?.image} style={{backgroundSize:"cover", height:"18rem"}} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>
          <i>{item?.year}</i>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    )
}