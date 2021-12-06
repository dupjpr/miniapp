const Behavior = ({ title, link, target, children }) => {

    return (
        <>
            {children(title, link, target)}
        </>
    )
}

export default Behavior;