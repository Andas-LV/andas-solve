import { LoaderCircle } from "lucide-react";
import "./Loading.css";

const Loading = () => {
    return (
        <div className={"container"}>
            <div className={"spinner"}>
                <LoaderCircle size={40} color="white" />
            </div>
        </div>
    );
};

export default Loading;
