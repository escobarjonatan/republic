import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    let day = new Date().getDay();
    document.getElementById("day-" + day).classList.add("font-bold");
  }, []);

  return (
    <>
      <section id="contact" className="bg-white rounded-lg shadow mt-11 p-8">
        <h2 className="font-bold sm:text-3xl text-xl">Contact Us</h2>
        <div className="sm:flex text-center align-center justify-center mt-11">
          <div className="sm:w-1/2 w-full self-center">
            <div className="mb-3">
              <address>
                <span className="font-bold">Address: </span>
                <a
                  className="underline"
                  href="https://www.google.com/maps/dir//republic+barbershop/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x864ea13e1e5e6131:0x623c7b38c2684144?sa=X&ved=2ahUKEwiV48my0aj3AhWKwZQKHRJsBksQ9Rd6BAhLEAQ"
                >
                  <span>10918 Garland Rd suite 100, Dallas, TX 75218</span>
                </a>
              </address>
            </div>
            <div className="mb-3">
              <span className="font-bold">Health & safety: </span>
              <span>Staff required to disinfect surfaces between visits</span>
            </div>
            <div className="mb-3">
              <address>
                <span className="font-bold">Phone: </span>
                <a className="underline" href="tel:214-659-3358">
                  214-659-3358
                </a>
              </address>
            </div>
            <div>
              <p className="font-bold">Hours:</p>
              <p id="day-0" className="mb-0.5">
                Sunday: 10 AM – 3 PM
              </p>
              <p id="day-1" className="mb-0.5">
                Monday: 10 AM – 7 PM
              </p>
              <p id="day-2" className="mb-0.5">
                Tuesday: 10 AM – 7 PM
              </p>
              <p id="day-3" className="mb-0.5">
                Wednesday: 10 AM – 7 PM
              </p>
              <p id="day-4" className="mb-0.5">
                Thursday: 10 AM – 7 PM
              </p>
              <p id="day-5" className="mb-0.5">
                Friday: 10 AM – 7 PM
              </p>
              <p id="day-6" className="mb-0.5">
                Saturday: 10 AM – 7 PM
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full h-96 sm:mt-0 mt-11">
            <iframe
              aria-hidden="false"
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.990229001815!2d-96.68936884880765!3d32.84551038085794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea13e1e5e6131%3A0x623c7b38c2684144!2sRepublic%20Barbershop!5e0!3m2!1sen!2sus!4v1636080124766!5m2!1sen!2sus"
              style={{ border: 0 }}
              tabIndex="0"
              title="Republic Barbershop location using Google Maps"
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Location;
