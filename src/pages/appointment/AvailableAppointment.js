import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState("");

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="container mx-auto">
      <h1 className="text-secondary text-2xl text-center my-5 py-5">
        Available Appointment on {format(date, "PP")}
      </h1>

      {/* APPOINTMENT CARD  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          />
        ))}
      </div>
      <div>
        <BookingModal date={date} treatment={treatment} />
      </div>
    </section>
  );
};

export default AvailableAppointment;