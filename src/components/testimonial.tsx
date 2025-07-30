import React from 'react';
import TestimonialCard from './testimonialCard';

type Testimonial = {
    name: string ;
    since: string;
    quote:string;
    imgSrc: string;
    stars?: number;
};
const testimonials: Testimonial[] = [
    {
        name: 'jacinta martinez',
        since: '2028',
        quote: 'Divine Light Ministries has been such a blessing...',
        imgSrc: './woman.jpg',
    },
    {
        name: 'Grace Wanjiku',
        since: '2020',
        quote: 'I found peace and purpose here. The worship is uplifting.',
        imgSrc: './crystal.jpg',
    },
    {
        name: 'Joseph Munga',
        since: "2024",
        quote: 'I found peace and purpose here. The worship is uplifting.',
        imgSrc: './man.jpg'
    }
];

const Testimonials: React.FC = () => (
    <section className='py-16 bg-blue-600 text-white'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
                <h2 className='heading-font text-3xl md:text-4xl font-bold mb-4'>
                    What People Are Saying
                </h2>
                <p className='max-w-2xl mx-auto'>Hear from members of ou church family</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {testimonials.map((t, i)=>(
                    <TestimonialCard key={i} {...t} />
                ))}
            </div>
        </div>
    </section>
);
export default Testimonials;
