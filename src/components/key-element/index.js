import './keyElement.css';

function Key(props) {
  function scrollToHero(){
    document.querySelector("#hero").scrollIntoView()
  }
  return (
    <section className={props.box.invert?"containerInvert fullHeight":"fullHeight"} style={{backgroundImage:`url(${props.box.image})`}}>
      <div className="container  d-flex justify-content-center">
        <h3 className="heading-text">{props.box.heading}</h3>
        <p className="para-text">{props.box.para}</p>
        <div>
          <button className="btn" onClick={scrollToHero}>{props.box.buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default Key;