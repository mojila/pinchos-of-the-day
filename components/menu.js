function Menu() {
    return <React.Fragment>
        <div className="bg-purple-900 p-2 pl-4 pr-4 rounded-lg rounded-t-none flex justify-between">
            <div className="p-2 bg-white rounded-lg flex mr-6">
                <span className="mr-1"><img src="/assets/images/icons8-home.svg" width={16}/></span>
                <span className="text-xs font-semibold">Home</span>
            </div>
            <div className="p-2 rounded-lg flex mr-6 cursor-pointer">
                <span className="mr-0"><img src="/assets/images/icons8-clock-inactive.svg" width={16}/></span>
            </div>
            <div className="p-2 rounded-lg flex mr-6 cursor-pointer">
                <span className="mr-0"><img src="/assets/images/icons8-contacts-inactive.svg" width={16}/></span>
            </div>
            <div className="p-2 rounded-lg flex mr-0 cursor-pointer">
                <span className="mr-0"><img src="/assets/images/icons8-settings-inactive.svg" width={16}/></span>
            </div>
        </div>
    </React.Fragment>
}

export default Menu