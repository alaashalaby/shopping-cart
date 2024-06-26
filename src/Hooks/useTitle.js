import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title=`${title} Page`
    })
}
export default useTitle;