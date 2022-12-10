import styles from "./styles.module.css";

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

import { IconButton } from "@mui/material";

function Header() {
	return (
		<div  className={styles.header}>
			<IconButton>
			<PersonIcon fontSize = 'large' className ={styles.header__icon}/>
			</IconButton>

			<img src="logo.png" alt="logo" className ={styles.header__logo}/>

			<IconButton>
			<ForumIcon fontSize = 'large' className ={styles.header__icon}/>
			</IconButton>
		</div>
	);
}

export default Header;
