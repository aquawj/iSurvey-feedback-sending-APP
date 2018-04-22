// render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <input className="survey-input" {...input} />
            <div className="red-text survey-info">
                {touched && error}
            </div>
        </div>
    );
};
