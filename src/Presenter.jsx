const Presenter = ({ title, link, target, onClick }) => {

    const Wrapper = link ? 'a' : 'button';

    const buttonStyle= {
        width: '100px',
        height: '40px',
        textDecoration:'none',
        background: '#D5E5F2',
        border: '1px solid #D5E5F2',
        borderRadius: '10px 10px 10px 10px',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const linkStyle= {
        display: 'block',
        margin: 'auto',
        width: '75px',
        padding: '1%',
        textDecoration:'none',
        background: '#F2DA63',
        border: '1px solid #F2DA63',
        borderRadius: '10px 10px 10px 10px',
        fontWeight: 'bold',
    }

    const styleElement = Wrapper === 'a' ? linkStyle : buttonStyle;

    return (
        <Wrapper
            href={link}
            target={target}
            onClick={onClick}
            style={styleElement}
        >
            =) {title}
        </Wrapper>
    )
}

export default Presenter