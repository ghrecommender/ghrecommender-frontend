import ReactGA from 'react-ga'

export const trackClick = (label: string) => () => {
  ReactGA.event({
    category: 'User',
    action: `Clicked ${label}`,
  })
}
