export const getDay = (date: string) => {
    return new Date(date.slice(0, 10)).getDay()
}
export const getMonth = (date: string) => {
    return new Date(date.slice(0, 10)).toLocaleString('en-US', { month: 'short' })
}

export default { getDay, getMonth };