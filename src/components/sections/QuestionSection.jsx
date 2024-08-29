import React, { useEffect, useState } from 'react';
import { QuestionTimeTag, QuestionTypeTag } from '../tags';
import { CurrentQuestion, CurrentAnswer, NextQuestion, NextAnswer } from '../../assets';
import CopilotSection from './CopilotSection';

function QuestionSection() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        company: {
          id: 1,
          name: 'Tech Solutions Inc.',
          description: 'A company specializing in innovative tech solutions.',
        },
        questions: [
          {
            recipient: 'John Doe',
            question: 'What are the main challenges you face with your current lead management process?',
            answer: 'Our biggest challenge is tracking leads effectively.',
            time: 13,
            type: 'critical',
          },
          {
            recipient: 'Jane Smith',
            question: 'How satisfied are you with your current customer relationship management system?',
            answer: "It's functional but lacks some advanced features.",
            time: 8,
            type: 'critical',
          },
          {
            recipient: 'Alice Johnson',
            question: 'What specific features are you looking for in a new CRM system?',
            answer: 'We need better integration with our existing tools.',
            time: 10,
            type: 'previous discussion',
          },
          {
            recipient: 'Bob Brown',
            question: 'Can you share any pain points you have encountered with your current sales funnel?',
            answer: 'Our current funnel has too many manual steps.',
            time: 15,
            type: 'previous discussion',
          },
          {
            recipient: 'Shivam Maurya',
            question: 'How do you currently track and analyze lead data?',
            answer: 'We use spreadsheets, which can be cumbersome.',
            time: 12,
            type: 'previous discussion',
          },
        ],
      };
      setQuestions(data.questions);
    };

    fetchData();
  }, []);

  return (
    <section className="relative h-full flex flex-col">
      <div className='w-full border-t border-[#EBFFF680]'>
        <div className="bg-[#AAEDD1] h-1 w-[30%]"></div>
      </div>
      <div className="text-right text-white mb-2">3/10</div>
      {/* Wrapper for the ul element to make it scrollable and hide scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <ul>
          {questions?.map((question, index) => (
            <li key={index}>
              <QuestionTypeTag type={question.type} index={index} />
              <div
                className={`p-2 my-2 ${
                  index === 0
                    ? 'border-2 border-[#FFF9D3] rounded-xl text-[#FFF9D3]'
                    : 'border-b border-[#EBFFF680] text-white'
                }`}
              >
                <p className="text-xs mb-2">TO {question.recipient.toUpperCase()}</p>
                <div className="flex gap-2 items-center">
                  {index === 0 ? (
                    <CurrentQuestion width={15} height={15} />
                  ) : (
                    <NextQuestion width={15} height={15} />
                  )}
                  <h3 className="">{question.question}</h3>
                </div>
                <div className="flex gap-2 items-center mb-2">
                  {index === 0 ? (
                    <CurrentAnswer width={15} height={15} />
                  ) : (
                    <NextAnswer width={15} height={15} />
                  )}
                  <h3 className="text-gray-300">{question.answer}</h3>
                </div>
                <QuestionTimeTag time={question.time} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CopilotSection />
    </section>
  );
}

export default QuestionSection;
