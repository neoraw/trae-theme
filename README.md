# 🖤 Trae Neo Theme

> _A dark, elegant and cinematic theme inspired by Trae — rebuilt and refined by **Neo**._

![Trae Neo Theme Preview](https://raw.githubusercontent.com/Antony1332/neo-trae-theme-vscode/main/previews/neo-trae.png)

---

## 🎨 Palette principale

| Élément             | Couleur   | Description             |
| ------------------- | --------- | ----------------------- |
| **Background**      | `#1a1b1d` | Fond sombre équilibré   |
| **Accent**          | `#323336` | Sélections et bordures  |
| **Keyword**         | `#b38cff` | Mots-clés et classes    |
| **Function**        | `#f29d79` | Fonctions et méthodes   |
| **Variable**        | `#ded47e` | Variables et paramètres |
| **Constant**        | `#80bbff` | Constantes, imports     |
| **String**          | `#82d99f` | Chaînes de caractères   |
| **HTML Tag**        | `#f2858c` | Balises HTML / JSX      |
| **TypeScript Type** | `#80eaff` | Types et Interfaces     |
| **Comment**         | `#737780` | Commentaires doux       |
| **Error**           | `#ff6464` | Erreurs et alertes      |

---

## 💻 Aperçu du rendu

### JavaScript / TypeScript

```ts
import { fetchData } from "./utils";

const API_URL = "https://api.example.com";

export function getUser(id: string): User {
  const data = fetchData(`${API_URL}/users/${id}`);
  return data ?? { name: "Guest" };
}
```
