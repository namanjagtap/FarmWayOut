import React from "react"
import aboutUsImg from "../Images/pexels-alejandro-barrón-96715.jpg"

export default function aboutUs(){
    return(
        <div className="aboutus" id="aboutus">
            <h2 className="aboutus--header">About Us</h2>
            <p><b style={ {fontSize: "28px"}}>"Agriculture is the backbone of the Indian Economy"<br/>- said Mahatma Gandhi six decades ago.</b><br/><br/></p>
            <div className="aboutus--main">
                <p className="aboutus--text">
                    Even today, the situation is still the same, with almost the entire economy being sustained by agriculture, which is the mainstay of the villages. It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population. Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.<br/><br/>

                    Indian farmers are second to none in production and productivity despite of the fact that millions are marginal and small farmers. They adopt improved agriculture technology as efficiently as farmers in developed countries. It is felt that with provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.    
                </p>
                <img src={aboutUsImg} alt="about us" style={ {width: "300px", height: "inherit", borderRadius: "800px", margin: "15px" } }/>
            </div>
            
            <p className="aboutus--extended"> It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. Farmers Portal is an endeavour in this direction to create one stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale/storage of an Indian farmer. With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.</p>
        </div>
    )
}