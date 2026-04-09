//Write your code here

let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
}

function logAttendeeName(attendee){
  let name = attendee
  return name 
}

function logTicketPrice(attendee){
  let price = attendee
  return price
}

function updateTicketType(attendee){
  let newTicket = "Regular"
  attendee.ticketType = newTicket
  return newTicket
}

function updateTicketPrice(attendee){
  let newTicket = 100.00
  attendee.ticketPrice = newTicket
  return newTicket
}

function removeEventProperty(attendee){
  delete attendee.event
}

function addCheckedInProperty(attendee){
  attendee.checkedIn = "True"
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};