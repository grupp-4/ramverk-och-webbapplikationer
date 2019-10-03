import makeStyles from "@material-ui/core/styles/makeStyles"

import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"

function styles(theme) {
    return {
        thCustomWidth: {
            width: 300
        },
        nestedElements: {
            "& th": {
                padding: "7px 0px 7px 10px"
            },
            "& td": {
                padding: "7px 20px 7px 10px"
            },
            "& input": {
                padding: "7px 20px 7px 10px",
                textAlign: "center"
            }
        },
        tableCell: {
            "& head": {
                backgroundColor: "red",
                color: theme.palette.common.white,
                body: {
                    fontSize: 14
                }
            },
            root: {
                backgroundColor: "red"
            }
        },
        tableRow: {
            "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.background.default
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white
            }
        },
        root: {
            width: "100%",
            marginTop: theme.spacing(3),
            overflowX: "auto",
            marginBottom: theme.spacing(2)
        },
        // This is still not working
        table: {
            root: {
                background: "red"
            },
            minWidth: 0
        },
        paper: {
            root: {
                width: "100%",
                marginTop: theme.spacing(3),
                overflowX: "auto"
            }
        },
        card: {
            minWidth: 275,
            margin: 20
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)"
        },
        title: {
            fontSize: 14
        },
        courseAvatar: {
            margin: 10,
            color: "#fff",
            backgroundColor: green[500]
        },
        pos: {
            marginBottom: 12
        },
        inputBase: {
            // Applying styles to children elements is like this, "& elementName" remember the space
            "& input": {
                borderBottom: "1px solid black"
            }
        }
    }
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)
