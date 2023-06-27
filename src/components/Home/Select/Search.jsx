const Search = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        // Todo: format search value
        // Todo: Render search terminal
    }
    return (
        <form className="flex-1 flex flex-row justify-evenly">
            <input className={`flex-1 rounded-l-lg px-2 py-0.5 border-2 border-slate-100 
             font-light focus:outline-none focus:border-brown-700`}
                type="search"
                placeholder="Search"
                minLength={1}
                maxLength={8}
                onSubmit={submitHandler}
            />
            <button className="bg-brown-700 text-white px-5 rounded-r-lg hover:text-slate-200" type="submit">
                Search
            </button>
        </form>
    )
}

export default Search;