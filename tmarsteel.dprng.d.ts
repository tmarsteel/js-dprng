namespace tmarsteel {
    /**
     * A deterministic, saltable random number generator. Based on a very simple, custom hash function.
     * The custom function was crafted to make JS implementation easy (as opposed to SHA-256 or similar).
     * The hash function is based on the Rijhandel S-Box and modulo.
     * @author Tobias Marstaller <tobias.marstaller@gmail.com>
     */
    interface DPRNG_Static {
        /**
         * @param salt The 28bit salt / initial state to use. If omitted, one is
         * obtained through mcrypt_create_iv if available, rand() otherwise.
         */
        new(initialState? : number) : DPRNG_Instance;
    }

    interface DPRNG_Instance {
        /**
         * Returns a pseudo-random, uniformly distributed double value in
         * the range 0 inclusive to 1 exclusive.
         */
        next() : number;

        /**
         * Returns a pseudo-random uniformly distributed double value in
         * the range min inclusive to max inclusive.
         * @param min
         * @param max
         */
        nextDouble(min : number, max : number) : number;

        /**
         * Returns a pseudo-random uniformly distributed int value in
         * the range min inclusive to max <b>inclusive</b>.
         * @param int min
         * @param int max
         */
        nextInt(min : number, max : number) : number;

        /**
         * Returns an array of length n with each element being
         * a pseudo-random and uniformly distributed integer in the range 0 to 255 inclusive.
         * @param n The number of bytes to generate
         */
        nextBytes(n: number) : number[];
    }

    export declare var DPRNG : DPRNG_Static;
}
