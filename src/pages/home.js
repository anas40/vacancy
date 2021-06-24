import { useState, useContext, useEffect } from 'react'
import Hero from 'components/hero';
import KeyElement from 'components/key-element'
import { useHistory } from 'react-router-dom'
import { fileContext } from 'context/fileContext'


import sections from 'assets/data/homeSection'

function Home() {

  const [boxes] = useState(sections)
  const [selectedFirst,setSelectedFirst] = useState(false)
  const history = useHistory()
  const [file, setFile] = useContext(fileContext)


  function sendFile(file) {

    const body = new FormData()
    body.append('resume', file)

    // fetch('http://ec2-3-108-44-173.ap-south-1.compute.amazonaws.com:3000/upload', {
    //   method: 'POST',
    //   body
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

  }

  useEffect(() => {
    if (file) sendFile(file) 
    if(selectedFirst && file){
      history.push('/register')
    }   
  }, [file,selectedFirst])


  return (
    <main>
      <Hero setFile={setFile} setSelectedFirst={setSelectedFirst} />
      {boxes.map(box => <KeyElement key={box.key} box={box} />)}
    </main>
  );
}

export default Home;
