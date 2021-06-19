import Hero from '../components/hero';
import KeyElement from '../components/key-element'

import space from '../assets/images/space.jpg';
import dog from '../assets/images/dog.jpg'
import ruler from '../assets/images/ruler.jpeg'

function Home() {

  const boxes = [
    {
      key: "dog",
      image: dog,
      heading: "Your Caring Friend",
      para: "Vacancy is your best friend when it comes to your professional journey. Whether it is to choose a path from many or know more details about your career. Vacancy will help you in every way possible.",
      buttonText: "Join Now"
    },
    {
      key: "ruler",
      image: ruler,
      heading: "Stay Organised throughout the process",
      para: "Manage each application from a single place. Monitor your progress and stay organized. See ya spreadsheets.",
      buttonText: "Become a member"
    },
    {
      key: "space",
      image: space,
      heading: "Explore The Undiscovered",
      para: "What you seek is seeking you. We apply to many job post on your behalf so that you dont miss out any opportunity.",
      buttonText: "Explore Now"
    }
  ]
  return (
    <main>
      <Hero />
      {boxes.map(box => <KeyElement key={box.key} box={box} />)}
    </main>
  );
}

export default Home;
