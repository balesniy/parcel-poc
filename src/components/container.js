// $.custom.richField.prototype.reset = function() {
//     this._setOption( "value", 0 );
// };

const getInstanceName = (elem) => Object.keys($(elem).data()).find((key) =>
    key.match(/^custom/i)
);

$(() => {
    $(".container").on("changed", () => {
        console.log("changed on container")
    });
    $("<button>reset</button>")
        .appendTo(".container")
        .on("click", () => {
            // $(".counter").counter("reset")
            $(".container")
                .children()
                .each((i, elem) => {
                    $(elem)
                        .data(getInstanceName(elem))
                        .reset?.()
                    // .option?.("changed", function (e, {value}) {
                    // 	console.log(`${i} changed callback`, value);
                    // });
                });
        });
})
