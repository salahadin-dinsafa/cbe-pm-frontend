const PaginationItem = ({ page, currentPage, onPageChange }) => {
    return (
        <li className={`border mx-2 px-2 py-1 ${page === currentPage ? 'bg-brown-700 text-white duration-75' : ''}`} onClick={() => onPageChange(page)}>
            <button>
                {page}
            </button>
        </li>
    )
}

export default PaginationItem;