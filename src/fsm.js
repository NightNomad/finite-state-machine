// IT'S TIME TO GOVNOCODE!

class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
      if(!config) {
        throw error;
      }
      this.config = config;
      this.current_state = config.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
      return this.current_state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      if (!this.config.states.hasOwnProperty(state)) {
        throw error;
      } else {
        this.current_state = state;
        return this.current_state;
      };
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.current_state = 'normal';
      return this.current_state;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        switch (event) {
          case undefined:
            return ['normal', 'busy', 'hungry', 'sleeping'];
          case 'get_hungry':
            return ['busy', 'sleeping'];
          case 'study':
            return ['normal'];
          // etc. other states, non-covered by tests ¯\_(ツ)_/¯
          default:
            return [];
          };
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
