import Pagination from './Pagination';

const TerminalList = () => {
    const terminals = [
        { terminalID: 'ADD00001', name: 'HURSO' },
        { terminalID: 'ADD00002', name: 'HURSO' },
        { terminalID: 'ADD00003', name: 'HURSO' },
        { terminalID: 'ADD00004', name: 'HURSO' },
        { terminalID: 'ADD00005', name: 'HURSO' },
        { terminalID: 'ADD00006', name: 'HURSO' },
        { terminalID: 'ADD00007', name: 'HURSO' },
        { terminalID: 'ADD00008', name: 'HURSO' },
        { terminalID: 'ADD00009', name: 'HURSO' },
        { terminalID: 'ADD00010', name: 'HURSO' },

    ]

    const clickHandler = () => {
        // Todo: redirect to detail page

    }
    return (
        <div className='bg-slate-50 rounded-md mt-5 mb-20 pb-5'>
            <div className='p-2 text-center'>
                <ul>
                    {
                        terminals.map(terminal => <li key={terminal.terminalID}>
                            <button className={`
                            flex justify-between 
                            px-3 py-3 my-3
                            text-gold bg-white  
                            w-full transition-shadow duration-500 hover:shadow-lg`}
                                onClick={clickHandler}
                            >
                                <p className='mr-4'>{terminal.terminalID}</p>
                                <p className='mr-4'>|</p>
                                <p className='flex-1'>{terminal.name}</p>
                            </button>
                        </li>)
                    }
                </ul>
            </div>
            <Pagination />
        </div>
    )
}

export default TerminalList;