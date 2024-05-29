import { describe, it, expect, toBeInTheDocument } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

// import TEST_IMAGES from "./_testCommon.js";

// Image shouldn't disappear
// Buttons disappear
// replaced by a text of you lose

it("end game condition for losing is shown", function(){

    const { container } = render(<Snowman maxWrong="3" />)

    fireEvent.click(container.querySelector("#w"));
    fireEvent.click(container.querySelector("#x"));
    fireEvent.click(container.querySelector("#y"));
    fireEvent.click(container.querySelector("#z"));

    expect.container.querySelector("Snowman-buttons").not.toBeInTheDocument()
    expect.container.querySelector('img[alt=TEST_IMAGES[2]').toBeInTheDocument() //FIXME: to add images
    expect.container.querySelector('Snowman-endgame').toBeInTheDocument()
})