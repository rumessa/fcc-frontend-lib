import './Drums.css';
import { useState, createRef } from 'react';

const soundBank = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

function Drums() {
	const audioRefs = [];
	const [display, setDisplay] = useState("Hi, you may now play"); 
	soundBank.forEach(_ => {
		audioRefs.push(createRef(null));
	});
	
	// on click of button
	const playSound = (e, index) => {
		audioRefs[index].current.play();
		const parentDiv = audioRefs[index].current.parentNode;
		parentDiv.classList.add('active');
		setDisplay(soundBank[index].id);
		
		audioRefs[index].current.addEventListener('ended', () => {
			setTimeout(parentDiv.classList.remove('active'));
			setDisplay("");
		});
	};
	
	// on keydown event
	document.addEventListener('keydown', (e) => {
		const audioClip = document.getElementById(e.key.toUpperCase());
		
		if (audioClip) {
			const parentDiv = audioClip.parentNode;
			parentDiv.classList.add('active');
			audioClip.play();
			setDisplay(parentDiv.id);
			
			audioClip.addEventListener('ended', () => {
				setTimeout(parentDiv.classList.remove('active'));
				setDisplay("");
			});
			
		}
		
	});
		
	return (
		<div className="machine mt-5 rounded shadow d-flex align-items-center justify-content-center flex-column">
			<div id="display" className="rounded mb-3 text-center">{display}</div>
			<div className="main">
				{soundBank.map((sound, index) => (
					<div className="drum-pad rounded shadow-sm d-flex align-items-center justify-content-center mx-auto" id={sound.id} onClick={e => playSound(e, index)}>
						<audio ref={audioRefs[index]} className="clip" src={sound.url} id={sound.keyTrigger} dataKey={sound.keyCode}/>
						{sound.keyTrigger}
					</div>
				))}
			</div>
			
		</div>
	);
}
export default Drums;