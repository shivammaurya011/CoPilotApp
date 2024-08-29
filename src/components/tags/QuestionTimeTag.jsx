import React from 'react'

function QuestionTimeTag({time}) {
  return (
    <div className='flex items-center justify-end text-xs'>
      <p>~{time} mins</p>
    </div>
  )
}

export default QuestionTimeTag
