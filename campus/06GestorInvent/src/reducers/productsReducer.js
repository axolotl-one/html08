export const estadoInicial = { productos: [] };

export function productosReducer(state, action) {
  switch (action.type) {
    case "add":
      return { 
        productos: [...state.productos, { 
          id: Date.now(), 
          nombre: action.nombre, 
          unidades: 1 
        }] 
      };
    case "increment":
      return { 
        productos: state.productos.map(p =>
          p.id === action.id ? { ...p, unidades: p.unidades + 1 } : p
        ) 
      };
    case "decrement":
      return { 
        productos: state.productos.map(p =>
          p.id === action.id && p.unidades > 1 ? { ...p, unidades: p.unidades - 1 } : p
        ) 
      };
    case "remove":
      return { 
        productos: state.productos.filter(p => p.id !== action.id) 
      };
    case "reset":
      return estadoInicial
    default:
      return state;
  }
}