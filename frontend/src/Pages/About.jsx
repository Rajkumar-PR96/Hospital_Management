import React from 'react'
import { assets } from '../assets/assets'

export const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aut, repellendus molestias nesciunt maiores atque, officiis, placeat maxime neque provident consequuntur aliquam laboriosam consequatur nemo odio quas enim explicabo! Eveniet provident veritatis animi, aliquam blanditiis temporibus voluptas consequatur ipsa est, ducimus id velit, et dignissimos sequi harum ipsum similique qui.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nam a delectus repudiandae, enim eum cum pariatur voluptates tenetur quas soluta doloremque recusandae impedit et! Maiores error cum, explicabo alias dolor quae saepe quam ut maxime optio unde magnam dolorum, exercitationem iste a excepturi voluptatum ex officia libero numquam eligendi!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores debitis earum repellendus tempora laborum est tenetur aspernatur, blanditiis qui provident cupiditate quibusdam possimus suscipit ipsam dolorem sequi ab nostrum veniam in distinctio doloremque atque aliquid! Dicta, eum explicabo ipsum omnis tempore labore quis? Quam minus, excepturi eaque eos cumque distinctio.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalizatin:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}
