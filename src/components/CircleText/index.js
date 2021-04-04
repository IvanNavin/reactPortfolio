import s from './CircleText.module.css';

const CircleText = (props) => {
    const {link, text, isCode} = props;
    const styles = isCode ? {letterSpacing: '38px'} : {}

    return (
        <a className={s.a} href={link} target="_blank">
            <svg className={s.svg} viewBox="0 0 500 500">
                <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                </defs>
                <text className={s.text} dy="70" textLength="1220" style={styles}>
                    <textPath href="#textcircle">{ text }</textPath>
                </text>
            </svg>
        </a>
    )
}

export default CircleText;