import React from "react"
import S from "./formsControls.module.scss"

const FormControlsCreator = Element => ({input, placeholder, meta}) => {
    const hasError = meta.touched && meta.error;
    return <div className={S.formControl + " " + (hasError ? S.error : " ")}>
        <div>
            <Element  {...input} value = {input.value} placeholder={placeholder}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
export default FormControlsCreator