# Dia 3 · Manhã · back (M13)

**Ponto de partida dos alunos:** o `InssApi` da **tarde do Dia 2 (M8)** — camadas, middleware, `inss.db`.

Hoje só acrescentamos o que o portal precisa:
- porta fixa `5088` (`launchSettings` → perfil **http**)
- **CORS** para `http://localhost:5173`
- sem `UseHttpsRedirection` (em sala)

Visual Studio 2026 → abrir esta pasta → F5 → `http://localhost:5088/swagger`

Front: `..\front` (VS Code → `npm run dev`).
