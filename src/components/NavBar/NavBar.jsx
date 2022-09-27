import React, { useEffect, useState } from 'react';
import {
	AppBar,
	IconButton,
	Toolbar,
	Drawer,
	Button,
	Avatar,
	useMediaQuery,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@emotion/react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { createSessionId, fetchToken, movieApi } from '../../utls/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, UserSelector } from '../../slices/authSlice';
function NavBar({ setMobileOpen }) {
	// Start state

	// End state
	const theme = useTheme();
	const isMobile = useMediaQuery('(max-width:767px)');
	const styles = useStyles(isMobile);
	const dispatch = useDispatch();
	const { user, isAuthenticated } = useSelector(UserSelector);
	// * my token & session
	const token = localStorage.getItem('request_token');

	const sessionIdFromLocalStorage = localStorage.getItem('session_id');
	// to know if you are in the mobile
	//* @ useEffect
	useEffect(() => {
		const logInUser = async () => {
			if (token) {
				try {
					const sessionId =
						sessionIdFromLocalStorage || (await createSessionId());
					const url = `/account?session_id=${sessionId}`;
					console.log('this is my url ', url);
					const { data: userData } = await movieApi.get(url);
					dispatch(setUser(userData));
				} catch (ex) {
					console.error(ex);
				}
			}
		};

		logInUser();
	}, [token, sessionIdFromLocalStorage]);
	return (
		<div className="nav">
			<AppBar
				sx={{
					padding: '0',
				}}
				position="sticky">
				<Toolbar sx={styles.toolbar}>
					{isMobile && (
						<IconButton
							color="inherit"
							edge="start"
							style={{ outline: 'none' }}
							onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
							sx={styles.menuButton}>
							<MenuIcon />
						</IconButton>
					)}
					<IconButton sx={{ ml: 1 }} onClick={() => {}} color="inherit">
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={fetchToken}>
								Login &nbsp; <AccountCircleIcon />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to={'/profile/:id'}
								sx={styles.linkButton}>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{
										width: '30px',
										height: '30px',
									}}
									alt=""
									src=""></Avatar>
							</Button>
						)}
					</div>
					{isMobile && <Search />}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default NavBar;
