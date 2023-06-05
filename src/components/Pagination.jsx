const Pagination = () => {
    const handleClick = () => {
        console.log('todo');
        // Todo: iterate throw page
    }
    return (
        <div className="bg-white text-gold px-2 w-56 mx-auto flex justify-between">
            <button onClick={handleClick} className="text-2xl px-1.5 hover:bg-slate-50 rounded-full">&copy;</button>
            <p className="text-xl p-1">- {1} -</p>
            <button onClick={handleClick} className="text-2xl px-1.5 hover:bg-slate-50 rounded-full">&copy;</button>
        </div>
    )
}

export default Pagination;