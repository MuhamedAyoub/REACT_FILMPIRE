import { Fragment, useEffect, useState } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  ListSubheader,
  CircularProgress
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import useStyles from './styles'
import { useGetGenresQuery } from '../../services/TMDB'
import Loader from '../Loader'
//* import Image
import genresIcons from '../../assets/genres/index'
const categories = [
  {
    label: 'Popular',
    value: 'popular'
  },
  {
    label: 'Top Rated',
    value: 'top_rated'
  },
  {
    label: 'Upcoming',
    value: 'upcoming'
  }
]

const redLogo =
	'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'
const blueLogo =
	'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme()
  const styles = useStyles(theme)
  const { data: { genres }, isFetching } = useGetGenresQuery()
  console.log(genres)
  return (
		<Fragment>
			<Link to="/" className={styles.imageLink}>
				<img
					style={styles.image}
					src={theme.palette.mode === 'light' ? redLogo : blueLogo}
				/>
			</Link>
			<Divider />
				<List>
					<ListSubheader>Category</ListSubheader>
					{categories.map(({ label, value }) => (
						<Link key={value} style={styles.links} to="/">
							<ListItem onClick={() => console.log('Clicked')} button>
								<ListItemIcon>
									<img
										src={genresIcons[label.toLowerCase()]}
										style={styles.genreImages}
										height={30}
									/>
								</ListItemIcon>
                                <ListItemText primary={label} />
							</ListItem>
						</Link>
					))}
				</List>
			<Divider />
            			<List>
					<ListSubheader>Genres</ListSubheader>
					{!isFetching
					  ? genres?.map(({ name, id }) => (
						<Link key={id} style={styles.links} to="/">
							<ListItem onClick={() => console.log('Clicked')} button>
								<ListItemIcon>
									<img
										src={genresIcons[name.toLowerCase()]}
										style={styles.genreImages}
										height={30}
									/>
								</ListItemIcon>
                                <ListItemText primary={name} />
							</ListItem>
						</Link>
					  ))
					  : (<Loader />)}
				</List>

		</Fragment>
  )
}

export default Sidebar
