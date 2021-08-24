// function to get patient whith id
/**
 * get patient with id
 * @param {Number} id id of patient to search
 * @param {Array} patients all patients
 * @return patient to display
 */
export const getPatientById = (id, patients) => {
  const patientToDisplay = patients.find((item) => item.id === parseInt(id, 10));
  return patientToDisplay;
};

// function to search patient by name
/**
 * get patient with id
 * @param {string} search search of patient by name
 * @param {Array} patients all patients
 * @return patient to display
 */

export const searchPatientByName = (search, patients) => {
  const patientToDisplay = patients.filter((item) => {
    // transform search result in lower case
    const searchLowered = search.toLowerCase();
    // transforme patient's lastname in lower case
    const patientNameLowered = (`${item.lastname} ${item.firstname}`).toLowerCase();
    // return result if there is a connection between patient name and search
    return patientNameLowered.includes(searchLowered);
  });
  return patientToDisplay;
};

// function to select appointment of current day
/**
 * get patient with id
 * @param {Array} events all patients
 * @return appointment of current day
 */

export const searchAppointmentOfTheDay = (events) => {
  // current Date JJ/MM/AAAA
  const currentDay = `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`;
  // filtered events by datetimeStart
  const appointmentOfTheDay = events.filter((appointment) => {
    const datetimeStart = new Date (appointment.datetimeStart);
    // event datetimeStart JJ/MM/AAA
    const eventDate = `${datetimeStart.getDate()} ${datetimeStart.getMonth()} ${datetimeStart.getFullYear()}`;
    return eventDate === currentDay;
  });

  // build a new table from appointment of the day, but sorted by hour to have a display in order
  const appointmentOfTheDayByHour = appointmentOfTheDay.sort(function compare(a, b) {
    if (a.datetimeStart < b.datetimeStart) {
      return -1;
    }
    if(a.datetimeStart > b.datetimeStart) {
      return 1;
    }
    return 0;
  });

  return appointmentOfTheDayByHour;
};
