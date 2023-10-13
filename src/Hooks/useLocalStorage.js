const setLocalStorage = (tasks) => {

    localStorage.setItem("tasks", JSON.stringify(tasks))
}
export default setLocalStorage;