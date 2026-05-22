function DashboardHeater({
    title,
    subtitle,
}){
    return(
        <div className="mb-10">

            <p className="text-green-400 font-bold uppercase tracking-widest mb-2">
                {subtitle}
            </p>

            <h1 className="text-5x1 font-black">
                {title}
            </h1>

        </div>
    )
}

export default DashboardHeater