import Welcome from "../../components/02-Welcome/Welcome";
import About from "../../components/03-About/About";
import Payments from "../../components/04-Payments/Payments";
import Advantages from "../../components/05-Advantages/Advantages";

export default function Main() {
  return (
    <main>
      <Welcome />
      <About />
      <Payments />
      <Advantages />
    </main>
  )
}