import React from "react";
import ReactPlayer from 'react-player';
import NavUser from "../../Component/NavbarUser";
import {Row, Col, Button} from "react-bootstrap"
import  { API } from '../../Config/Api'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetail() {

    let { id } = useParams()
    
    let { data : movie, refetch } = useQuery("movieCache", async () => {
        const response = await API.get(`/movie/${id}`)
        return response.data.data
    })

    console.log("datafilm", movie?.link)
    
    return (
        <div>
            <NavUser />
            <div style={{backgroundColor:"black"}}>
            <ReactPlayer url={movie?.link} controls playing width="100%" height="100%" />
            </div>
            <div style={{backgroundColor:"black", padding:"20px", color:"Gray", fontWeight:"bold"}}>
                <hr />
                <Row>
                    <Col>
                        <div>
                            <Row className="ps-5">
                                <Col xs={5}>
                                    <img src={movie?.image} alt="cover" style={{height:"300px"}} />
                                </Col>
                                <Col>
                                    <div>
                                        <h3>{movie?.title}</h3>
                                        <i>{movie?.year}</i><Button variant="outline-light" className="ms-2 mb-2" as={Link} to='/movie'>Movies</Button>
                                        <p>{movie?.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}