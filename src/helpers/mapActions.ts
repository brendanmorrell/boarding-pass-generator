interface Imapping {
  [key: string]: string;
}

const mapActions = (actions: Array<string>, actionPrefix: string): Imapping => {
  if (Array.isArray(actions) === false) {
    throw new Error('actions must be an array');
  }

  return actions.reduce((mapping: Imapping, action: string): object => {
    mapping[action] = `${actionPrefix}/${action}`; // eslint-disable-line no-param-reassign
    return mapping;
  }, {});
};

export default mapActions;
