import { CardComponent } from "../../components/Card"
import { useAppContext } from "../../store/AppContext";

export const CardContainer = (props) => {
    const { state, dispatch } = useAppContext();
    const handleClick = () => {
        dispatch({
            type: 'open modal save pin',
        })
    }

    return (
        <CardComponent {...props} onClick={handleClick}/>
    )
}