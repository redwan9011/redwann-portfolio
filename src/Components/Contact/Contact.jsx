import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_a4fphbn', 'template_zyqzj0l', form.current, 'sP-drWS0gANlREOkb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="mb-14 max-w-6xl mx-auto" >
            <h1 className='text-center font-bold font-serif text-4xl'>Contact Me</h1>
            <p className='text-center text-slate-600 '>Feel free to reach out to me for any questions or opportunities!</p>
            <form ref={form} onSubmit={sendEmail} className='form-control my-8'>
   <div className='grid grid-cols-2 gap-10 mb-3'>
   <div className='w-full'>
      <label>Name</label>
      <input type="text" placeholder='your name' className='input input-bordered w-full' name="user_name" />
      </div>
      <div>
      <label>Email</label>
      <input type="email" placeholder='your email' className='input input-bordered w-full' name="user_email" />
      </div>
   </div>
      <label>Message</label>
      <textarea name="message" className='input input-bordered w-full h-24' placeholder='type yout message' />
      <input type="submit" value="Send" className='mt-3 btn btn-outline text-xl' />
    </form>
        </div>
    );
};

export default Contact;