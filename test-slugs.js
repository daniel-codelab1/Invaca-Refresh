const rawNewsData = [
  {
    id: '1',
    title: 'INVACA Celebra su Centenario con Nuevo Plan de Inversiones'
  },
  {
    id: '2',
    title: 'Fusión con FVI: Consolidación de Operaciones',
  }
];

function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const news = rawNewsData.map(item => ({
  ...item,
  slug: generateSlug(item.title)
}));

console.log(news.map(n => n.slug));
