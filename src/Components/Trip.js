import TripData from "./TripData";
import{useEffect}from "react";
import "./TripStyles.css";
import Aos from "aos"
import 'aos/dist/aos.css'
function Trip(){
    useEffect(()=>(
        Aos.init({duration:2000})
    ),[])
    return(
        <div className="trip1">
            <div className="trip">
            <h2 data-aos="fade-up">Recent Trips</h2>
            <p data-aos="fade-up" className="para1">You can Discover Unique destination using Google Map</p>
            <div className="tripcard">
                <TripData
                image="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg"
                heading="Trip In Paris"
                text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture ."
                
                />
                <TripData
                image="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518_960_720.jpg"
                heading="Trip In Mayalsia"
                text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic."
                
                />
                <TripData
                image="https://cdn.pixabay.com/photo/2019/11/19/07/50/bridge-4636745_960_720.jpg"
                heading="Trip In Switzerland"
                text="Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails."
                
                />
                
            </div>
        </div>
        </div>
        

    );
}
export default Trip;