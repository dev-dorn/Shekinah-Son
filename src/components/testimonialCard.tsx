import React from 'react';
import StarRating  from './starrating';

type TestimonialCardProps ={
    name: string;
    since: string;
    quote: string;
    imgSrc: string;
    stars?: number;

};
const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    since,
    quote,
    imgSrc,
    stars = 5,
})=> (
    <div className='rounded-lg p-6 bg-blue-500 text-white shadow-lg'>
        <div className='flex items-center mb-4'>
            <img src={imgSrc} alt={`testimonial ${name}`} className="w-12 h-12 rounded-full mr-4 object-cover"/>
            <div>
                <h4 className='font-bold'>{name}</h4>
                <p className='text-blue-200 text-sm'>Member since {since}</p>

            </div>
        </div>
        <p className='italic mb-2'>"{quote}"</p>
        <StarRating count={stars}/>
    </div>
)
export default TestimonialCard;