import React from 'react';
import { Form } from 'react-bootstrap';

function Input(props) {
    let {
        className,
        // label
        label,
        labelClassName,
        labelRequired,
        // icon
        iconStart,
        iconEnd,
        // control
        field = {},
        fieldState,
        ...inputProps
    } = props;

    // Form group className
    const groupClassName = 'form-group' + (className ? ' ' + className : '');

    // Label required
    labelRequired = labelRequired ? (
        <span className="text-danger"> * </span>
    ) : null;

    return (
        <Form.Group className={groupClassName}>
            {label && (
                <Form.Label as="div" className={labelClassName}>
                    {label}
                    {labelRequired}
                </Form.Label>
            )}

            <div className="control-group">
                {iconStart && <span className="icon-start">{iconStart}</span>}
                <Form.Control
                    {...field}
                    {...inputProps}
                    isInvalid={fieldState?.invalid}
                />
                {iconEnd && <span className="icon-end">{iconEnd}</span>}


            </div>

            {fieldState?.error && (
                <Form.Control.Feedback type="invalid">
                    {fieldState?.error?.message}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};
export default Input;
