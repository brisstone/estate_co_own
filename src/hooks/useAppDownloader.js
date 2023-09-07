import React from 'react'

const APP_DEEPLINK_BASE_URL = 'https://link.artsplit.com'
const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile'
const APPSTORE_URL = 'https://apps.apple.com/ng/app/fragvest-real-estate-store/id1635023019'

export default function useAppDownloader () {
    const download = () => {
        if(navigator.platform.indexOf('Mac') > -1){
            window.open(APPSTORE_URL, "_parent")
        } else if (navigator.userAgent.includes('iPhone')) {
            window.open(APPSTORE_URL, '_parent')
        } else if (navigator.userAgent.includes('Android')) {
            window.open(PLAYSTORE_URL, '_parent')
        } else {
            window.open(APPSTORE_URL, "_parent")
            window.open(PLAYSTORE_URL, "_parent")
        }
    }

    const getDownloadLinkByDevice = React.useCallback(() => {
        if (navigator.userAgent.includes('iPhone')) return APPSTORE_URL
        return PLAYSTORE_URL
    }, [])

    const openApp = React.useCallback((screen='42AL') => {
        if (
            navigator.userAgent.includes('iPhone')
            || navigator.userAgent.includes('Android')
        ) {
            window.open(`${APP_DEEPLINK_BASE_URL}/${screen}`)
        } else {
            window.open(APPSTORE_URL)
            window.open(PLAYSTORE_URL)
        }
    }, [])

    return {
        PLAYSTORE_URL,
        APPSTORE_URL,
        download,
        getDownloadLinkByDevice,
        openApp
    }
}