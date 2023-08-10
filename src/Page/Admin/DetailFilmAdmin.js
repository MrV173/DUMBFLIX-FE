import React, {useState} from "react";
import NavAdmin from "../../Component/NavbarAdmin";
import ReactPlayer from "react-player";
import {Row, Col, Button, Modal} from "react-bootstrap"
import { API } from "../../Config/Api"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function DetailFilmAdmin() {

    let {id} = useParams()

    let {data : movieadmin, refetch } = useQuery("movieAdminCache", async () => {
        const response = await API.get(`/movie/${id}`)
        return response.data.data
    })

    console.log("datafilm", movieadmin?.link)

    return (
        
        <div>
            <NavAdmin />
        <div style={{backgroundColor:"black"}}>
        <ReactPlayer url={movieadmin?.link} controls playing width="100%" height="100%" />
            </div>
            <div style={{backgroundColor:"black", padding:"20px", color:"Gray", fontWeight:"bold"}}>
                <hr />
                <Row>
                    <Col>
                        <div>
                            <Row className="ps-5">
                                <Col xs={3}>
                                    <img src={movieadmin?.image} alt="cover" style={{height:"300px"}} />
                                </Col>
                                <Col>
                                    <div>
                                        <h3>{movieadmin?.title}</h3>
                                        <i>{movieadmin?.year}</i><Button variant="outline-light" className="ms-2 mb-2">Movies</Button>
                                        <p>{movieadmin?.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            

            </div>
    )
}