# MCP plugins en Cursor (GSAP, Vercel, etc.)

## Error: `spawn git ENOENT`

Muchos plugins de Cursor (incluido **GSAP**) clonan o actualizan skills con **Git**. Ese error significa que **Cursor no encuentra el ejecutable `git` en el PATH de Windows** (el host donde corren los plugins), aunque Git esté instalado solo en WSL.

### Solución recomendada (Windows)

1. Instalar [Git for Windows](https://git-scm.com/download/win) si no lo tenés.
2. Durante la instalación, elegir **“Git from the command line and also from 3rd-party software”** (añade `git` al PATH).
3. Cerrar Cursor por completo y volver a abrirlo.
4. En una terminal **PowerShell** (fuera de WSL), verificar:
   ```powershell
   git --version
   ```
5. Volver a instalar o habilitar el plugin **GSAP** en Cursor → Settings → Plugins / MCP.

### Si Git ya está instalado

- Añadir manualmente al PATH del usuario, por ejemplo:
  - `C:\Program Files\Git\cmd`
- Reiniciar Cursor.

### MCP de Vercel

1. Cursor → **Settings → MCP** → Add server (documentación oficial de Vercel MCP).
2. Autenticarte con tu cuenta Vercel cuando lo pida el servidor.
3. Requiere el mismo PATH con `git` si el servidor se instala vía clone.

### Nota sobre este proyecto

Las animaciones usan el paquete npm **`gsap`** y **`@gsap/react`**, así que la invitación funciona **sin** el MCP de GSAP. El MCP sirve sobre todo para que el agente siga las skills oficiales de GSAP al escribir código.
