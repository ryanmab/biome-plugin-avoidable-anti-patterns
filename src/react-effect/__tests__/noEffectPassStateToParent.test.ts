import { describe, expect, it } from "@jest/globals";
import { lint } from "../../utils/lint.ts";
import {glob} from "glob"
import path from "node:path"

const invalidFixtures = (await glob(`${import.meta.dirname}/fixtures/noEffectPassStateToParent/invalid/*.{ts,tsx,js,jsx}`)).map((p) => ({filename: path.basename(p), path: p}))
const validFixtures = (await glob(`${import.meta.dirname}/fixtures/noEffectPassStateToParent/valid/*.{ts,tsx,js,jsx}`)).map((p) => ({filename: path.basename(p), path: p}))

describe("noEffectPassStateToParent",  () => {
	it.each(invalidFixtures)("matches invalid fixture: $filename", ({path}) => {
		const { stdout, status } = lint(path);

		expect(status).toEqual(1);

		expect(stdout).toMatchSnapshot();
	});

	it.each(validFixtures)("matches valid fixture: $filename", ({path}) => {
		const { stdout, status } = lint(path);

		expect(status).toEqual(0);

		expect(stdout).toMatchSnapshot();
	});
});