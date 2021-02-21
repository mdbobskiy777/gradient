import React from "react"
import {Field, Form} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {change_gradient} from "../../redux/gradient-reducer";
import {useHistory, useParams} from "react-router";
import {isValidHex} from "../../utils/validators/validators";
import FormControlsCreator from "../common/formsControls/FormsControls";
import Style from "./edit.module.scss"

const Input = FormControlsCreator('input')

const Edit = (props) => {
    const gradientId = useParams()
    const gradientSelector = useSelector((state) => state.gradientReducer.gradientsList[gradientId.id])
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className={Style.editContainer}>
            <div>Edit</div>
            <Form onSubmit={(form) => {
                dispatch(change_gradient({firstColor: form.firstColor, secondColor: form.secondColor}, 0))
                history.push("/")
            }}
                  render={({submitError = props.submitError, handleSubmit, form}) => (
                      <form onSubmit={handleSubmit}>
                          <div className={Style.colorContainer}>
                              <Field validate={isValidHex} initialValue={gradientSelector.firstColor} name="firstColor"
                                     component={Input} placeholder="firstColor"/>
                          </div>
                          <div className={Style.colorContainer}>
                              <Field validate={isValidHex} initialValue={gradientSelector.secondColor}
                                     name="secondColor" component={Input} placeholder="secondColor"/>
                          </div>
                          <div>
                              <button className={Style.btn} type="Submit">Add gradient</button>
                          </div>
                      </form>
                  )}
            >
            </Form>
        </div>
    )
}
export default Edit