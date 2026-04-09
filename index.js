//Write your code here

let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
}

function logAttendeeName(attendee){
  let name = attendee.name
  return name 
}
logAttendeeName(attendee)

function logTicketPrice(attendee){
  let price = attendee.ticketPrice
  return price
}
logTicketPrice(attendee)

function updateTicketType(attendee, newTicketType){
  let newTicket = newTicketType
  attendee.ticketType = newTicket
  return newTicket
}
updateTicketType(attendee, "Regular")

function updateTicketPrice(attendee, newTicketPrice){
  let newTicket = newTicketPrice
  attendee.ticketPrice = newTicket
  return newTicket
}
updateTicketPrice(attendee, 100)

function removeEventProperty(attendee){
  delete attendee.event
}
removeEventProperty(attendee)

function addCheckedInProperty(attendee){
  attendee.checkedIn = "True"
}
addCheckedInProperty(attendee)

console.log(attendee)

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