import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

const Pagination = () => {
    const handleClick = () => {
        console.log('todo');
        // Todo: iterate throw page
    }
    return (
        <div className="bg-white text-gold px-2 w-48 mx-auto flex justify-between items-center">
            <MdOutlineNavigateBefore onClick={handleClick} className="text-2xl hover:bg-slate-50 hover:cursor-pointer rounded-full" />
            <p className="text-xl p-1">- {1} -</p>
            <MdOutlineNavigateNext onClick={handleClick} className="text-2xl font-light hover:bg-slate-50 hover:cursor-pointer rounded-full" />
        </div>
    )
}

export default Pagination;