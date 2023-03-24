import { Form } from 'react-bootstrap';
import { useController } from 'react-hook-form';
import Select from 'react-select';

import { convertToTextForSearch } from '../../utils';
import '../../styles/formField.scss'

export function SelectField(props) {
    const {
        control,
        name,
        label,
        labelClassName,
        placeholder,
        options,
        onChange: onChangeProp,
        ...selectProps
    } = props;

    const {
        field: { value, onChange, ref },
        fieldState: { error }
    } = useController({ name, control })

    const selectedOption = options.find(option => option.value === value) || null;

    const handleSelectOptionChange = selectedOption => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;//check selectoption
        onChangeProp
            ? onChangeProp({
                target: { name, value: selectedValue }
            })
            : onChange(selectedValue);
    };

    //Search find value in selectoptions
    const filterOption = (select, input) => {
        if (input)
            return convertToTextForSearch(select?.label || '').includes(
                convertToTextForSearch(input)
            );
        return true;
    };

    return (
        <Form.Group className="form-group">
            {label && (
                <Form.Label as="div" className={labelClassName}>
                    {label}
                </Form.Label>
            )}
            <Select
                name={name}
                value={selectedOption}
                filterOption={filterOption}
                isSearchable={true}
                noOptionsMessage={() => 'Không có'}
                onChange={handleSelectOptionChange}
                {...selectProps}
                ref={ref}
                options={options}
                placeholder={placeholder || ''}
                className={`react-select-container ${error ? ' is-invalid' : ''}`}
                classNamePrefix="react-select"
            />
            {error && (
                <Form.Control.Feedback type="invalid">
                    {error?.message}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
}
