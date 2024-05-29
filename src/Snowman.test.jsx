import { describe, it, expect, toBeInTheDocument } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

// import TEST_IMAGES from "./_testCommon.js";

// Image shouldn't disappear
// Buttons disappear
// replaced by a text of you lose

it("end game condition for losing is shown", function () {

    const { container, debug } = render(<Snowman word="apple" maxWrong={3} />);

    debug(container);

    for (let ltr of ["x", "y", "z"]) {
        const button = container.querySelector(`#${ltr}`);
        fireEvent.click(button);
    }

    expect(container.querySelector('.Snowman-buttons')).not.toBeInTheDocument();
    // expect(container.querySelector('img[alt="2"]')).toBeInTheDocument(); //FIXME: to add images
    expect(container.querySelector('.Snowman-endgame').style.display).not.toEqual('none');
});