import request from 'superagent';

const URL = '/api/cats';

export async function getCats() {
  const response = await request.get(URL);
  return response.body;
}

export async function getCat(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addCat(cat) {
  const response = await request.post(URL).send(cat);
  return response.body;
}

export async function deleteCat(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateCat(cat) {
  const response = await request.put(`${URL}/${cat.id}`).send(cat);
  return response.body;
}