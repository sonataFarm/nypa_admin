export const normalize = (data) => {
  // expects <data> to be either a single entity, or an array of entities,
  // each with an 'id' property
  if (data.constructor === Object) return { [data.id]: data };

  return data.reduce((entities, entity) => ({
      ...entities,
      [entity.id]: entity
    }), {});
};
