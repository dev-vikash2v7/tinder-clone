import styles from "./styles.module.css";

import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import IconButton from "@mui/material/IconButton"

function SwipeButtons() {
	return (
		<div  className = {styles.swipeButtons} >

			<IconButton id = {styles.replay} className = {styles.icon} >
				<ReplayIcon fontSize  = 'large'/>
			</IconButton>
			
			<IconButton id= {styles.close} className = {styles.icon} >
				<CloseIcon fontSize  = 'large'/>
			</IconButton>

			<IconButton id = {styles.star} className = {styles.icon}  >
				<StarRateIcon fontSize  = 'large'/>
			</IconButton>

			<IconButton id = {styles.favorite} className = {styles.icon} >
				<FavoriteIcon fontSize  = 'large'/>
			</IconButton>

			<IconButton id = {styles.flash} className = {styles.icon} >
				<FlashOnIcon fontSize  = 'large'/>
			</IconButton>

		</div>
	)
}

export default SwipeButtons;
