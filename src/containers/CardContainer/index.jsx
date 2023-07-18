import { CardComponent } from "../../components/Card"
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/actions";

export const CardContainer = (props) => {
    const { state, dispatch } = useAppContext();

    const handleClick = (pinId) => {
        dispatch(openModalSavePinAction(pinId))
    }

    return (
        <CardComponent {...props} onClick={handleClick}/>
    )
}