import { useContext } from "react";
import { GlobalContext } from "../utils/GlobalState";

function useGlobalState() {
    return useContext(GlobalContext);
}

export default useGlobalState;