// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const currentDay = new Date().getDay(); //obtenemos el día de la semana, empezando por 0 (domingo) y terminando por 6 (sábado)

  const getHours = (day) => {
    if (day >= 1 && day <= 5) { //de lunes a viernes
      return "Open from 10 a.m. to 4 p.m."; //abierto de 10 am a 4 pm
    } else if (day === 0 || day === 6) { //fines de semana
      return "Open from 9 a.m. to 8 p.m."; //de 9 am a 8 pm
    }
  };

  return ( //devolvemos al texto de la función getHours
    <div>
      <h2>Today's Hours</h2>
      <p>{getHours(currentDay)}</p>
    </div>
  );
};

export default Hours;