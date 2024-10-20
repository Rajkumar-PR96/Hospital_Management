import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-14 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Facilis illum voluptatibus Labore adipisci, sequi harum accusamus obcaecati expedita repudiandae nulla molestias earum! Omnis, consectetur iusto voluptatum consequuntur accusamus cumque natus quod hic repudiandae tempora fuga! Autem reprehenderit quo veritatis earum perferendis velit corrupti quisquam id? Officiis itaque nihil et?</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 6379342996</li>
                    <li>rajkumar96cse@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Hospital-Management -All Right Reserved.</p>
        </div>
    </div>
  )
}
