## 📂 Estrutura do Código de Testes

A pasta `cypress/` contém toda a base de automação E2E do projeto, organizada por **camadas de teste** e **responsabilidade técnica**.  
Essa separação garante clareza, escalabilidade e fácil manutenção das rotinas.

---

### 🧩 Camadas de Automação

#### 🖥️ **GUI (Interface Gráfica)**
Testes que validam o comportamento visual e funcional do front-end, simulando a navegação e ações do usuário final.  
> Exemplos: login, formulários, menus, fluxo de compra, navegação entre telas.

#### 🌐 **API (Serviços REST)**
Automação voltada à camada de serviços, validando **endpoints**, **payloads**, **status HTTP**, e **contratos de resposta**.  
> Ideal para validar o comportamento isolado do back-end, garantindo integridade das integrações.

#### ⚙️ **CLI (Linha de Comando)**
Scripts que exercitam funcionalidades executadas via terminal ou comandos automatizados.  
> Útil para validar rotinas de build, scripts de automação, ou interfaces de linha de comando.

---

### 🧱 Suporte e Reuso

- **`cypress/support/`** → contém comandos customizados (`commands.js`) e hooks (`e2e.js`) compartilhados entre os testes.  
- **`cypress/fixtures/`** → armazena dados estáticos usados em cenários de teste (mocks, payloads, credenciais de exemplo).  
- **`cypress.config.js`** → configurações globais, base URL, timeouts e opções de execução para múltiplos ambientes.

---

### 🧠 Boas Práticas de Estrutura

- Mantenha **cada camada isolada** (GUI, API, CLI) — sem dependências diretas entre pastas.  
- Utilize **fixtures** para dados previsíveis e **commands** para ações reutilizáveis.  
- Padronize nomes de arquivos seguindo o formato:  
  `tipoFuncionalidade.nomeDoFluxo.cy.js`  
  Exemplo: `gui.login.cy.js`, `api.users.cy.js`, `cli.build.cy.js`
- Centralize variáveis de ambiente em `cypress.config.js` ou `.env`.

---

> 🔬 **Objetivo:** fornecer uma suíte de testes automatizados coesa e sustentável, cobrindo toda a jornada — da interface à integração e automação via linha de comando.
