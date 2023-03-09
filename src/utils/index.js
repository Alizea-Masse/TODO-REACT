/* eslint-disable import/prefer-default-export */
function getNextId(list) {
  console.log(list);
  // recupérer le plus grand id
  // on crée un tableau de nombre
  const ids = list.map((item) => item.id);
  // qu'on déverse dans la fonction Math.max
  const id = Math.max(...ids);
  // et ajouter 1
  return id + 1;
}

export { getNextId };
