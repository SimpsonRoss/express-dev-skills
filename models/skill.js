let skills = [
  {id: 125639, skill: 'HTML5', learnt: true},
  {id: 257843, skill: 'CSS3', learnt: true},
  {id: 375901, skill: 'JavaScript', learnt: true},
  {id: 491260, skill: 'ReactJS', learnt: false},
  {id: 568172, skill: 'NodeJS', learnt: true},
  {id: 623456, skill: 'ExpressJS', learnt: false},
  {id: 712348, skill: 'Database Management (SQL & NoSQL)', learnt: false},
  {id: 854932, skill: 'Git & Version Control', learnt: false},
  {id: 923457, skill: 'RESTful API Design', learnt: false},
  {id: 106825, skill: 'Testing & Debugging', learnt: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learnt = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}