import { Form } from 'react-bootstrap';
import { useController } from 'react-hook-form';
import Select from 'react-select';
import { useState } from 'react';

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
        disable,
        sendData,
        onChange: onChangeProp,
        ...selectProps
    } = props;

    const {
        field: { value, onChange, ref },
        fieldState: { error }
    } = useController({ name, control })

    const [selectedOption, setSelectedOption] = useState(options.find(option => option.value === value) || null)

    const handleSelectOptionChange = selectedOption => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption
        onChangeProp
            ? onChangeProp({
                target: { name, value: selectedValue }
            })
            : onChange(selectedValue);
        if (sendData) {
            sendData(selectedOption);
        }
        setSelectedOption(selectedOption)
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
                noOptionsMessage={() => 'No results'}
                onChange={handleSelectOptionChange}
                {...selectProps}
                ref={ref}
                options={options}
                placeholder={placeholder || ''}
                className={`react-select-container${disable ? ' disable' : ''}${error ? ' is-invalid' : ''}`}
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
