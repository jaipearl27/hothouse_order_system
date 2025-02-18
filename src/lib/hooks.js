import useSelector from "react-redux/useSelector";
import useDispatch from "react-redux/useDispatch";
import useStore from "react-redux/useStore"

export const useAppDispatch = () => useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = () => useStore.withTypes()

