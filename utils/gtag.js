// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// ANALITYCS
export const GA_TRACKING_ID = ""
// export const GA_TRACKING_ID = "G-6KSGYXPMZ7"

// TODO: Chequear si es correcto el  GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    if (window.hasOwnProperty('gtag')) window.gtag('config', GA_TRACKING_ID, { page_path: url, })

}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    if (window) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}