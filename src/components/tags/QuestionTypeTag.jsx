import React from 'react'
import { CriticalIcon, FlagIcon } from '../../assets'

function QuestionTypeTag({type, index}) {
  return (
    <div className='w-full flex justify-end items-center'>
      <p className={`flex gap-1 text-xs py-1 px-2 border rounded-full ${type == 'critical' ? 'text-red-600 border-red-600' : 'text-white border-white'} ${index === 0 && 'bg-[#FFF9D380]'}`}>
        {type === 'critical' ? <CriticalIcon height={15} width={15}/> : <FlagIcon height={15} width={15}/>}
        <p>{type.toUpperCase()}</p>
      </p>
    </div>
  )
}

export default QuestionTypeTag
