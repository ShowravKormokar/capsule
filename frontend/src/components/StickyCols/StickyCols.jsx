import colimg1 from "../../assets/cap1-square.jpg";

const StickyCols = () => {
    return (
        <section className="sticky-cols">
            <div className="sticky-cols-wrapper">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper">
                            <h1>Enjoy the view
                                <br />
                                through—the wide
                                <br />
                                panoramic glass
                                <br />
                                window
                            </h1>
                            <p> Get closer to the desert nature than ever before
                                <br />
                                and admire this unique, breathtaking landscape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                    <div className="col col-img-2">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="col-content-wrapper">
                        <h1>Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <p> Get closer to the desert nature than ever before
                            <br />
                            and admire this unique, breathtaking landscape.
                        </p>
                    </div>
                    <div className="col-content-wrapper-2">
                        <h1>Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <p> Get closer to the desert nature than ever before
                            <br />
                            and admire this unique, breathtaking landscape.
                        </p>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default StickyCols;