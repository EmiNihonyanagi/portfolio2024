# プロジェクト名
Emi Nihonyanagi Portfolio

<!------------------------------------->

## 開発環境

### 必須

- [Node.js](https://nodejs.org/ja/)

### 推奨（VS Codeの拡張機能）

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

<!------------------------------------->

## ディレクトリ・ファイル構成

### Dockerコンテナ内の配置

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```


## セットアップ（初回のみ）

### 環境変数
.env_sampleからコピーして.envを作成

### npmパッケージをインストール
```sh
npm install
```

### prettierをインストール
```sh
npm install --save-dev prettier prettier-plugin-astro
```

### microcms-js-sdkをインストール
```sh
npm install microcms-js-sdk
```

### sassをインストール
```sh
npm i sass
```

## 使い方

### local環境を機動
```sh
npm run dev
```

### 静的ファイルを生成
```sh
npm run build
```

### 静的ファイルを生成後のプレビュー
```sh
npm run preview
```