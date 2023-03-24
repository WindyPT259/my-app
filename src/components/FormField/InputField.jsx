import '../../styles/formField.scss'
import { useController } from 'react-hook-form';
import Input from '../Input/Input';

export function InputField(props) {
    let { control, name, ...inputProps } = props;

    const { field, fieldState } = useController({ name, control });

    // Return
    return <Input field={field} fieldState={fieldState} {...inputProps} />;
};
