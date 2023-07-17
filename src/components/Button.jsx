

const Button = ({ name }) => {
    return <button className={`
                    w-full
                    py-2
                bg-brown-700
                text-white
                text-2xl
                transition
                duration-500
                border
                border-white
                hover:text-brown-700
                hover:bg-white
                hover:border-brown-100
                `} type="submit">{name}</button>

}

export default Button