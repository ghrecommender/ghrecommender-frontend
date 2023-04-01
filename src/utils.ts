// import ReactGA from 'react-ga'

export const trackClick = (label: string) => () => {
  console.debug('trackClick', {
    category: 'User',
    action: `Clicked ${label}`,
  })
}
