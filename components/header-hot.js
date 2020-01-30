import HeaderWrapper from "./header-wrapper"

function HeaderHot() {
    return <React.Fragment>
        <HeaderWrapper>
            <div className="text-2xl">
                <span className="font-semibold text-black-500">Pinchos </span>
                <span className="font-thin">of the day</span>
            </div>
            <div className="cursor-pointer">
                <img src="/assets/images/icons8-slider-50.png"
                    width={24}/>
            </div>
        </HeaderWrapper>
    </React.Fragment>
}

export default HeaderHot