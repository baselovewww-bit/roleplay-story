# Roleplay Story 修正版

GitHub Pages の `roleplay-story` リポジトリにある `index.html` を、このZIP内の `index.html` で置き換えてください。

修正点:
- ホーム画面の「＋ 新しい作品」が作品画面へ移動してからフォームを開くよう修正
- IndexedDBが利用できない環境ではlocalStorageへフォールバック
- 保存・読み込み時のエラーを画面に通知
- 設定画面に保存方式を表示

注意:
- AI自動返信はまだ未実装です。
- iPhone Safariのサイトデータ消去でローカル保存内容が消える場合があります。バックアップを定期的に保存してください。
