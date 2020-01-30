import Item from "./item";

function HotItems() {
    return <React.Fragment>
        <div className="p-1 pl-5 pr-5 flex justify-start">
            <div className="mr-4">
                <Item image="/assets/images/pinchos-1.svg"
                    price={1}/>
            </div>
            <div className="mr-4">
                <Item image="/assets/images/pinchos-2.svg"
                    price={1.8}/>
            </div>
            <div>
                <Item image="/assets/images/pinchos-3.svg"
                    price={1}/>
            </div>
        </div>
    </React.Fragment>
}

export default HotItems;