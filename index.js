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
console.log(logAttendeeName(attendee.name))



function logTicketPrice(attendee){
  let price = attendee.ticketPrice
  return price
}
console.log(logAttendeeName(attendee.ticketPrice))



function updateTicketType(attendee){
  attendee.ticketType = ["Regular"]
}
console.log(updateTicketType)



function updateTicketPrice(attendee){
  attendee.ticketPrice = [100]
}
console.log(updateTicketPrice)



function removeEventProperty(attendee){
  delete attendee.event
}



function addCheckedInProperty(attendee){
  attendee.checkedIn = "True"
}
console.log(addCheckedInProperty(attendee))


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