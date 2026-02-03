# 寺院ウェブサイトリニューアル (ウォークスルー)

`temple-page` プロジェクトをベースに、Next.js (App Router) とモダンなデザインを採用した `temple-page-ai` プロジェクトを作成しました。

## 変更内容

### 1. プロジェクト構造の刷新
- **Next.js (App Router)**: 最新のフレームワーク構成に移行しました。
- **Styled Components**: CSS-in-JSを採用し、管理しやすく拡張性の高いスタイリングを実現しました。
- **ディレクトリ構成**: `src/app`, `src/components`, `src/lib` に整理しました。

### 2. Gitリポジトリ
- **リポジトリURL**: `https://github.com/k-and-k-dev/temple-page-ai`
- **ブランチ**: `main`
- `temple-page` と同じ認証情報を使用してプッシュ済みです。

### 3. デザインリニューアル
- **和モダンなテーマ**: 深緑 (`#1b813e`) と金 (`#d4a017`) を基調とした落ち着きのある配色。
- **フォント**: `Zen Old Mincho` を採用し、美しく読みやすいタイポグラフィを実現。
- **レスポンシブ対応**: スマートフォンでも見やすいレイアウトと、ハンバーガーメニューの実装。

### 3. 機能の移行
- **お問い合わせフォーム**: 既存のAPI連携ロジックを維持しつつ、デザインを一新しました。
- **お知らせデータ**: 旧サイトのデータを抽出し、`src/lib/data.ts` に集約。トップページ（最新4件）とお知らせページ（全件）で表示するように実装しました。
- **静的エクスポート**: `output: "export"` 設定により、静的ホスティング（GitHub Pages等）に対応。

## 検証結果

### ビルド確認
`npm run build` コマンドを実行し、エラーなくビルドが完了することを確認しました。

```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (8/8)
```

### 画面確認手順
以下のコマンドでローカルサーバーを起動し、ブラウザで確認できます。

```bash
cd c:\Users\zwei_\git\k-and-k-dev\temple-page-ai
npm run dev
```

- **トップページ**: `http://localhost:3000/`
    - ヒーロー画像の表示、お知らせ一覧（最新4件）、アニメーション確認。
- **お問い合わせ**: `http://localhost:3000/contact`
    - 入力フォームの表示、バリデーション確認。
- **当山について**: `http://localhost:3000/about`
- **お知らせ**: `http://localhost:3000/information`
    - 全てのお知らせが表示されているか確認。
