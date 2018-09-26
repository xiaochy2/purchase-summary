import React from 'react';
import classnames from 'classnames'

const Line = ({text, amount, isSaving, isBold}) => (
    <div className="line">
        <span className={classnames("lineText", isBold && "text-bold",isSaving && "text-underline")}>{text}
            {isSaving?<p className = "toolTips">Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>:""}
        </span>
        <strong className={classnames("lineAmount", isSaving && "textColor-red")}>{isSaving?'-$'+amount:'$'+amount}</strong> 
    </div>
)

export default Line;