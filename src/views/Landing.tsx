import Header from "../features/landing/Header";
import Counter from "../features/landing/Counter";
import Input from "../features/landing/Input";
import Scroll from "../features/landing/Scroll";

const Landing = () => {
    return (
        <section className="bg-landing">

            <div className="landing-sticky">
                <Scroll />

                <div className="background-layer" />

                <div className="content">
                    <Header />
                    <Counter />
                    <Input />
                </div>

            </div>

        </section>
    )
};

export default Landing;