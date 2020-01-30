import price from "../utils/price"

function SalesMonthlyRevenue() {
    return <React.Fragment>
        <div className="p-4 rounded-lg bg-teal-400 flex text-white justify-between">
            <div className="mr-2">
                <div className="font-thin">Monthly</div>
                <div className="font-semibold">Revenue</div>
            </div>
            <div className="flex-1 text-right text-xl font-semibold pt-2 align-middle">
                {price(28629.42)} &euro;
            </div>
        </div>
    </React.Fragment>
}

export default SalesMonthlyRevenue