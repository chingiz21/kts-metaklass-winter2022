const Avatar = (props: { src: string | undefined; }) => {
    return (
        <img className="tile__img" src={props.src} alt="" />
    )
}

export default Avatar;