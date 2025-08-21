import type React from 'react';

const NewsletterSection: React.FC =() =>{
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Newsletter submitted");
    };
    return(
        <section id='newsletter' className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto bg-gray-100 rounded-xl p-8 md:p-12'>
                    <div className='text-center mb-8'>
                        <h2 className='heading-font text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                            Stay Connected
                        </h2>
                        <p className='text-gray-600'>
                            Subscribe to our newsletter for weekly updates , events reminders and spiritual encouragement.
                            </p>
                        
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                        <input
                            type='email'
                            placeholder='your email address'
                            required
                            className='flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                            />
                        <button
                            type='submit'
                            className='bg-blue-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300'>
                        Subscribe
                        </button> 
                        
                    </form>
                    <p className='text-center text-sm text-gray-500 mt-4'>
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                </div>
            </div>
        </section>
    )
}
export default NewsletterSection;