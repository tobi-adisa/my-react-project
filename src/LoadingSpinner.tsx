
import ClipLoader from "react-spinners/ClipLoader";

type loadingStatus = {
    isLoading: boolean;
}

export default function LoadingSpinner ({isLoading}: loadingStatus) {
    return (
        <div>
            <ClipLoader loading={isLoading}/>
        </div>
        
    )
        
}