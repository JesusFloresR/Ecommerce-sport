export function SimpleCardProduct ({name, type, price, img}) {
    return(
        <div className="w-44 hover:cursor-pointer">
            <div className="w-44" style={{ height: '230px' }}>
                <img src={img} alt="" />
            </div>
            <div>
                <span className="text-rose-800 font-semibold" >{ type }</span>
                <h5 className="font-bold">{ name }</h5>
                <span>S/ { price }</span>
            </div>
        </div>
    )
}