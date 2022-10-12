
import ReactPaginate from 'react-paginate';


const PaginationBar = ({ GetPages, pageCount }) => {


    const handlePageClick = async (data) => {

        GetPages(data.selected + 1)
    }


    return (

        <ReactPaginate
            breakLabel="..."
            nextLabel="التالي >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< السابق"
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />

    )
}

export default PaginationBar;
