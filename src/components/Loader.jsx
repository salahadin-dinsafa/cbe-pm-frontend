import { ThreeDots } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-fit h-fit flex mx-auto">
            <ThreeDots
                height="50"
                width="80"
                radius="5"
                color="#d19f34"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader