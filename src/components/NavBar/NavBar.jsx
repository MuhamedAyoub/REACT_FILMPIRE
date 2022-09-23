import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useTheme } from '@emotion/react'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
function NavBar ({ setMobileOpen }) {
  // Start state

  // End state
  const isAuthenticated = true
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:767px)')
  const styles = useStyles(isMobile)
  // to know if you are in the mobile
  //* Functions
  return (
		<div className="nav">
			<AppBar
				sx={{
				  padding: '0'
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
						{theme.palette.mode === 'dark'
						  ? (
							<Brightness7Icon />
						    )
						  : (
							<Brightness4Icon />
						    )}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuthenticated
						  ? (
							<Button color="inherit">
								Login &nbsp; <AccountCircleIcon />
							</Button>
						    )
						  : (
							<Button
								color="inherit"
								component={Link}
								to={'/profile/:id'}
								sx={styles.linkButton}>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{
									  width: '30px',
									  height: '30px'
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
  )
}

export default NavBar
