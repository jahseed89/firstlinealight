import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <h1 className='text-red-500'>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us!</p>
        <form className='flex flex-col'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className='border border-gray-300 p-2' required />
            
            <label htmlFor="email">Email:</label>
            <input type="email"id="email" name="email" className='border border-gray-300 p-2' required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" className='border border-gray-300 p-2' required></textarea>
            
            <button type="submit" className='bg-blue-500 text-white p-2 mt-2'>Send</button>
        </form>
    </div>
  )
}

export default ContactUs
