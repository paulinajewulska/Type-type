interface breakpoints {
    tablet: string,
    desktop: string
}

const deviceBreakpoints: breakpoints = {
    tablet: '768px',
    desktop: '1024px',
}

const devices: breakpoints = {
    tablet: `(min-width: ${deviceBreakpoints.tablet})`,
    desktop: `(min-width: ${deviceBreakpoints.desktop})`,
};

export { deviceBreakpoints, devices };