import price from "../utils/price"

function SalesLeader() {
    return <React.Fragment>
        <div className="p-4 w-64 bg-purple-900 rounded-lg">
            <div className="text-white">
                <span className="font-thin">Sales </span> 
                <span className="font-semibold">Leader</span>
            </div>
            <div className="text-gray-600 text-xs mb-5">Stuffed Peppers with Tuna</div>
            <div className="flex text-white justify-between">
                <div>
                    <span className="font-semibold">{price(1370)} </span> 
                    <span className="text-xs">sold</span>
                </div>
                <div className="underline text-sm cursor-pointer">Details</div>
            </div>
        </div>
    </React.Fragment>
}

export default SalesLeader