import styles from "./styles.module.css";
import React, { useState , useEffect} from "react";
import axios from "../axios";

import TinderCard from 'react-tinder-card'


function TinderCards() {

	const [people, setPeople] = useState([])

	useEffect( () => {
		async function fetchData(){
			const req = await axios.get('/tinder/cards')
			// console.log(req)
			console.log('data fetched')
			setPeople(req.data)
		}

		fetchData()
	} , [])

	function swiped(direction, nameToDelete) {
		console.log("removing: " + nameToDelete)
		// setLastDirection(direction)
	}

	function outOfFrame(name) {
		console.log(name + ' left the screen!')
	}



	return (
		<div className={styles.tinderCards} >

			<div className={styles.cardContainer}>

				{people.map(person => (

					<TinderCard 
						className={styles.swipe}
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.imgUrl})` }}
							className={styles.card}
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>

				)
				)}
			</div>

		</div>
	)
}

export default TinderCards;
