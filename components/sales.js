import SalesLeader from "./sales-leader"
import SalesMonthlyRevenue from "./sales-monthly-revenue"
import SalesAdd from "./sales-add"
import SalesComingSoon from "./sales-coming-soon"

function Sales() {
    return <React.Fragment>
        <div className="flex pl-5 pr-5">
            <div className="mr-4">
                <div className="mb-2">
                    <SalesLeader/>
                </div>
                <div>
                    <SalesMonthlyRevenue/>
                </div>
            </div>
            <div className="mr-4 items-stretch">
                <SalesAdd/>
            </div>
            <div className="items-stretch">
                <SalesComingSoon/>
            </div>
        </div>
    </React.Fragment>
}

export default Sales