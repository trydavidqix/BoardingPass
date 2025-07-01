# ✈️ BoardingPass

Um elegante aplicativo de cartão de embarque desenvolvido com React Native e Expo, apresentando um design moderno e interface intuitiva.

![BoardingPass Demo](https://img.shields.io/badge/React%20Native-0.79.4-blue) ![Expo](https://img.shields.io/badge/Expo-~53.0.15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue)

## 📱 Preview

<div align="center">
  <img src="../BoardingPass/src/assets/Screenshot_1751382130.png" alt="BoardingPass App Preview" width="300"/>
</div>

> 🚀 **Cartão de embarque digital** com design premium, QR code integrado e todas as informações essenciais do voo.

## 📱 Sobre o Projeto

O **BoardingPass** é uma aplicação mobile que simula um cartão de embarque digital com design premium. O app apresenta informações de voo de forma elegante e moderna, incluindo QR code para check-in e todos os detalhes essenciais da viagem.

### ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface elegante com efeitos visuais sofisticados
- 📸 **Imagem de Fundo**: Header com imagem de aeroporto e efeitos de gradiente
- 🔢 **QR Code**: Código QR integrado para check-in digital
- 📋 **Informações Completas**: Exibição de todos os dados do voo
  - Aeroportos de origem e destino
  - Duração do voo
  - Dados do passageiro
  - Informações de embarque (data, hora, voo, assento)
  - Terminal e portão de embarque
- 🎭 **Componentes Reutilizáveis**: Arquitetura modular e organizada
- 📱 **Responsivo**: Otimizado para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

### Core
- **React Native** `0.79.4` - Framework para desenvolvimento mobile
- **Expo** `~53.0.15` - Plataforma de desenvolvimento
- **TypeScript** `~5.8.3` - Tipagem estática

### UI & Design
- **Expo Linear Gradient** - Efeitos de gradiente
- **Expo Blur** - Efeitos de blur na imagem de fundo
- **React Native SVG** - Elementos gráficos vetoriais
- **React Native QRCode SVG** - Geração de QR codes

### Tipografia
- **Expo Google Fonts (Poppins)** - Fonte personalizada

### Ícones
- **Expo Vector Icons (Ionicons)** - Ícones vetoriais

## 📁 Estrutura do Projeto

```
BoardingPass/
├── src/
│   ├── app/
│   │   └── home/
│   │       ├── index.tsx          # Tela principal
│   │       └── styles.ts          # Estilos da tela
│   ├── components/
│   │   ├── flight/
│   │   │   ├── index.tsx          # Componente de informações de voo
│   │   │   └── styles.ts          # Estilos do componente
│   │   └── info/
│   │       ├── index.tsx          # Componente de informações gerais
│   │       └── styles.ts          # Estilos do componente
│   ├── assets/
│   │   └── [imagens]              # Recursos visuais
│   └── styles/
│       ├── colors.ts              # Paleta de cores
│       └── fontFamily.ts          # Configuração de fontes
├── assets/                        # Assets do Expo
├── App.tsx                        # Componente raiz
├── babel.config.js               # Configuração do Babel
├── tsconfig.json                 # Configuração do TypeScript
└── package.json                  # Dependências do projeto
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel com Expo Go ou emulador

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/trydavidqix/BoardingPass.git
   cd BoardingPass
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   npx expo start
   ```

4. **Execute no dispositivo**
   - Escaneie o QR code com o app Expo Go (Android/iOS)
   - Ou execute no emulador:
     ```bash
     npm run android  # Para Android
     npm run ios      # Para iOS
     ```

## 📐 Configuração de Aliases

O projeto utiliza aliases para importações mais limpas:

```typescript
// babel.config.js
alias: {
  "@": "./src",
  "@assets": "./src/assets",
  "@styles": "./src/styles",
  "@components": "./src/components",
}
```

## 🎨 Design System

### Cores
```typescript
export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray: {
    300: "#D4D4D8",
    400: "#A1A1AA",
    800: "#27272A",
  }
}
```

### Tipografia
```typescript
export const fontFamily = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  bold: "Poppins_700Bold",
  extraBold: "Poppins_800ExtraBold",
}
```

## 📱 Funcionalidades em Destaque

### Header com Efeitos Visuais
- Imagem de fundo do aeroporto
- Gradiente escuro na parte inferior
- Efeito de blur para melhor legibilidade
- Título e subtítulo sobrepostos

### Cartão de Embarque
- Design inspirado em cartões reais
- Separação visual com linha pontilhada
- Layout responsivo e bem estruturado
- QR code integrado para autenticação

### Componentes Modulares
- `Flight`: Exibe informações de aeroportos
- `Info`: Componente genérico para dados
- Reutilização e manutenibilidade

## 🧪 Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Executa no Android
npm run ios        # Executa no iOS  
npm run web        # Executa na web
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Author

| [<img src="https://avatars.githubusercontent.com/u/193255351?s=400&u=fc9352baf3193df4491c0a07d9b8a40ea0a82e9f&v=4" width="100" style="border-radius: 50%;"><br><sub>David Macêdo</sub>](https://github.com/trydavidqix) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [LinkedIn](https://www.linkedin.com/in/trydavidqix/) |


---
⭐ Não esqueça de dar uma star se este projeto te ajudou!
