const getLocalData = () => {

    return JSON.parse(localStorage.getItem("tasks")) || [];
}

export default getLocalData;