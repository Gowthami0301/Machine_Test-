import { Form, Input } from "antd"
import { FormInputProps } from "../interface/FormInputProps"





const FormInput: React.FC<FormInputProps> = ({name,label,type ='text', placeholder}) =>{
    return(
        <Form.Item name={name} label={label} >
            <Input type={type} placeholder={placeholder} />
        </Form.Item>
    )
}
export default FormInput