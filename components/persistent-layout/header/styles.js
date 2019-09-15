import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            padding: 0
        },
        appBar: {
            background: theme.palette.primary[params.type],
            marginBottom: theme.spacing(params.spacing)
        },
        toolBarDense: {
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        menuButton: {
            marginRight: theme.spacing(params.spacing)
        }
    }
}

export default makeStyles(styles)
