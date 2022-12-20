import React, { useState } from 'react'
import cl from './FormDZ.module.css'

function FormDZ() {
    const [check,setCheck]=useState(false)

  return (
    <div>
        <input className={cl.inp} disabled={check} type="text" name="" id=""  placeholder='name'/>
        <input disabled={check} type="text" name="" id="" />
        <label htmlFor="Check">
         Согласен(-сна) с условиями
            <input checked={check}  onChange={()=>setCheck(!check)} type="checkbox" name="" id="Check" />
        </label>
        <button disabled={!check}>Send</button>
    </div>
  )
}

export default FormDZ