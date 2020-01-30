import HeaderWrapper from "./header-wrapper"

function HeaderSales() {
    return <React.Fragment>
        <HeaderWrapper>
            <div className="text-2xl">
                <span className="font-semibold text-black-500">Sales </span>
                <span className="font-thin">statistics</span>
            </div>
            <div className="cursor-pointer underline text-orange-900 text-md">
                View All
            </div>
        </HeaderWrapper>
    </React.Fragment>
}

export default HeaderSales