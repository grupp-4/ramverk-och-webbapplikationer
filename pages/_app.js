import {isomorphic} from "gillog"

import fetch from "isomorphic-unfetch"

import __app from "next/app"
import Head from "next/head"

import {ThemeProvider} from "@material-ui/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import PersistentLayout from "components/persistent-layout"

import translateData from "utility/translate-data"

import getLandingPagePreferences from "utility/landing-page-preferences"

import useStringResources from "string-resources"

import createTheme from "theme"

import "css/make-document-viewport-height.css"

const log = isomorphic.getLogger("_app")

/*
 * Material-UI integration achieved thanks to this example: https://github.com/mui-org/material-ui/tree/master/examples/nextjs 2019-09-13
 */

class _app extends __app {

    constructor(props) {
        super(props)
        const theme = createTheme(log)
        const {landingPage, landingPageMobile} = getLandingPagePreferences()
        this.preferences = {theme: theme.preference, landingPage, landingPageMobile}
        this.state = {data: null, theme: theme, landingPageMobile: false}
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
        // Loading data
        fetch("http://localhost:3000/static/test-data-refactored.json")
            .then(res => res.json())
            .then(data => {
                log.debug("Loaded data (raw):", data)
                const translatedData = translateData(data)
                log.debug("Loaded data (translated):", translatedData)
                this.setState({data: translatedData})
            })
    }

    setTheme() {
        this.setState({theme: createTheme(log)})
    }

    setLandingPage(mobile) {
        this.setState({landingPageMobile: mobile})
    }

    render() {
        const strings = useStringResources()
        const appName = strings.global.appName // TODO: make a real implementation for the app's name/page title
        const {Component, pageProps} = this.props
        return (
            <>
                <Head>
                    <title>{appName}</title>
                </Head>
                <ThemeProvider theme={this.state.theme}>
                    {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <PersistentLayout
                        appName={appName}
                        preferences={this.preferences}
                        setTheme={this.setTheme.bind(this)}
                        setLandingPage={this.setLandingPage.bind(this)}
                        strings={strings}>
                        <Component
                            landingPage={this.preferences.landingPage}
                            landingPageMobile={this.preferences.landingPageMobile}
                            mobile={this.state.landingPageMobile}
                            data={this.state.data}
                            {...pageProps}/>
                    </PersistentLayout>
                </ThemeProvider>
            </>
        )
    }
}

export default _app
