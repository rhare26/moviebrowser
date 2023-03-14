import Hero from './Hero'

const AboutView = () => {
    return (
        <>
            <Hero text="About Us"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Fusce libero quam, elementum eget purus vitae, egestas consequat nisl.Morbi viverra convallis elit, in viverra augue feugiat sit amet.Vestibulum eget pretium justo, id consectetur erat.Integer mattis enim non ornare consequat.Suspendisse potenti.Ut et cursus massa.Nam id neque lorem.Integer turpis justo, sagittis quis fringilla vel, tincidunt at tellus.Nam massa turpis, tempor vitae vulputate at, ullamcorper vitae purus.Donec quis purus lectus.Curabitur sit amet euismod elit.Maecenas pellentesque, magna in sagittis mattis, lacus dui ullamcorper purus, id malesuada nibh tortor at ligula.Nam metus diam, tincidunt eu auctor vel, congue nec nibh.Nam viverra ornare dui, ut lacinia nibh pulvinar at.In eget ante orci.                        </p>
                    </div>
                </div>
            </div>           
        </>

    )
}

export default AboutView;