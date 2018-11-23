import classNames from 'classnames';
import React from 'react';

const Alert = (props) => {
    const { type, children, dismissible } = props;
    const prefix = 'alert';
    return (
        <div className={classNames(
            prefix,
            type && `${prefix}-${type}`,
            dismissible && `${prefix}-dismissible`,
        )} style={{ marginTop: '15px' }}>
            {children}
        </div>
    )
};
export default Alert;
