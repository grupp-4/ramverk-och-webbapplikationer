import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState} from "react"

import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import TranslateRoundedIcon from "@material-ui/icons/TranslateRounded"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import Languages from "./languages"
import Preferences from "./preferences"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Header({log, appName, preferences, setStrings, setTheme, mobile, pathname, strings}) {

    // ====== HOOKS ======>

    const styles = useStyles()
    const [{langAnchor, prefAnchor}, setState] = useState({langAnchor: null, prefAnchor: null})

    // ====== EVENT HANDLERS ======>

    function openNavigationMenu() {
        // TODO: implement menu
        log.debug("User tried opening menu which isn't yet implemented.")
    }
    function openLanguagesMenu({currentTarget}) {
        setState(prevState => ({...prevState, ...{langAnchor: currentTarget}}))
        log.debug("Opening languages menu.")
    }
    function closeLanguagesMenu() {
        setState(prevState => ({...prevState, ...{langAnchor: null}}))
        log.debug("Closing languages menu.")
    }
    function openPreferencesMenu({currentTarget}) {
        setState(prevState => ({...prevState, ...{prefAnchor: currentTarget}}))
        log.debug("Opening preferences.")
    }
    function closePreferencesMenu() {
        setState(prevState => ({...prevState, ...{prefAnchor: null}}))
        log.debug("Closing preferences.")
    }

    // ====== RENDER ======>

    return (
        <>
            <AppBar className={styles.appBar} position={"sticky"}>
                <Container className={styles.container} maxWidth={themeParams.maxWidth}>
                    <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                        <IconButton
                            className={styles.navigationMenuButton}
                            onClick={openNavigationMenu}
                            color={"inherit"}
                            edge={"start"}
                            aria-controls={"navigation-menu"}
                            aria-haspopup={"true"}
                            aria-label={"navigation"}
                            style={{display: mobile ? "initial" : "none"}}>
                                <MenuIcon/>
                        </IconButton>
                        <Typography className={styles.appName} variant={"h6"}>
                            {appName}
                        </Typography>
                        <IconButton
                            onClick={openLanguagesMenu}
                            color={"inherit"}
                            size={mobile ? "medium" : "small"}
                            aria-controls={"languages-menu"}
                            aria-haspopup={"true"}
                            aria-label={"languages"}>
                                <TranslateRoundedIcon/>
                        </IconButton>
                        <IconButton
                            onClick={openPreferencesMenu}
                            color={"inherit"}
                            size={mobile ? "medium" : "small"}
                            aria-controls={"preferences-menu"}
                            aria-haspopup={"true"}
                            aria-label={"preferences"}>
                                <MoreVertIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Languages
                anchorEl={langAnchor}
                onClose={closeLanguagesMenu}
                setStrings={setStrings}/>
            <Preferences
                anchorEl={prefAnchor}
                onClose={closePreferencesMenu}
                preferences={preferences}
                setTheme={setTheme}
                mobile={mobile}
                strings={strings.preferencesMenu}/>
        </>
    )
}

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
