import DestinationData from "./DestinationData";
import{useEffect}from "react";
import "./DestinationStyles.css";


import Aos from "aos"
import 'aos/dist/aos.css'

const Destination=()=>{
    useEffect(()=>(
        Aos.init({duration:2000})
    ),[])
    return(
        <div className="destination" >
            <h1 data-aos="fade-up" >Popular Destination </h1>
            <p data-aos="fade-up"  className="para">Tours gives you the opportunity to explore</p>
            <DestinationData
            className="first-des"
            heading="Tal Volcano,Batangas"
            text="Taal Volcano and Lake are entirely located in the province of Batangas. The northern half of Volcano Island falls under the jurisdiction of the lake shore town of Talisay, and the southern half in San Nicolas. The other communities that encircle Taal Lake include the cities of Tanauan and Lipa, and the municipalities of Talisay, Laurel, Agoncillo, Santa Teplate"
            img1="https://cdn.pixabay.com/photo/2018/05/16/02/54/taal-volcano-3404785_960_720.jpg"
            img2="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
            
            />
            <DestinationData
            className="first-des-reverse"
            heading="Visakhapatnam"
            text="Visakhapatnam is a port city and industrial center in the Indian state of Andhra Pradesh, on the Bay of Bengal. It's known for its many beaches, including Ramakrishna Beach, home to a preserved submarine at the Kursura Submarine Museum. Nearby are the elaborate Kali Temple and the Visakha Museum, an old Dutch bungalow housing local maritime and historical exhibits."
            img1="https://paramountclientweb.s3.ap-south-1.amazonaws.com/indian-holiday-trip/visualstories/Img_3843_202212041041_Rushikonda_Beach_28_July.jpg?time=1659628086"
            img2="https://cdn.pixabay.com/photo/2022/11/24/13/10/nature-7614331_960_720.jpg"
            
            />
        </div>
    );
};
export default Destination;