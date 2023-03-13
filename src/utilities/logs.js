/* =====================================*
 *            Logs Utilities            *
 * =====================================*
 *  Decorate your console printouts with the Log utility, 
 *  to make events easier to read.
 */

const defaultOption = {
    bold: false,
    underscore: false,
    exit: false
}

const defaultSource = {
    ERROR: "\x1b[31m",
    SUCCESS: "\x1b[32m",
    LOG: "\x1b[0m",
    WARN: "\x1b[33m"
}

/**
 * Print your message in white
 * @param {String} message Message to print as a log
 * @param {Object} options Styles and exit options
 */
export function log(message, options = defaultOption) {
    const boldEffect = options["bold"] ? "\x1b[1m" : "";
    const italicEffect = options["underscore"] ? "\x1b[4m" : "";

    console.warn(`\x1b[0m${boldEffect}${italicEffect}${message}\x1b[0m`);
    if (options["exit"]) process.exit(0);
}

/**
 * Print your message in yellow
 * @param {String} message Message to print as a log
 * @param {Object} options Styles and exit options
 */
export function warn(message, options = defaultOption) {
    const boldEffect = options["bold"] ? "\x1b[1m" : "";
    const italicEffect = options["underscore"] ? "\x1b[4m" : "";

    console.warn(`${boldEffect}${italicEffect}\x1b[33m${message}\x1b[0m`);
    if (options["exit"]) process.exit(0);
}

/**
 * Print your message in green
 * @param {String} message Message to print as a log
 * @param {Object} options Styles and exit options
 */
export function success(message, options = defaultOption) {
    const boldEffect = options["bold"] ? "\x1b[1m" : "";
    const italicEffect = options["underscore"] ? "\x1b[4m" : "";

    console.info(`${boldEffect}${italicEffect}\x1b[32m${message}\x1b[0m`);
    if (options["exit"]) process.exit(0);
}

/**
 * Print your message in red
 * @param {String} message Message to print as a log
 * @param {Object} options Styles and exit options
 */
export function error(message, options = defaultOption) {
    const boldEffect = options["bold"] ? "\x1b[1m" : "";
    const italicEffect = options["underscore"] ? "\x1b[4m" : "";

    console.error(`${boldEffect}${italicEffect}\x1b[31m${message}\x1b[0m`);
    if (options["exit"]) process.exit(1);
}

export function debug(message, actor = "System") {
    const meses = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const date = new Date()
    console.log(
        "\x1b[2m-----------------------------\n" +
        ("0" + date.getDate()).slice(-2) +
        " " +
        meses[date.getMonth()] +
        " " +
        date.getFullYear() +
        " - " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2) +
        ":" +
        ("0" + date.getSeconds()).slice(-2) +
        (" "+date.toTimeString().slice(9,17)) +
        "\x1b[0m"
    );
    console.log(`\x1b[1m\x1b[34m${actor}\x1b[0m: ${message}`);
}

/**
 * Converts a string to bold to print it by console
 * @param {String} message Message
 * @returns Message bolded
 */
export function bold(message, source) {
    if (defaultSource[source] === undefined) defaultSource[source] = "";
    return `\x1b[1m${message}\x1b[0m${defaultSource[source]}`
}

/**
 * Underscore your message to print it by console
 * @param {String} message Message
 * @returns Message underscored
 */
export function underscore(message, source) {
    if (defaultSource[source] === undefined) defaultSource[source] = "";
    return `\x1b[4m${message}\x1b[0m${defaultSource[source]}`
}

/**
 * Clear console
 */
export function clear() {
    console.clear();
}