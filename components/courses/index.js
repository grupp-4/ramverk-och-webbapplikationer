import {withLogging} from "gillog"

import {Fragment} from "react"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Courses({log, data, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {data && data.courses
                ? data.courses.map((course, index) => <Fragment key={index}>{course.name}<br/></Fragment>)
                : "Loading teachers..."}
        </Typography>
    )
}

export default withLogging(Courses)
