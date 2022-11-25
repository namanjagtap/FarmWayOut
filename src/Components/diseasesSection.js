import React from "react"

export default function diseasesSection(props){
    console.log(props)
    return(
        <div>
            <h1>{props.item.Species_Name}</h1>
           {/* <table className="table" >
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{props.item.item.Species_Name}</td>
                                {/* <td>{props.item.Disease_Name}</td>
                                <td>{props.item.DiseaseSymptoms}</td> */}
                            {/* </tr>
                        ))
                    </tbody>
                </table>  */}
        </div>
    )
}