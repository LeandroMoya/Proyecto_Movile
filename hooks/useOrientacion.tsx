import { useWindowDimensions } from "react-native";


export function useOrientacion() {
    const {width,height} = useWindowDimensions()
    const esOrizontal =  height<width
    return(
       esOrizontal
    )
}