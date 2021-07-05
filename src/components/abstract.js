$.widget("custom.richField", {
    _create() {
        throw new Error("abstract widget must be extended");
    },
    _setOption: function (key, value) {
        if (key === "value") {
            value = this._constrain(value);
        }
        this._super(key, value);
    },
    _constrain: function (value) {
        return value
    },
    _setOptions: function (options) {
        this._super(options);
        this.refresh();
    },
    refresh: function () {
        console.log("refreshed");
        this._trigger('refreshed')
    },
    reset: function () {
        throw new Error("abstract method must be implemented");
    },
    // Create a public method.
    value: function (value) {
        // No value passed, act as a getter.
        if (value === undefined) {
            return this.options.value;
        }

        // Value passed, act as a setter.
        this.options.value = this._constrain(value);
    },

    open: function () {
        console.log("super open");
    }
});
