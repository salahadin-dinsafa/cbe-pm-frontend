const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
    return (
        <li className={`
         border
         mx-1 px-1 md:px-2 md:mx-2  py-0.5 lg:px-4 
         text-gold md:text-2xl
         hover:opacity-50 hover:border-brown-700 hover:text-brown-700
         ${page === currentPage ? 'bg-brown-700 text-white duration-75 hover:text-white hover:opacity-100' : ''}
         ${isDisabled ? 'opacity-40 hover:border-gray-200 hover:text-gold' : ''}
         `}
            onClick={() => onPageChange(page)}>
            {
                isDisabled && <button disabled>{page}</button>
            }
            {
                !isDisabled && <button>{page}</button>
            }
        </li >
    )
}

export default PaginationItem;