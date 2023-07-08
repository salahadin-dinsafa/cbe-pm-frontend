import PaginationItem from './PaginationItem';
import { range } from '../../helpers/rage';

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);


    return (
        <div className="bg-white border px-2 pt-2 flex justify-center">
            <ul className='flex text-gold text-2xl overflow-x-scroll pb-3'>
                {
                    pages.map(page => (
                        <PaginationItem
                            key={page}
                            page={page}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />))
                }
            </ul>

        </div>
    )
}

export default Pagination;