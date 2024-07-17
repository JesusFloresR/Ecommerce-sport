export function DetailCardProduct ({name, type, price, img, description}) {
    return(
        <div className="p-6 hover:cursor-pointer hover:bg-gray-200/80" style={{display: "grid", gridTemplateColumns: "200px 1fr" }}>
            <div style={{ backgroundImage: `url(${img})`, height: '200px', backgroundSize: 'contain', backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
            <div style={{marginLeft: "20px"}}>
                <span className="text-rose-800 font-bold" >{ type }</span>
                <h5 className="font-bold my-4">{ name }</h5>
                <p>{ description }</p>
                <div className="h-0.5 bg-gray-200 my-4"></div>
                <span className="font-bold">S/ { price }</span>
            </div>
        </div>
    )
}