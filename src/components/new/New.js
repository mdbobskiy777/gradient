import React from "react"
import {Field, Form} from "react-final-form";
import FormControlsCreator from "../common/formsControls/FormsControls";
import {useDispatch} from "react-redux";
import {add_gradient} from "../../redux/gradient-reducer";
import {useHistory} from "react-router";
import {isValidHex} from "../../utils/validators/validators";
import Style from "./new.module.scss"

const Input = FormControlsCreator('input')


const New = (props) => {
    debugger
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className={Style.newContainer}>
            <div>New</div>
            <Form onSubmit={(form) => {
                dispatch(add_gradient({firstColor: form.firstColor, secondColor: form.secondColor}))
                form.firstColor = ""
                form.secondColor = ""
                history.push("/")
            }}
                  render={({submitError = props.submitError, handleSubmit, form}) => (
                      <form onSubmit={handleSubmit}>
                          <div className={Style.colorContainer}>
                              <Field validate={isValidHex} name="firstColor" component={Input}
                                     placeholder="firstColor"/>
                          </div>

                          <div>
                              <Field validate={isValidHex} name="secondColor" component={Input}
                                     placeholder="secondColor"/>
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
export default New