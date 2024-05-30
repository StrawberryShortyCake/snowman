import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import * as words from "./words.js";



it("successfully renders end game condition if user loses game", function () {

    const { container } = render(
        <Snowman
            word="apple"
            maxWrong={3}
        />);

    for (let ltr of ["x", "y", "z"]) {
        const button = container.querySelector(`#${ltr}`);
        fireEvent.click(button);
    }

    expect(container.querySelector('.Snowman-buttons')).not.toBeInTheDocument();
    expect(container.querySelector('img').alt).toEqual("3");
    expect(container.querySelector('.Snowman-endgame').style.display).not.toEqual('none');
});


describe("choose random word", function () {
    beforeEach(function () {
        // observe calls & make it possible to mock

        //need to import module bc the first arg of spyOn takes a module
        //second arg of spyOn takes name of fn within module
        vi.spyOn(words, "randomWord");
    });

    afterEach(function () {
        // after all tests, make words.randomWord normal again
        //  (useful if other tests need this)
        vi.restoreAllMocks();
    });

    it("chooses a random word", function () {
        words.randomWord.mockReturnValue("matcha");

        const { container } = render(
            <Snowman
                words={["matcha", "grass", "chocolate"]}
                maxWrong={3}
            />);

        for (let ltr of ["x", "y", "z"]) {
            const button = container.querySelector(`#${ltr}`);
            fireEvent.click(button);
        }

        expect(container.querySelector('.Snowman-word').innerHTML.length).toEqual(6);
    });

    it("answer matches the random word selected", function () {
        words.randomWord.mockReturnValue("matcha");

        const { container } = render(
            <Snowman
                words={["matcha", "grass", "chocolate"]}
                maxWrong={3}
            />);

        for (let ltr of ["m", "a", "t", "c", "h", "a"]) {
            const button = container.querySelector(`#${ltr}`);
            fireEvent.click(button);
        }

        expect(container.querySelector('.Snowman-word').innerHTML).toEqual("matcha");
    });
});
