const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Ishikawa!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/weapons", (req,res) => {
    const products = [
    {
      id: 1,
      name: "sword",
    },
    {
      id: 2,
      name: "spear",
    },
    ,
    {
      id: 3,
      name: "axe",
    },
    {
      id: 4,
      name: "bow",
    },
    {
      id: 5,
      name: "rapier",
    },

   ];
  
   res.json(products);
  });
