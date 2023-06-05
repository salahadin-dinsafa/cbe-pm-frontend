
const Footer = () => {
    return (
        <div className="border fixed bottom-0 w-full tracking-wide text-xs bg-white">
            <div className='flex flex-col text-gold pb-1 pt-3'>
                <div className='flex flex-row text-center justify-center'>
                    <p>&copy; 2023 Comercial Bank of Ethiopia. All right reserved</p>
                </div>
                <div className='flex flex-row justify-center mt-2'>
                    <p className='mr-2'>Developed By</p>
                    <span>
                        <a href="https://salahadindinsafa.vercel.app/" target='_blank' rel="noreferrer" className='text-blue-400 cursor-pointer hover:text-blue-200'>Salahadin Dinsafa</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer