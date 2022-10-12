import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const MovieDetails = () => {

    //useParams
    const Param = useParams();

    //storage details
    const [Moviedetails, setDetails] = useState([]);

    //get all details
    const GetDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${Param.id}?api_key=d03c27a18ff30cc637a8177deaf68098&language=ar-US`)
        setDetails(res.data);
    }

    useEffect(() => {
        GetDetails();
        console.log(Moviedetails);
    }, [])


    return (
        <div>
            <Row>
                <div>
                    <img
                        className="img-movie w-30"
                        src={`https://image.tmdb.org/t/p/w500/${Moviedetails.backdrop_path}`}
                        alt="ascad"
                    />
                </div>
            </Row>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {Moviedetails.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{Moviedetails.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {Moviedetails.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{Moviedetails.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{Moviedetails.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={Moviedetails.homepage} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails