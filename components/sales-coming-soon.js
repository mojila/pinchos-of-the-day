function SalesComingSoon() {
    return <React.Fragment>
        <div className="p-2 h-full rounded-lg bg-orange-400">
            <div className="pt-2 p-2 pb-0 text-white w-32">
                <span className="font-semibold">Coming </span> 
                <span className="font-thin">Soon</span>    
            </div>
            <div className="p-2 text-white font-thin text-sm w-32">Breaded Octopus with Sauce</div>
            <div className="p-2 bg-white rounded-lg flex">
                <div className="flex-1">
                    <img className="mx-auto" src="/assets/images/pinchos-4.svg" width={64}/>
                </div>
                <div className="text-center text-orange-400 pt-2 cursor-pointer text-4xl">
                    &#10132;
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default SalesComingSoon