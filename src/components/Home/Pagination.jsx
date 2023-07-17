import PaginationItem from './PaginationItem';
import { range } from '../../helpers/rage';
import { getPageCut } from '../../helpers/getPageCut';

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    const pagesCount = Math.ceil(total / limit);
    const pagesCut = getPageCut({ pagesCount, pagesCutCount: 5, currentPage })
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    return (
        <div className="w-fit mx-auto py-2 md:text-lg">
            <ul className='flex'>
                <PaginationItem
                    page="First"
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(1)}
                    isDisabled={isFirstPage}
                />
                <PaginationItem
                    page="Prev"
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(currentPage - 1)}
                    isDisabled={isFirstPage}
                />
                {
                    !pages.includes(1) && <p className='text-gold'>...</p>
                }
                {
                    pages.map(page => (
                        <PaginationItem
                            key={page}
                            page={page}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />))
                }
                {

                    !pages.includes(pagesCount) && <p className='text-gold'>...</p>

                }
                <PaginationItem
                    page="Next"
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(currentPage + 1)}
                    isDisabled={isLastPage}
                />
                <PaginationItem
                    page="Last"
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(pagesCount)}
                    isDisabled={isLastPage}

                />
            </ul>

        </div>
    )
}

export default Pagination;