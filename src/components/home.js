import React from "react";
import backgroundImage from "../Assets/Images/General/ACXTitle.png";

const Home = () => {
    const styles = {
        contaier: {
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            textColor: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
        },
        background:{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.6',
            position: 'absolute',
            width: '100%',
            height: '100%',
        }
    };

    return (
        <div style={styles.contaier}>
            <div style={styles.background}></div>
            <h1>Landing Page</h1>
            <h2>Welcome to the Ace Comabt X App!</h2>
            <p>This app will tell you all you need to know about the game Ace Combat X. <br></br> From the missions and thier details, the various aircraft, characters and more! <br></br> First released on the PSP back in 2006. Developed by Namco Bandai Games & Access Games.</p>
            <br></br>
            <p>Assume the role of the pilot Gryphus 1, and fight back the enemy invadors!</p>
        </div>
    );
}

export default Home;