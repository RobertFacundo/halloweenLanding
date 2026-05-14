import Header from "../features/landing/Header";
import Counter from "../features/landing/Counter";
import Input from "../features/landing/Input";
import Scroll from "../features/landing/Scroll";
import Fog from "../features/fog/Fog";
import { useState } from "react";

const Landing = () => {
    const [ready, setReady] = useState(false);

    return (
        <section className="bg-landing">

            <div className="landing-sticky">
                <Fog onReady={() => setReady(true)} />
                <Scroll />
                <div className="background-layer" />
                <div className={`content ${ready ? "show" : ""}`}>
                    <Header />
                    <Counter />
                    <Input />
                </div>
            </div>

        </section>
    )
};

export default Landing;