import React from "react";

const Service = ({ img, title }) => {
  return (
    <section>
      <div class="card shadow-lg">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </section>
  );
};

export default Service;