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
        this.complete({result: (string1 + string2)});
    }
};
