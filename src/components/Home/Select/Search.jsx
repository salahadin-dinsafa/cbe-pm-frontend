import { useDispatch } from "react-redux";

import {setSearchValue} from '../../../features/terminalSlice';


const Search = () => {
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleSearchValue = (e) => {
        dispatch(setSearchValue(e.target.value.toUpperCase()))
    }
    return (
        <form onSubmit={submitHandler} className="flex-1 flex flex-row justify-evenly">
            <input className={`flex-1 rounded-l-lg px-2 py-0.5 text-gold placeholder:text-gold border border-gold 
             font-light focus:outline-none focus:border-brown-700`}
                type="search"
                placeholder="Search"
                minLength={1}
                maxLength={8}
                onChange={handleSearchValue}
            />
            <button className="bg-brown-700 text-white px-5 rounded-r-lg hover:text-slate-200" type="submit">
                Search
            </button>
        </form>
    )
}

export default Search;