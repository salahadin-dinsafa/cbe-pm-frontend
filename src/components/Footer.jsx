import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="border fixed bottom-0 w-full">
            <div className='flex flex-col text-gold py-5 font-mono font-light'>
                <div className='flex flex-row justify-center'>
                    <MdCopyright className='mt-1' />
                    <p className='ml-3'>all right is reserved</p>
                </div>
                <div className='flex flex-row justify-center mt-2'>
                    <p className='mr-2'>Developed By</p>
                    <span>
                        <a href="https://salahadindinsafa.vercel.app/" className='text-blue-400 cursor-pointer hover:text-blue-200'>Salahadin Dinsafa</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer