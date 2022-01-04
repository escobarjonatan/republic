const Location = () => (
    <>
        <section id='contact' className="bg-white rounded-lg shadow mt-11 p-8" >
            <h2 className='font-bold sm:text-3xl text-xl'>Contact Us</h2>
            <div className="sm:flex text-center align-center justify-center mt-11">
                <div className="sm:w-1/2 w-full self-center">
                    <div className='mb-3'>
                        <address>
                            <span className='font-bold'>Address: </span>
                            <a className="underline" href='https://www.google.com/maps/uv?pb=!1s0x864ea13e1e5e6131%3A0x623c7b38c2684144!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN6-Jagv-cOGoke-ipZ_i3bMcCiGucrMtBGJMSk%3Dw213-h160-k-no!5srepublic%20barbershop%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipN6-Jagv-cOGoke-ipZ_i3bMcCiGucrMtBGJMSk&hl=en&sa=X&ved=2ahUKEwisssHaqID0AhVwnGoFHUtdDdQQoip6BAg_EAM'><span>10918 Garland Rd suite 100, Dallas, TX 75218</span></a>
                        </address>
                    </div>
                    <div className='mb-3'>
                        <span className='font-bold'>Health & safety: </span>
                        <span>Staff required to disinfect surfaces between visits</span>
                    </div>
                    <div className='mb-3'>
                        <address>
                            <span className='font-bold'>Phone: </span>
                            <a className="underline" href="tel:214-659-3358">214-659-3358</a>
                        </address>
                    </div>
                    <div>
                        <p className='font-bold'>Hours:</p>
                        <p className='mb-0.5'>Sunday: 10 AM – 3 PM</p>
                        <p className='mb-0.5'>Monday: 10 AM – 7 PM</p>
                        <p className='mb-0.5'>Tuesday: 10 AM – 7 PM</p>
                        <p className='mb-0.5'>Wednesday: 10 AM – 7 PM</p>
                        <p className='mb-0.5'>Friday: 10 AM – 7 PM</p>
                        <p className='mb-0.5'>Saturday: 10 AM – 7 PM</p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full h-96 sm:mt-0 mt-11">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.990229001815!2d-96.68936884880765!3d32.84551038085794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea13e1e5e6131%3A0x623c7b38c2684144!2sRepublic%20Barbershop!5e0!3m2!1sen!2sus!4v1636080124766!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, }} aria-hidden="false" tabindex="0" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    </>
);

export default Location;