import React from 'react'
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationBar from './Pagination';
const MoviesList = ({ movies, GetPages, pageCount }) => {
    return (
        <Row>
            {
                movies.length >= 1 ? (
                    movies.map((movie) => {
                        return (
                            <CardMovie key={movie.id} movie={movie} />
                        )
                    })
                ) : <h1 className='text-center'>...لا يوجد افلام</h1>

            }

            {
                movies.length >= 1 ? (<PaginationBar GetPages={GetPages} pageCount={pageCount} />) : null
            }


        </Row>
    )
}

export default MoviesList;
