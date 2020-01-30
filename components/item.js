function Item({ image, price }) {
    return <React.Fragment>
        <div className="p-5 bg-white rounded-lg cursor-pointer">
            <div className="font-semibold text-gray-700 mb-1 w-48">With jamon and sweet pepper</div>
            <div className="flex justify-between">
                <div className="flex-initial">
                    <div className="text-gray-400 text-sm mb-16">100g</div>
                    <div className="text-orange-500 font-semibold text-2xl">{price} &euro;</div>
                </div>
                <div className="flex-1">
                    <img className="ml-auto" src={image} width={128}/>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Item;