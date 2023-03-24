import { Form } from 'react-bootstrap';
import { useController } from 'react-hook-form';
import '../../styles/formField.scss'

export function CheckBoxField(props) {
  const {
    control,
    size,
    name,
    value,
    className,
    groupLabel,
    groupLabelClassName,
    label,
    labelClassName,
    ...inputProps
  } = props;
  const {
    field: { value: thisValue, onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({ name, control });

  return (
    <Form.Group className="form-group">
      {groupLabel && (<Form.Label>{groupLabel}</Form.Label>)}
      <Form.Check
        name={name}
        label={label}
        value={value}
        checked={value !== undefined ? value === thisValue : thisValue === true}
        className={`${className || ''}${invalid ? ' is-invalid' : ''
          }`}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
