$.widget("custom.counter", $.custom.richField, {
    // Default options.
    options: {
        value: 0
    },

    _create: function () {
        const self = this;
        const valueEl = this.element.find(".counter__value");
        valueEl.text(self.options.value);
        this.element.on("click", function (evt) {
            if ($(evt.target).data("type") === "increment") {
                self.options.value++;
                self._trigger("changed", null, { value: self.options.value });
                self.element.trigger("changed")
            }
            if ($(evt.target).data("type") === "decrement") {
                self.option("value", self.options.value - 1);
                self._trigger("changed", null, { value: self.options.value });
            }
            valueEl.text(self.options.value);
            self.refresh();
        });
    },

    reset: function () {
        this.options.value = 0;
        const valueEl = this.element.find(".counter__value");
        valueEl.text(this.options.value);
    },

    open: function () {
        console.log("open");
        // Invoke the parent widget's open().
        return this._super();
    },

    // Create a private method.
    _constrain: function (value) {
        if (value > 100) {
            value = 100;
        }
        if (value < 0) {
            value = 0;
        }
        return value;
    }
});

$(() => {
    const counter = $(".counter").counter({
        value: 20
    });
    console.log(counter)
})


