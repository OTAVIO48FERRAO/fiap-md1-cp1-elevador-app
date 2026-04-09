Elevator-Control
Otávio Ferrão RM556452

O Elevator-Control é um aplicativo móvel desenvolvido em React Native focado no monitoramento e análise do fluxo de passageiros em edifícios. O objetivo principal é fornecer dados de demanda em tempo real, permitindo que os usuários avaliem a ocupação dos elevadores e decidam de forma mais eficiente entre aguardar o transporte ou utilizar as escadas.

Visão Geral
O sistema é configurado para um cenário base de 7 andares servidos por 4 elevadores, com capacidade limite de 13 pessoas por cabine. A partir do registro das chamadas, o aplicativo processa o volume de passageiros e fornece métricas operacionais para o escoamento do fluxo.

Funcionalidades
Registro de Chamadas: Dashboard interativo para a entrada de dados manuais por andar ou geração de tráfego simulado.

Métricas de Capacidade: Cálculo em tempo real do total de usuários em espera e da quantidade de viagens necessárias para zerar a fila.

Análise de Ocupação: Tela de simulação que projeta a distribuição equitativa de passageiros por elevador e exibe a taxa de ocupação em formato de porcentagem.

Arquitetura e Tecnologias
O projeto adota uma arquitetura baseada em componentes, priorizando a ausência de dependências externas desnecessárias.

Framework: React Native.

Navegação: Expo Router (estrutura baseada em arquivos com navegação em abas).

Gerenciamento de Estado: Context API nativa, garantindo que as chamadas registradas persistam e reflitam instantaneamente em todas as telas.

Regras de Negócio: Cálculos matemáticos e lógicos isolados em funções utilitárias (utils), separando a camada de dados da camada de apresentação.

UI/UX: Estilização desenvolvida via StyleSheet focada em alto contraste (Dark Theme) e clareza de informações.

Como Executar o Projeto
Pré-requisitos
Node.js instalado.

Expo CLI.

Aplicativo Expo Go instalado no dispositivo móvel (ou um emulador configurado).

Instalação e Execução
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/elevator-control.git
cd elevator-control
Instale as dependências:

Bash
npm install
Inicie a aplicação:

Bash
npx expo start
Teste no dispositivo:
Abra o aplicativo Expo Go no seu smartphone e escaneie o QR Code exibido no terminal, ou pressione a tecla correspondente no terminal para abrir no emulador.
