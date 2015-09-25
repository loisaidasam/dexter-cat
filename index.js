module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        var string1 = step.input('string1')[0];
        var string2 = step.input('string2')[0];
        var separate_with_space = step.input('separate_with_space')[0] != 'false';
        var result;
        if (separate_with_space) {
            result = string1 + " " + string2;
        } else {
            result = string1 + string2;
        }
        this.complete({result: result});
    }
};
