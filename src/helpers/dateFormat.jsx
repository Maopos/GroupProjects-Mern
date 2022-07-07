const dateFormat = (date) => {
    const newDate = new Date(date.split('T')[0].split('-'));
    const options = {
      weekday: 'long',
      year: "numeric",
      month: "long",
      day: "2-digit",
      
    };
    return newDate.toLocaleString("es-ES", options);
  };
  
  export default dateFormat;