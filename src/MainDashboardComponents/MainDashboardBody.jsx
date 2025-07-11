import "./MainDashboardBody.css";
import DashboardImg from "../assets/DashboardImg.png";
import PEOSCard from "./PEOSCardComponent";
import RegistrationCard from "./RegistrationCard";
import OFWCardComponent from "./OFWCardComponent";
import BMCard from "./BMCard";
import DHPCard from "./DHPCard";
import ORAACard from "./ORAACard";
import HelpdeskCard from "./HelpdeskCard";

export default function MainDashboardBody() {
    return (
        <div className="main-dashboard-body">
            <div className="main-dashboard-body__image-container">

                <img
                    src={DashboardImg}
                    alt="Dashboard"
                    className="main-dashboard-body__image"
                />

                <div className="WhiteOverlay"></div>

                <div className="overlay-text">
                    <h1>Online Services</h1>
                    <p>For Migrant Workers</p>
                </div>

                <div className="main-dashboard-body__CardContainer">
                    <PEOSCard
                        onClick={() => console.log("PEOS Card clicked")} />
                    <RegistrationCard
                        onClick={() => console.log("PEOS Card clicked")} />
                    <OFWCardComponent
                        onClick={() => console.log("OFW Card clicked")} />
                </div>

            </div>
            <div className="main-dashboard-body__CardContainer2">
                <BMCard
                    onClick={() => console.log("PEOS Card clicked")} />
                <DHPCard
                    onClick={() => console.log("PEOS Card clicked")} />
                <ORAACard
                    onClick={() => console.log("OFW Card clicked")} />
            </div>

            <div className="main-dashboard-body__CardContainer3">
                <HelpdeskCard onClick={() => console.log("Helpdesk clicked")} />
            </div>




        </div>
    );
}
