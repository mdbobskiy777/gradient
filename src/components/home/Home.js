import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {delete_gradient} from "../../redux/gradient-reducer";
import {useHistory} from "react-router";
import GradientItem from "../gradientItem";
import Style from "./home.module.scss"

const Home = () => {
    const gradientsListSelector = useSelector(state => state.gradientReducer.gradientsList)
    const dispatch = useDispatch()
    const history = useHistory();

    return (
        <div className={Style.homeContainer}>
            <div>Home</div>
            <ul>
                {gradientsListSelector.map((e, i) => (i != null) ? <li className={Style.listItem}>
                    <div className={Style.itemContainer}>
                        <GradientItem item={e}/>
                        <div className={Style.btnsContainer}>
                            <div>
                                <button className={Style.deleteBtn} onClick={() => {
                                    dispatch(delete_gradient(i))
                                }}>X
                                </button>
                            </div>
                            <div>
                                <div onClick={() => {
                                    history.push(`/edit/${i}`)
                                }}>
                                    <button className={Style.btn}>Edit</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </li> : null)}
            </ul>
            <div>
                <button  className={Style.btn} onClick={() => {
                    history.push("/new")
                }}>New
                </button>
            </div>
        </div>
    )
}
export default Home