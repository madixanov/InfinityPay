import Welcome from "../../components/02-Welcome/Welcome";
import About from "../../components/03-About/About";
import Payments from "../../components/04-Payments/Payments";
import Advantages from "../../components/05-Advantages/Advantages";
import Countries from "../../components/06-Countries/Countries";
import Companies from "../../components/07-Companies/Companies";
import Contacts from "../../components/08-Contacts/Contacts";

export default function Main() {
  return (
    <main>
      <Welcome />
      <About  />
      {/* <Payments />
      <Advantages />
      <Countries />
      <Companies />
      <Contacts /> */}
    </main>
  )
}