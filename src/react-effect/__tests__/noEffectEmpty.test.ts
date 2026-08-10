import { describe, expect, it } from '@jest/globals';
import { lint } from '../../utils/lint.ts';
import { glob } from 'glob';
import path from "node:path"

const fixtures = (await glob(`${import.meta.dirname}/fixtures/noEffectEmpty/*.{ts,tsx,js,jsx}`)).map((p) => ({filename: path.basename(p), path: p}))

describe('noEffectEmpty', () => {
    it.each(fixtures)('matches fixture: $filename', ({path}) => {
        const { stdout, status } = lint(path);

        expect(status).toEqual(1)
        expect(stdout).toMatchSnapshot()
    });
});