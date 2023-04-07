import React, { useState } from "react";

export default function About() {
    const [Mystyle, setMystyle] = useState({
        color: "white", backgroundColor: "black"
    })

    const [btntext, setbtntext] = useState("Enable white Mode")

    const changetheme = () => {
        if (Mystyle.color == "white") {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtntext("Enable Dark Mode")
        }
        else {
            setMystyle({
                color: "white",
                backgroundColor: "black"
            })
            setbtntext("Enable White Mode")
        }
    }

    return (
        <div className="container" style={Mystyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={Mystyle}>
                <div className="card">
                    <div className="card-header" id="headingOne" style={Mystyle}>
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" style={Mystyle}>
                            Some placeholder content for the first accordion panel. This panel
                            is shown by default, thanks to the <code>.show</code> className.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" style={Mystyle}>
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            Some placeholder content for the second accordion panel. This
                            panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" style={Mystyle}>
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            And lastly, the placeholder content for the third and final
                            accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary my-3" onClick={changetheme}>{btntext}</button>
        </div>
    );
}
