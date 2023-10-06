import React from 'react';
import './Home.css';
import logo from '../../assets/logo-white.png'
function Home() {
    return (
        <>
            <header className="header outer-content-container">
                <div className="inner-content-container">
                    <img src={logo} alt="Company logo"/>
                </div>
            </header>
            <section className="outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Bij Blogventure vind je de mooiste blogs</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis cumque exercitationem minus optio, perferendis quos sunt.
                Accusamus ad aliquid autem consequatur, eos ex excepturi illum impedit maiores molestias nam quod rem, voluptatibus. Mollitia, quidem voluptas?
                Consectetur dolorem dolorum exercitationem iure magni molestias quaerat quas reprehenderit sit voluptates? Adipisci eius eveniet quas ullam!
                Atque autem deserunt esse et fuga laudantium nostrum omnis repudiandae voluptates voluptatibus. At, corporis cupiditate dolor eligendi eos
                exercitationem harum impedit maxime molestias neque perferendis praesentium, provident reprehenderit sapiente sequi voluptates voluptatum?
                Debitis odio perferendis repellendus ullam vel? At beatae dolore dolorem nihil sed. Blanditiis consequatur consequuntur distinctio eum harum hic,
                illo inventore mollitia nostrum quos repellendus sint vel voluptate. A ad animi doloremque doloribus ea enim et ipsam iure laboriosam libero natus,
                neque nihil pariatur possimus quam quas quibusdam quidem quis quisquam tempore ut veritatis vitae. At autem blanditiis cum, dignissimos dolore
                facere illo quis ullam vero. Cum deleniti dolorum earum et, explicabo facilis hic illo minima nisi obcaecati odio omnis porro rerum vel velit.
                Autem cum delectus deserunt exercitationem, fugiat illum iste iusto natus nobis nostrum perferendis provident qui quos recusandae sapiente tempora
                tempore unde, voluptas. Ab, deserunt est fugiat fugit ipsam saepe sint ullam?
            </p>
                </div>
        </section>
            </>
    );
}

export default Home;