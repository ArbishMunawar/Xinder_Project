import React from 'react'
import {CN} from '../../../../utils/index'


const classNames={
h1:'text-4xl ',
h2:'text-3xl ',
h3:'text-2xl ',
h4:'text-xl ',
h5:'text-lg ',
h6:'text-base ',
p:'text-base font-normal',
span :'text-[0.8rem] font-normal',
};

const Typography=({children,className, variant,before,after,...props})=>{
    const Element = variant ?? "span";
    const baseClass = classNames[Element];
    const beforeClass = before ? CN(classNames["before"], before) : "";
    const afterClass = after ? CN(classNames["after"], after) : "";
    return (

        <Element {...props} className={CN(baseClass, className, beforeClass, afterClass)}>
        {children}
      </Element>
    )
}


export default Typography