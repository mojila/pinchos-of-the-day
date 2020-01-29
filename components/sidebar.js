import Title from "./title"
import Time from "./time"
import TotalStatistics from "./total-statistics"

function Sidebar() {
    return <React.Fragment>
        <div className="bg-white p-3">
            <div>
              <Title/>
            </div>
            <div>
              <Time/>
            </div>
            <div>
              <TotalStatistics/>
            </div>
        </div>
    </React.Fragment>
}

export default Sidebar