import Menu from "./menu";
import HeaderHot from "./header-hot";
import HotItems from "./hot-items";
import HeaderSales from "./header-sales";
import Sales from "./sales";

function Content() {
    return <React.Fragment>
        <div className="bg-orange-100 rounded-lg">
            <div className="flex pb-20 justify-center">
                <Menu/>
            </div>
            <div className="p-5">
                <div className="mb-5">
                    <HeaderHot/>
                </div>
                <div className="mb-10">
                    <HotItems/>
                </div>
                <div className="mb-5">
                    <HeaderSales/>
                </div>
                <div>
                    <Sales/>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Content