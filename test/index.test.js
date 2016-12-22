/* global it, describe, expect, beforeEach, $, Cookies, TransitOfficer, beforeAll, afterEach */

// const TO = TransitOfficer.default;

describe('It publishes events out to functions that have subscribed', () => {

    beforeEach(() => {
        window.transitOfficer = new TransitOfficer.default();
    });

    afterEach(() => {
        window.transitOfficer = undefined;
    });

    const func = () => {
        window.func = true;
    };

    const func2 = () => {
        window.func2 = true;
    };

    it('Subscriptions get added to the registry', () => {

        window.transitOfficer.sub('test-event', func);

        const registeredEvent = window.transitOfficer.registry[0].code;
        const eventName = window.transitOfficer.registry[0].event;

        expect(eventName === 'test-event' && registeredEvent === func).toBe(true);

    });

    it('Multiple functions can be added to the same event', () => {

        window.transitOfficer.sub('test-event', func);
        window.transitOfficer.sub('test-event', func2);

        const firstFunc = window.transitOfficer.registry[0].code;
        const secondFunc = window.transitOfficer.registry[1].code;

        expect(firstFunc === func && secondFunc === func2).toBe(true);

    });

    it('It triggers the event when publish is called', () => {

        window.transitOfficer.sub('test-event', func);
        window.transitOfficer.sub('test-event', func2);

        window.transitOfficer.pub('test-event');

        expect(window.func === true && window.func2 === true).toBe(true);

    });

    it('It throws an error if event does not exist during publish', () => {

        expect(() => { window.transitOfficer.pub('test-event'); }).toThrow(new Error('There is no event by that name in the registry'));

    });

});
