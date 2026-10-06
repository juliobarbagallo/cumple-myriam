# Invitación Myriam — Grandes Éxitos Vol. 60

Invitación web en Next.js: tapa de disco en `/` y detalles del evento en `/invitacion`.

## Desarrollo (WSL)

Node está en nvm; en cada terminal:

```bash
source ~/.nvm/nvm.sh
cd ~/code/cumple-myriam
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Subí el repo a GitHub (o conectá la carpeta con Vercel CLI).
2. En [vercel.com](https://vercel.com) → **Add New Project** → importá el repo.
3. Framework: Next.js (detectado automático). Sin variables obligatorias.
4. Tras el deploy, opcional: en Project Settings → Environment Variables agregá  
   `NEXT_PUBLIC_SITE_URL` = `https://tu-dominio.vercel.app`  
   para previews correctos en WhatsApp.

### Importante: link público para invitados

Si Vercel activó **Deployment Protection** (autenticación Vercel), los invitados no podrán abrir el link. Desactivarlo:

**Project → Settings → Deployment Protection** → desactivar protección en **Production** (o usar “Only Preview Deployments”).

URL de producción actual: **https://cumple-myriam.vercel.app**

CLI (desde WSL, con sesión iniciada):

```bash
source ~/.nvm/nvm.sh
npx vercel
```

## MCP en Cursor

Si el plugin GSAP u otros MCP fallan con `spawn git ENOENT`, seguí [docs/MCP_SETUP.md](docs/MCP_SETUP.md).
