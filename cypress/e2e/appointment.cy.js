import LoginPage from "../pages/LoginPage";
import AppointmentPage from "../pages/AppointmentPage";


describe('Book an Appointment', () => {

  const loginPage = new LoginPage();
  const appointmentPage =new AppointmentPage();

  beforeEach(()=>{

    loginPage.userLogin("John Doe","ThisIsNotAPassword");

  })

  it('Appointment Successfully Booked', () => {

     appointmentPage.createAppointment();
     appointmentPage.validAssertion();
  })
})