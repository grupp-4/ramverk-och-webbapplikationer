import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Header({log, appName, mobile}) {
    const styles = useStyles()
    return (
        <Grid item xs={12}>
            <AppBar position={"static"} className={styles.appBar}>
                <Toolbar>
                    <IconButton edge={"start"} className={styles.menuButton} color={"inherit"} aria-label={"menu"} style={{display: mobile ? "initial" : "none"}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6"}>
                        {appName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

Header.id = "header"

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
