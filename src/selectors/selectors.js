export const normalizeEntitiesArray = (data) => {
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

export const denormalizeEntitiesArray = (data) => {
  // expects <data> to be an object of normalizeEntitiesArrayd entities,
  // each entity's ID as key and the entity itself as value.
  // returns an array of the entities
  if (data) {
    return Object.keys(data).map(key => data[key]);
  } else {
    return []
  }
};

export const transformStudent = student => ({
  ...student,
  awards: [
    student.awards.map(award => award.id)
  ]
});

export const transformAward = award => {
  const transformed = {
    ...award,
    studentId: award.student.id
  };

  delete transformed.student;
  return transformed;
};

export const transformAwards = awards => (
  awards.map(award => transformAward(award))
);

// export const transformAwards = awards => (
//   awards.map(award => transformAward(award))
// );
