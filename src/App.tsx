import React, { useState } from 'react'
import { Provider } from 'react-redux'
import {
  ThemeProvider,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx'
import { Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import AboutIcon from '@material-ui/icons/Notes'

import './App.scss'
import * as Routes from './routes'
import store, { history } from './store'
import { useStyles, theme } from './App.style'

const App: React.FC = () => {
  const [drawer, setDrawer] = useState<boolean>(false)
  const classes = useStyles()
  const openDrawer = (): void => setDrawer(true)
  const closeDrawer = (): void => setDrawer(false)
  return (
    <div className={classes.root}>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <AppBar position="absolute" className={clsx(classes.appBar, drawer && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={openDrawer}
                  className={clsx(classes.menuButton, drawer && classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper, !drawer && classes.drawerPaperClose),
              }}
              open={drawer}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={closeDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <div>
                  <ListSubheader inset>Main</ListSubheader>
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                  <Link to="/settings">
                    <ListItem button>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItem>
                  </Link>
                  <Link to="/about">
                    <ListItem button>
                      <ListItemIcon>
                        <AboutIcon />
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItem>
                  </Link>
                </div>
              </List>
              <Divider />
              <List></List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Switch>
                    <Route path="/about">
                      <Routes.About />
                    </Route>
                    <Route path="/" exact>
                      <Routes.Home />
                    </Route>
                    <Route path="/settings">
                      <Routes.Settings />
                    </Route>
                  </Switch>
                </Grid>
              </Container>
            </main>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
