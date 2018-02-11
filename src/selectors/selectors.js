export const normalize = (data) => {
  // expects <data> to be either a single entity, or an array of entities,
  // each with an 'id' property
  // returns an object with each entity's ID as key
  // and the entity itself as value
  if (data.constructor === Object) return { [data.id]: data };

  return data.reduce((entities, entity) => ({
      ...entities,
      [entity.id]: entity
    }), {});
};

export const denormalize = (data) => {
  // expects <data> to be an object of normalized entities,
  // each entity's ID as key and the entity itself as value.
  // returns an array of the entities
  if (data) {
    return Object.keys(data).map(key => data[key]);
  } else {
    return []
  }
};
