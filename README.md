Elevator-Control
Otávio Ferrão RM556452

Elevator-Control
O Elevator-Control é um aplicativo móvel desenvolvido em React Native focado no monitoramento e análise do fluxo de passageiros em edifícios. O objetivo principal é fornecer dados de demanda em tempo real, permitindo que os usuários avaliem a ocupação dos elevadores e decidam de forma mais eficiente entre aguardar o transporte ou utilizar as escadas.

Visão Geral
O sistema é configurado para um cenário base de 7 andares servidos por 4 elevadores, com capacidade limite de 13 pessoas por cabine. A partir do registro das chamadas, o aplicativo processa o volume de passageiros e fornece métricas operacionais para o escoamento do fluxo.

Funcionalidades
Autenticação de Usuários: Sistema de login e registro de novos usuários com validação de credenciais. Inclui uma conta de administrador pré-configurada para testes rápidos de desenvolvimento.

Gestão Dinâmica de Temas: Suporte a temas claro (Light Mode) e escuro (Dark Mode). A interface adapta cores de fundo, textos e componentes de navegação instantaneamente através de um provedor de contexto dedicado.

Registro de Chamadas: Dashboard interativo para a entrada de dados manuais por andar via botões de incremento e monitoramento de chamadas ativas por pavimento.

Simulação e Persistência: Geração de tráfego simulado e persistência de dados durante a sessão, garantindo que o estado dos elevadores seja mantido entre a navegação das abas.

Métricas de Capacidade: Cálculo em tempo real do total de usuários em espera e da quantidade de viagens necessárias para zerar a fila.

Análise de Ocupação: Tela de simulação que projeta a distribuição equitativa de passageiros por elevador e exibe a taxa de ocupação em formato de porcentagem.

Arquitetura e Tecnologias
O projeto adota uma arquitetura baseada em componentes, priorizando a modularidade e a tipagem estrita com TypeScript.

Framework: React Native.

Navegação: Expo Router com estrutura de rotas protegidas. O sistema utiliza grupos de rotas e lógica condicional no layout raiz para impedir o acesso a telas internas sem autenticação prévia.

Gerenciamento de Estado: Context API multinível (AuthContext, ElevatorContext e ThemeContext), garantindo a sincronização de dados e preferências do usuário em todo o ciclo de vida da aplicação.

Regras de Negócio: Cálculos matemáticos e lógicos isolados em funções utilitárias (utils), separando a camada de processamento de dados da camada de interface.

Interface: Estilização via StyleSheet com foco em usabilidade e adaptabilidade a diferentes modos de iluminação.

Como Executar o Projeto
Pré-requisitos
Node.js instalado.

Expo CLI.

Aplicativo Expo Go instalado no dispositivo móvel ou um emulador configurado.

Instalação e Execução
Clone o repositório:

```
git clone https://github.com/OTAVIO48FERRAO/fiap-md1-cp1-elevador-app
cd elevator-control
```
Instale as dependências:

```
npm install
Inicie a aplicação:
```
```
npx expo start -c
```
Teste no dispositivo:
Abra o aplicativo Expo Go e escaneie o QR Code exibido no terminal ou pressione a tecla correspondente para abrir no emulador.

Credenciais de Teste (Admin)
E-mail: admin@fiap.com.br

Senha: admin123
