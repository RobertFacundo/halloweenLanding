import Header from "../features/landing/Header";
import Counter from "../features/landing/Counter";
import Input from "../features/landing/Input";

const Landing = () => {
    return (
        <section className="bg-landing">
            <div className="content">
                <Header />
                <Counter />
                <Input/>
            </div>
        </section>
    )
};

export default Landing;