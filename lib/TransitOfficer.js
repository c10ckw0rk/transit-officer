
export default class TransitOfficer {

    constructor() {

        this.registry = [];

    }

    /**
     * Subscribe to event
     *
     * @param      {string}    event    Name of event to subscribe to
     * @param      {function}  code     The function to trigger
     */

    sub(event, code) {

        this.registry.push({
            event: event,
            code: code
        });

    }

    /**
     * Trigger an event that has been
     *
     * @param      {string}   event     The name of the event to fire
     */

    pub(event) {

        let throwError = true;

        this.registry.forEach(item => {

            if (item.event === event) {
                item.code();
                throwError = false;
            }

        });

        if (throwError) {
            throw new Error('There is no event by that name in the registry');
        }

    }

}
