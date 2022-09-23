import { Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import useStyles from './styles'
const Sidenav = ({ setMobileOpen, mobileOpen }) => {
  const isMobile = useMediaQuery('(max-width:767px)')
  const styles = useStyles(isMobile)
  return (
    <nav>
                    {isMobile
                      ? (
                            <Drawer
                                variant="temporary"
                                anchor="right"
                                open={mobileOpen}
                                sx={styles.drawer}
                                classes={{
                                  paper: styles.drawerPaper

                                }}
                                onClose= {
                                  //* the correct way to change the state
                                  () => setMobileOpen((prevMobileOpen) => !prevMobileOpen)
                                }
                                >
                                <Sidebar setMobileOpen={setMobileOpen} />
                            </Drawer>
                        )
                      : (
                            <Drawer
                            sx={styles.drawer}
                            classes={{
                              paper: styles.drawerPaper
                            }}
                            variant='permanent'
                            open={true}
                            >
                                <Sidebar />
                            </Drawer>
                        )}
                </nav>
  )
}

export default Sidenav
