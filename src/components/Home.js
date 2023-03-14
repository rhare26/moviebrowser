import Hero from './Hero'

const Home = () => {
    return (
        <>
            <Hero text="Welcome!"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet ornare lectus, eget elementum mauris efficitur a. Pellentesque ac ante ac dolor rhoncus vulputate. Suspendisse congue enim non massa fermentum iaculis. Cras lobortis, purus a semper hendrerit, diam ex feugiat erat, vitae pellentesque sem mauris eget dui. Ut a venenatis tortor, id malesuada tortor. Suspendisse facilisis, diam semper pretium venenatis, arcu risus convallis felis, eget ultricies ipsum leo at purus. Cras malesuada lorem sit amet magna aliquam dapibus. Donec eget porttitor risus. Morbi vel suscipit dolor, nec porttitor leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        </p>
                    </div>
                </div>
            </div>
        </>

     )
}

export default Home;