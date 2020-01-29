import price from "../utils/price"

function TotalStatistics() {
    return <React.Fragment>
        <div className="bg-orange-400 p-4 rounded-lg mt-10">
            <div className="flex justify-around mb-5">
                <div className="mr-10">
                    <span className="font-thin mr-1">Total</span> 
                    <span className="font-semibold">Statistics</span>
                </div>
                <div>
                    month
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 pl-6 pr-6 text-center">
                <span className="text-orange-500 font-semibold text-3xl">{price(18347).toString()}</span>
                <span className="text-gray-400 text-sm">/sold pinchos</span>
            </div>
        </div>
    </React.Fragment>
}

export default TotalStatistics