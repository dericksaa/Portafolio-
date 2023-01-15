import React from 'react'
import '../Components/home.css'
const { useState, useEffect } = React;

const Home = (props) => {
  const shuffle = (word) => {
    return word
      .split("")
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join("");
  };

  const gen = () => {
    let textArray = [''];
    if (props.text) {
      //variations with change in size
      for (let i = props.text.length; i >= 0; i--) {
        let tmp = shuffle(props.text);
        tmp = tmp.slice(0, props.text.length - i);
        textArray.push(tmp);
      }
      //variations without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(props.text));
      }
      //normal text
      textArray.push(props.text);
    }
    return textArray;
  };

  const [textArray] = useState(gen);
  const [activeText, setActiveText] = useState(0);
  const [play, setPlay] = useState(false);

  const click = () => {
    if (activeText == textArray.length - 1) {
      setActiveText(0);
    }
    setPlay(true);
  };

  useEffect(() => {
    let interval = null;
    if (play && activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText(activeText + 1);
      }, 90);
    } else if (!play) {
      click();
    }
    return () => clearInterval(interval);
  }, [play, activeText]);

  return (
    <div className='home' onClick={click}>
      <h1>{textArray[activeText]}</h1>
      <h1>Full stack </h1>
      <h1>Web Developer</h1>
      {/* <a href="">ok</a> */}
    </div>
  );
};

export default Home
