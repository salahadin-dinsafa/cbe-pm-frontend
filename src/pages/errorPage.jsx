import { TbError404Off } from 'react-icons/tb';

export const Error = () => {
    return (
        <div className='w-fit h-fit mx-auto mt-52'>
            <TbError404Off className='text-rose-500 pr-3 inline-flex text-5xl' />
            <span className='text-slate-400 text-2xl font-sans tracking-wide'>: page not found</span>
        </div>
    )
}
