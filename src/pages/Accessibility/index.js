import React from 'react';

const Accessibility = () => {
    const styles = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <>
            <h2>Разработка доступных интерфейсов</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/c1W9u6SN2Cw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <h2>Ссылка на доклад</h2>
            <a href="https://developing-accessible-interfaces.netlify.app/" target="_blank" style={styles}>https://developing-accessible-interfaces.netlify.app/</a>
        </>
    )
}

export default Accessibility;