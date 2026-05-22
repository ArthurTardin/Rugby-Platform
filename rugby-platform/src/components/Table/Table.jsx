function Table({
    columns,
    data,
}) {
    return(

        <div className="overflow-x-auto border border-zinc-800 rounded-3x1">

            <table className="w-full">

                <thead className="bg-zinc-900">

                    <tr>

                        {columns.map((column) => (

                            <th
                            key={column}
                            className="text-left p-6">

                                {column}

                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map((row, index) => (

                        <tr
                        key={index}
                        className="border-t border-zinc-800 hover:bg-zinc-900/40 transition">

                            {row.map((cell, cellIndex) => (

                                <td
                                key={cellIndex}
                                className="p-6">
                                    {cell}

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    
    )

}

export default Table