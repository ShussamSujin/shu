/* SHU 단축주소 — 사이트 다국어 (19개 언어) */
const I18N = {
  en: {
    title: "SHU Link Shortener", heroSub: "Shortener", tagline: "Long links, short and pretty — in any language",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Any language! Any number! Your own short link",
    loginBtn: "Sign in with Google", loginHint: "Sign in to create and manage your own short links",
    loginFail: "Sign-in failed: ", longUrl: "Long URL", longUrlPh: "Paste a long URL starting with https://",
    slugLabel: "Custom name", optional: "(optional)",
    slugPh: "Leave empty to auto-generate! Any language works (e.g. menu, 2026)",
    charHint: "Allowed: letters, numbers, hyphen (-), underscore (_)", makeBtn: "🛹 Shorten it!",
    making: "Creating…", copy: "📋 Copy", copied: "✅ Copied", qr: "🔳 QR", test: "↗ Test", edit: "✏️ Edit", del: "🗑 Delete",
    myLinks: "My link collection", tabMine: "My links", tabAll: "All links", listLoading: "Loading…",
    listEmpty: "No short links yet — be the first link superstar! ⭐", listFail: "Couldn't load the list",
    count: "", clicks: "👆", made: "Done! Copy the address below", errUrl: "Please enter a long URL",
    errUrlFormat: "That URL doesn't look right", errChars: "That name has characters we can't use ( . # $ [ ] / % ? & = + and max 40 )",
    errReserved: "That name is used by the site itself. Please pick another one!", errTaken: "is already taken",
    errAuto: "Auto-generate failed — please try again", errGeneric: "Something went wrong. Check your connection.",
    extTitle: "Faster with the Chrome extension! 🧩",
    extDesc: "Shorten the page you're on in <b>one click</b>. Right-click menu and link copying included.",
    extBtn: "🐩 Add to Chrome", extSoon: "🚧 In review on the Web Store — coming soon!",
    extFilled: "🐩 Shushu fetched the address! Name it and hit the button",
    admin: " (admin)", logout: "Sign out", save: "⬇ Save", close: "Close",
    editPrompt: "Enter the new destination URL", delConfirm: "Delete this short link?",
    secTitle: "🔒 Security", privTitle: "📋 Privacy Policy", langLabel: "Language"
  },
  ko: {
    title: "SHU 단축주소", heroSub: "단축주소", tagline: "긴 주소를 짧고 예쁘게 — 어떤 언어든 OK",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ 한글도! 숫자도! 내 맘대로 단축주소",
    loginBtn: "구글 계정으로 로그인", loginHint: "로그인하면 나만의 단축주소를 만들고 관리할 수 있어요",
    loginFail: "로그인에 실패했어요: ", longUrl: "긴 주소", longUrlPh: "https:// 로 시작하는 긴 주소를 붙여넣으세요",
    slugLabel: "단축 이름", optional: "(선택)",
    slugPh: "비워두면 자동 생성! 한글·숫자 다 돼요 (예: 급식, 2026)",
    charHint: "사용 가능한 글자: 한글, 영문, 숫자, 하이픈(-), 밑줄(_)", makeBtn: "🛹 슝~ 단축하기!",
    making: "만드는 중…", copy: "📋 복사", copied: "✅ 복사됨", qr: "🔳 QR", test: "↗ 테스트", edit: "✏️ 수정", del: "🗑 삭제",
    myLinks: "내 링크 컬렉션", tabMine: "내 링크", tabAll: "전체 링크", listLoading: "불러오는 중…",
    listEmpty: "아직 만든 단축주소가 없어요 — 첫 링크의 슈퍼스타가 되어보세요! ⭐", listFail: "목록을 불러오지 못했어요",
    count: "개", clicks: "👆", made: "완성! 아래 주소를 복사해서 쓰세요", errUrl: "긴 주소를 입력해 주세요",
    errUrlFormat: "주소 형식이 올바르지 않아요", errChars: "단축 이름에 쓸 수 없는 글자가 있어요 ( . # $ [ ] / % ? & = + 및 40자 초과 불가 )",
    errReserved: "이 이름은 사이트가 쓰고 있어서 단축주소로 만들 수 없어요. 다른 이름을 지어주세요!", errTaken: "는 이미 사용 중이에요",
    errAuto: "자동 생성 실패 — 다시 눌러 주세요", errGeneric: "오류가 났어요. 인터넷 연결을 확인해 주세요",
    extTitle: "크롬 확장프로그램으로<br>더 빠르게! 🧩",
    extDesc: "설치하면 보고 있는 페이지를 <b>클릭 한 번</b>에 단축할 수 있어요. 우클릭 메뉴와 내 링크 복사도 지원해요.",
    extBtn: "🐩 크롬에 추가하기", extSoon: "🚧 지금 웹스토어 심사 중이에요 — 곧 만나요!",
    extFilled: "🐩 슈슈가 주소를 물어왔어요! 이름을 정하고 버튼만 누르세요",
    admin: " (관리자)", logout: "로그아웃", save: "⬇ 저장", close: "닫기",
    editPrompt: "새 목적지 주소를 입력하세요", delConfirm: "이 단축주소를 삭제할까요?",
    secTitle: "🔒 보안 안내", privTitle: "📋 개인정보 처리방침", langLabel: "언어"
  },
  ja: {
    title: "SHU 短縮URL", heroSub: "短縮URL", tagline: "長いURLを短くきれいに — どの言語でもOK",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ 日本語も！数字も！自由な短縮URL",
    loginBtn: "Googleアカウントでログイン", loginHint: "ログインすると自分の短縮URLを作成・管理できます",
    loginFail: "ログインに失敗しました: ", longUrl: "長いURL", longUrlPh: "https:// で始まる長いURLを貼り付けてください",
    slugLabel: "短縮名", optional: "(任意)", slugPh: "空欄なら自動生成！日本語・数字OK（例: 給食、2026）",
    charHint: "使用可能: 文字、数字、ハイフン(-)、アンダースコア(_)", makeBtn: "🛹 短縮する！",
    making: "作成中…", copy: "📋 コピー", copied: "✅ コピー済", qr: "🔳 QR", test: "↗ テスト", edit: "✏️ 編集", del: "🗑 削除",
    myLinks: "マイリンク", tabMine: "マイリンク", tabAll: "すべて", listLoading: "読み込み中…",
    listEmpty: "まだ短縮URLがありません — 最初の1本を作りましょう！⭐", listFail: "リストを読み込めませんでした",
    count: "件", clicks: "👆", made: "完成！下のURLをコピーしてお使いください", errUrl: "長いURLを入力してください",
    errUrlFormat: "URLの形式が正しくありません", errChars: "使えない文字が含まれています ( . # $ [ ] / % ? & = + 40文字まで )",
    errReserved: "この名前はサイトが使用中です。別の名前を選んでください！", errTaken: "は既に使われています",
    errAuto: "自動生成に失敗しました — もう一度お試しください", errGeneric: "エラーが発生しました。接続を確認してください",
    extTitle: "Chrome拡張機能で<br>もっと速く！🧩",
    extDesc: "インストールすると見ているページを<b>ワンクリック</b>で短縮できます。右クリックメニューにも対応。",
    extBtn: "🐩 Chromeに追加", extSoon: "🚧 ウェブストア審査中 — もうすぐ！",
    extFilled: "🐩 シュシュがURLを運んできました！名前を決めてボタンを押してください",
    admin: "（管理者）", logout: "ログアウト", save: "⬇ 保存", close: "閉じる",
    editPrompt: "新しいリンク先URLを入力してください", delConfirm: "この短縮URLを削除しますか？",
    secTitle: "🔒 セキュリティ", privTitle: "📋 プライバシーポリシー", langLabel: "言語"
  },
  zh_CN: {
    title: "SHU 短链接", heroSub: "短链接", tagline: "长网址变短又好看 — 支持任何语言",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ 中文也行！数字也行！自定义短链接",
    loginBtn: "使用 Google 账号登录", loginHint: "登录后即可创建和管理自己的短链接",
    loginFail: "登录失败：", longUrl: "长网址", longUrlPh: "粘贴以 https:// 开头的长网址",
    slugLabel: "自定义名称", optional: "（可选）", slugPh: "留空则自动生成！支持中文和数字（例：菜单、2026）",
    charHint: "可用字符：文字、数字、连字符(-)、下划线(_)", makeBtn: "🛹 立即缩短！",
    making: "创建中…", copy: "📋 复制", copied: "✅ 已复制", qr: "🔳 二维码", test: "↗ 测试", edit: "✏️ 编辑", del: "🗑 删除",
    myLinks: "我的链接", tabMine: "我的链接", tabAll: "全部链接", listLoading: "加载中…",
    listEmpty: "还没有短链接 — 创建第一个吧！⭐", listFail: "无法加载列表",
    count: "个", clicks: "👆", made: "完成！复制下面的地址即可使用", errUrl: "请输入长网址",
    errUrlFormat: "网址格式不正确", errChars: "名称含有不可用字符 ( . # $ [ ] / % ? & = + 最多40字 )",
    errReserved: "该名称已被网站占用，请换一个！", errTaken: "已被使用",
    errAuto: "自动生成失败 — 请重试", errGeneric: "出错了，请检查网络连接",
    extTitle: "使用 Chrome 扩展<br>更快捷！🧩",
    extDesc: "安装后可<b>一键</b>缩短当前页面，还支持右键菜单和链接复制。",
    extBtn: "🐩 添加到 Chrome", extSoon: "🚧 正在应用商店审核 — 敬请期待！",
    extFilled: "🐩 修修叼来了网址！起个名字再按按钮吧",
    admin: "（管理员）", logout: "退出登录", save: "⬇ 保存", close: "关闭",
    editPrompt: "请输入新的目标网址", delConfirm: "要删除这个短链接吗？",
    secTitle: "🔒 安全说明", privTitle: "📋 隐私政策", langLabel: "语言"
  },
  zh_TW: {
    title: "SHU 短網址", heroSub: "短網址", tagline: "長網址變短又好看 — 支援任何語言",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ 中文也行！數字也行！自訂短網址",
    loginBtn: "使用 Google 帳號登入", loginHint: "登入後即可建立和管理自己的短網址",
    loginFail: "登入失敗：", longUrl: "長網址", longUrlPh: "貼上以 https:// 開頭的長網址",
    slugLabel: "自訂名稱", optional: "（可選）", slugPh: "留空則自動產生！支援中文和數字（例：菜單、2026）",
    charHint: "可用字元：文字、數字、連字號(-)、底線(_)", makeBtn: "🛹 立即縮短！",
    making: "建立中…", copy: "📋 複製", copied: "✅ 已複製", qr: "🔳 QR", test: "↗ 測試", edit: "✏️ 編輯", del: "🗑 刪除",
    myLinks: "我的連結", tabMine: "我的連結", tabAll: "全部連結", listLoading: "載入中…",
    listEmpty: "還沒有短網址 — 建立第一個吧！⭐", listFail: "無法載入清單",
    count: "個", clicks: "👆", made: "完成！複製下面的網址即可使用", errUrl: "請輸入長網址",
    errUrlFormat: "網址格式不正確", errChars: "名稱含有不可用字元 ( . # $ [ ] / % ? & = + 最多40字 )",
    errReserved: "該名稱已被網站占用，請換一個！", errTaken: "已被使用",
    errAuto: "自動產生失敗 — 請重試", errGeneric: "發生錯誤，請檢查網路連線",
    extTitle: "使用 Chrome 擴充功能<br>更快速！🧩",
    extDesc: "安裝後可<b>一鍵</b>縮短目前頁面，還支援右鍵選單和連結複製。",
    extBtn: "🐩 加到 Chrome", extSoon: "🚧 正在商店審核 — 敬請期待！",
    extFilled: "🐩 修修叼來了網址！取個名字再按按鈕吧",
    admin: "（管理員）", logout: "登出", save: "⬇ 儲存", close: "關閉",
    editPrompt: "請輸入新的目標網址", delConfirm: "要刪除這個短網址嗎？",
    secTitle: "🔒 安全說明", privTitle: "📋 隱私權政策", langLabel: "語言"
  },
  es: {
    title: "SHU Acortador de enlaces", heroSub: "Acortador", tagline: "Enlaces largos, cortos y bonitos — en cualquier idioma",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ ¡Cualquier idioma! ¡Cualquier número! Tu propio enlace",
    loginBtn: "Iniciar sesión con Google", loginHint: "Inicia sesión para crear y gestionar tus enlaces",
    loginFail: "Error al iniciar sesión: ", longUrl: "Enlace largo", longUrlPh: "Pega una URL que empiece por https://",
    slugLabel: "Nombre personalizado", optional: "(opcional)",
    slugPh: "Déjalo vacío para generarlo automáticamente (ej. menu, 2026)",
    charHint: "Permitido: letras, números, guion (-), guion bajo (_)", makeBtn: "🛹 ¡Acortar!",
    making: "Creando…", copy: "📋 Copiar", copied: "✅ Copiado", qr: "🔳 QR", test: "↗ Probar", edit: "✏️ Editar", del: "🗑 Borrar",
    myLinks: "Mis enlaces", tabMine: "Mis enlaces", tabAll: "Todos", listLoading: "Cargando…",
    listEmpty: "Aún no hay enlaces: ¡sé la primera estrella! ⭐", listFail: "No se pudo cargar la lista",
    count: "", clicks: "👆", made: "¡Listo! Copia la dirección de abajo", errUrl: "Introduce un enlace largo",
    errUrlFormat: "El formato de la URL no es correcto", errChars: "Ese nombre tiene caracteres no permitidos ( . # $ [ ] / % ? & = + y máx. 40 )",
    errReserved: "Ese nombre lo usa el propio sitio. ¡Elige otro!", errTaken: "ya está en uso",
    errAuto: "Fallo al generar — inténtalo de nuevo", errGeneric: "Algo salió mal. Revisa tu conexión.",
    extTitle: "¡Más rápido con la extensión de Chrome! 🧩",
    extDesc: "Acorta la página actual con <b>un clic</b>. Incluye menú contextual y copia de enlaces.",
    extBtn: "🐩 Añadir a Chrome", extSoon: "🚧 En revisión en la Web Store — ¡pronto!",
    extFilled: "🐩 ¡Shushu trajo la dirección! Ponle nombre y pulsa el botón",
    admin: " (admin)", logout: "Cerrar sesión", save: "⬇ Guardar", close: "Cerrar",
    editPrompt: "Introduce la nueva URL de destino", delConfirm: "¿Borrar este enlace corto?",
    secTitle: "🔒 Seguridad", privTitle: "📋 Política de privacidad", langLabel: "Idioma"
  },
  pt_BR: {
    title: "SHU Encurtador de links", heroSub: "Encurtador", tagline: "Links longos, curtos e bonitos — em qualquer idioma",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Qualquer idioma! Qualquer número! Seu próprio link",
    loginBtn: "Entrar com o Google", loginHint: "Entre para criar e gerenciar seus links curtos",
    loginFail: "Falha no login: ", longUrl: "Link longo", longUrlPh: "Cole uma URL que comece com https://",
    slugLabel: "Nome personalizado", optional: "(opcional)",
    slugPh: "Deixe vazio para gerar automaticamente (ex.: menu, 2026)",
    charHint: "Permitido: letras, números, hífen (-), sublinhado (_)", makeBtn: "🛹 Encurtar!",
    making: "Criando…", copy: "📋 Copiar", copied: "✅ Copiado", qr: "🔳 QR", test: "↗ Testar", edit: "✏️ Editar", del: "🗑 Excluir",
    myLinks: "Meus links", tabMine: "Meus links", tabAll: "Todos", listLoading: "Carregando…",
    listEmpty: "Ainda sem links — seja a primeira estrela! ⭐", listFail: "Não foi possível carregar a lista",
    count: "", clicks: "👆", made: "Pronto! Copie o endereço abaixo", errUrl: "Digite um link longo",
    errUrlFormat: "O formato da URL não está correto", errChars: "Esse nome tem caracteres inválidos ( . # $ [ ] / % ? & = + e máx. 40 )",
    errReserved: "Esse nome é usado pelo próprio site. Escolha outro!", errTaken: "já está em uso",
    errAuto: "Falha ao gerar — tente novamente", errGeneric: "Algo deu errado. Verifique sua conexão.",
    extTitle: "Mais rápido com a extensão do Chrome! 🧩",
    extDesc: "Encurte a página atual com <b>um clique</b>. Inclui menu de contexto e cópia de links.",
    extBtn: "🐩 Adicionar ao Chrome", extSoon: "🚧 Em análise na Web Store — em breve!",
    extFilled: "🐩 A Shushu trouxe o endereço! Dê um nome e clique no botão",
    admin: " (admin)", logout: "Sair", save: "⬇ Salvar", close: "Fechar",
    editPrompt: "Digite a nova URL de destino", delConfirm: "Excluir este link curto?",
    secTitle: "🔒 Segurança", privTitle: "📋 Política de Privacidade", langLabel: "Idioma"
  },
  fr: {
    title: "SHU Raccourcisseur de liens", heroSub: "Raccourcisseur", tagline: "Des liens longs, courts et jolis — dans toutes les langues",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Toutes les langues ! Tous les chiffres ! Votre lien",
    loginBtn: "Se connecter avec Google", loginHint: "Connectez-vous pour créer et gérer vos liens courts",
    loginFail: "Échec de la connexion : ", longUrl: "Lien long", longUrlPh: "Collez une URL commençant par https://",
    slugLabel: "Nom personnalisé", optional: "(facultatif)",
    slugPh: "Laissez vide pour générer automatiquement (ex. menu, 2026)",
    charHint: "Autorisé : lettres, chiffres, tiret (-), tiret bas (_)", makeBtn: "🛹 Raccourcir !",
    making: "Création…", copy: "📋 Copier", copied: "✅ Copié", qr: "🔳 QR", test: "↗ Tester", edit: "✏️ Modifier", del: "🗑 Supprimer",
    myLinks: "Mes liens", tabMine: "Mes liens", tabAll: "Tous", listLoading: "Chargement…",
    listEmpty: "Aucun lien pour l'instant — soyez la première star ! ⭐", listFail: "Impossible de charger la liste",
    count: "", clicks: "👆", made: "C'est fait ! Copiez l'adresse ci-dessous", errUrl: "Veuillez saisir un lien long",
    errUrlFormat: "Le format de l'URL est incorrect", errChars: "Ce nom contient des caractères interdits ( . # $ [ ] / % ? & = + et max 40 )",
    errReserved: "Ce nom est utilisé par le site. Choisissez-en un autre !", errTaken: "est déjà utilisé",
    errAuto: "Échec de la génération — réessayez", errGeneric: "Une erreur est survenue. Vérifiez votre connexion.",
    extTitle: "Plus rapide avec l'extension Chrome ! 🧩",
    extDesc: "Raccourcissez la page en <b>un clic</b>. Menu contextuel et copie de liens inclus.",
    extBtn: "🐩 Ajouter à Chrome", extSoon: "🚧 En cours d'examen sur le Web Store — bientôt !",
    extFilled: "🐩 Shushu a rapporté l'adresse ! Nommez-la et appuyez sur le bouton",
    admin: " (admin)", logout: "Se déconnecter", save: "⬇ Enregistrer", close: "Fermer",
    editPrompt: "Saisissez la nouvelle URL de destination", delConfirm: "Supprimer ce lien court ?",
    secTitle: "🔒 Sécurité", privTitle: "📋 Politique de confidentialité", langLabel: "Langue"
  },
  de: {
    title: "SHU Link-Kürzer", heroSub: "Kürzer", tagline: "Lange Links, kurz und schön — in jeder Sprache",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Jede Sprache! Jede Zahl! Dein eigener Kurzlink",
    loginBtn: "Mit Google anmelden", loginHint: "Melde dich an, um eigene Kurzlinks zu erstellen und zu verwalten",
    loginFail: "Anmeldung fehlgeschlagen: ", longUrl: "Langer Link", longUrlPh: "Füge eine URL ein, die mit https:// beginnt",
    slugLabel: "Eigener Name", optional: "(optional)",
    slugPh: "Leer lassen für automatische Erstellung (z. B. menu, 2026)",
    charHint: "Erlaubt: Buchstaben, Zahlen, Bindestrich (-), Unterstrich (_)", makeBtn: "🛹 Kürzen!",
    making: "Wird erstellt…", copy: "📋 Kopieren", copied: "✅ Kopiert", qr: "🔳 QR", test: "↗ Testen", edit: "✏️ Bearbeiten", del: "🗑 Löschen",
    myLinks: "Meine Links", tabMine: "Meine Links", tabAll: "Alle", listLoading: "Wird geladen…",
    listEmpty: "Noch keine Kurzlinks — sei der erste Superstar! ⭐", listFail: "Liste konnte nicht geladen werden",
    count: "", clicks: "👆", made: "Fertig! Kopiere die Adresse unten", errUrl: "Bitte einen langen Link eingeben",
    errUrlFormat: "Das URL-Format stimmt nicht", errChars: "Der Name enthält ungültige Zeichen ( . # $ [ ] / % ? & = + und max. 40 )",
    errReserved: "Diesen Namen nutzt die Website selbst. Bitte wähle einen anderen!", errTaken: "ist bereits vergeben",
    errAuto: "Erstellung fehlgeschlagen — bitte erneut versuchen", errGeneric: "Etwas ist schiefgelaufen. Prüfe deine Verbindung.",
    extTitle: "Schneller mit der Chrome-Erweiterung! 🧩",
    extDesc: "Kürze die aktuelle Seite mit <b>einem Klick</b>. Inklusive Kontextmenü und Link-Kopieren.",
    extBtn: "🐩 Zu Chrome hinzufügen", extSoon: "🚧 Wird im Web Store geprüft — bald verfügbar!",
    extFilled: "🐩 Shushu hat die Adresse gebracht! Gib ihr einen Namen und klicke",
    admin: " (Admin)", logout: "Abmelden", save: "⬇ Speichern", close: "Schließen",
    editPrompt: "Gib die neue Ziel-URL ein", delConfirm: "Diesen Kurzlink löschen?",
    secTitle: "🔒 Sicherheit", privTitle: "📋 Datenschutzerklärung", langLabel: "Sprache"
  },
  ru: {
    title: "SHU Сокращатель ссылок", heroSub: "Сократитель", tagline: "Длинные ссылки — короткие и красивые, на любом языке",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Любой язык! Любые цифры! Своя короткая ссылка",
    loginBtn: "Войти через Google", loginHint: "Войдите, чтобы создавать и управлять своими ссылками",
    loginFail: "Не удалось войти: ", longUrl: "Длинная ссылка", longUrlPh: "Вставьте URL, начинающийся с https://",
    slugLabel: "Своё имя", optional: "(необязательно)",
    slugPh: "Оставьте пустым для автогенерации (напр. menu, 2026)",
    charHint: "Можно: буквы, цифры, дефис (-), подчёркивание (_)", makeBtn: "🛹 Сократить!",
    making: "Создание…", copy: "📋 Копировать", copied: "✅ Скопировано", qr: "🔳 QR", test: "↗ Тест", edit: "✏️ Изменить", del: "🗑 Удалить",
    myLinks: "Мои ссылки", tabMine: "Мои ссылки", tabAll: "Все", listLoading: "Загрузка…",
    listEmpty: "Ссылок пока нет — станьте первой звездой! ⭐", listFail: "Не удалось загрузить список",
    count: "", clicks: "👆", made: "Готово! Скопируйте адрес ниже", errUrl: "Введите длинную ссылку",
    errUrlFormat: "Неверный формат ссылки", errChars: "В имени есть недопустимые символы ( . # $ [ ] / % ? & = + и не более 40 )",
    errReserved: "Это имя занято самим сайтом. Выберите другое!", errTaken: "уже занято",
    errAuto: "Не удалось сгенерировать — попробуйте ещё раз", errGeneric: "Что-то пошло не так. Проверьте соединение.",
    extTitle: "Быстрее с расширением Chrome! 🧩",
    extDesc: "Сокращайте текущую страницу <b>одним щелчком</b>. Есть меню по правому клику и копирование.",
    extBtn: "🐩 Добавить в Chrome", extSoon: "🚧 На проверке в Web Store — скоро!",
    extFilled: "🐩 Шушу принесла адрес! Дайте имя и нажмите кнопку",
    admin: " (админ)", logout: "Выйти", save: "⬇ Сохранить", close: "Закрыть",
    editPrompt: "Введите новый адрес назначения", delConfirm: "Удалить эту короткую ссылку?",
    secTitle: "🔒 Безопасность", privTitle: "📋 Политика конфиденциальности", langLabel: "Язык"
  },
  id: {
    title: "SHU Pemendek Tautan", heroSub: "Pemendek", tagline: "Tautan panjang jadi pendek dan cantik — dalam bahasa apa pun",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Bahasa apa pun! Angka pun bisa! Tautan pendek Anda",
    loginBtn: "Masuk dengan Google", loginHint: "Masuk untuk membuat dan mengelola tautan pendek Anda",
    loginFail: "Gagal masuk: ", longUrl: "Tautan panjang", longUrlPh: "Tempel URL yang diawali https://",
    slugLabel: "Nama khusus", optional: "(opsional)",
    slugPh: "Kosongkan untuk dibuat otomatis (mis. menu, 2026)",
    charHint: "Diizinkan: huruf, angka, tanda hubung (-), garis bawah (_)", makeBtn: "🛹 Perpendek!",
    making: "Membuat…", copy: "📋 Salin", copied: "✅ Tersalin", qr: "🔳 QR", test: "↗ Uji", edit: "✏️ Ubah", del: "🗑 Hapus",
    myLinks: "Tautan saya", tabMine: "Tautan saya", tabAll: "Semua", listLoading: "Memuat…",
    listEmpty: "Belum ada tautan — jadilah bintang pertama! ⭐", listFail: "Gagal memuat daftar",
    count: "", clicks: "👆", made: "Selesai! Salin alamat di bawah", errUrl: "Masukkan tautan panjang",
    errUrlFormat: "Format URL tidak benar", errChars: "Nama mengandung karakter terlarang ( . # $ [ ] / % ? & = + maks 40 )",
    errReserved: "Nama itu dipakai situs ini. Silakan pilih yang lain!", errTaken: "sudah dipakai",
    errAuto: "Gagal membuat otomatis — coba lagi", errGeneric: "Terjadi kesalahan. Periksa koneksi Anda.",
    extTitle: "Lebih cepat dengan ekstensi Chrome! 🧩",
    extDesc: "Perpendek halaman saat ini dengan <b>satu klik</b>. Termasuk menu klik kanan dan salin tautan.",
    extBtn: "🐩 Tambahkan ke Chrome", extSoon: "🚧 Sedang ditinjau di Web Store — segera hadir!",
    extFilled: "🐩 Shushu membawa alamatnya! Beri nama lalu tekan tombol",
    admin: " (admin)", logout: "Keluar", save: "⬇ Simpan", close: "Tutup",
    editPrompt: "Masukkan URL tujuan baru", delConfirm: "Hapus tautan pendek ini?",
    secTitle: "🔒 Keamanan", privTitle: "📋 Kebijakan Privasi", langLabel: "Bahasa"
  },
  vi: {
    title: "SHU Rút gọn liên kết", heroSub: "Rút gọn", tagline: "Liên kết dài thành ngắn và đẹp — mọi ngôn ngữ",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Mọi ngôn ngữ! Mọi con số! Liên kết của riêng bạn",
    loginBtn: "Đăng nhập bằng Google", loginHint: "Đăng nhập để tạo và quản lý liên kết rút gọn của bạn",
    loginFail: "Đăng nhập thất bại: ", longUrl: "Liên kết dài", longUrlPh: "Dán URL bắt đầu bằng https://",
    slugLabel: "Tên tùy chỉnh", optional: "(không bắt buộc)",
    slugPh: "Để trống để tạo tự động (vd: menu, 2026)",
    charHint: "Cho phép: chữ, số, gạch ngang (-), gạch dưới (_)", makeBtn: "🛹 Rút gọn!",
    making: "Đang tạo…", copy: "📋 Sao chép", copied: "✅ Đã chép", qr: "🔳 QR", test: "↗ Thử", edit: "✏️ Sửa", del: "🗑 Xóa",
    myLinks: "Liên kết của tôi", tabMine: "Của tôi", tabAll: "Tất cả", listLoading: "Đang tải…",
    listEmpty: "Chưa có liên kết — hãy là ngôi sao đầu tiên! ⭐", listFail: "Không tải được danh sách",
    count: "", clicks: "👆", made: "Xong! Sao chép địa chỉ bên dưới", errUrl: "Vui lòng nhập liên kết dài",
    errUrlFormat: "Định dạng URL không đúng", errChars: "Tên chứa ký tự không hợp lệ ( . # $ [ ] / % ? & = + tối đa 40 )",
    errReserved: "Tên này được trang web sử dụng. Vui lòng chọn tên khác!", errTaken: "đã được dùng",
    errAuto: "Tạo tự động thất bại — thử lại nhé", errGeneric: "Đã xảy ra lỗi. Kiểm tra kết nối của bạn.",
    extTitle: "Nhanh hơn với tiện ích Chrome! 🧩",
    extDesc: "Rút gọn trang hiện tại chỉ với <b>một cú nhấp</b>. Có menu chuột phải và sao chép liên kết.",
    extBtn: "🐩 Thêm vào Chrome", extSoon: "🚧 Đang xét duyệt trên Web Store — sắp có!",
    extFilled: "🐩 Shushu đã mang địa chỉ về! Đặt tên rồi nhấn nút",
    admin: " (quản trị)", logout: "Đăng xuất", save: "⬇ Lưu", close: "Đóng",
    editPrompt: "Nhập URL đích mới", delConfirm: "Xóa liên kết rút gọn này?",
    secTitle: "🔒 Bảo mật", privTitle: "📋 Chính sách quyền riêng tư", langLabel: "Ngôn ngữ"
  },
  hi: {
    title: "SHU लिंक शॉर्टनर", heroSub: "शॉर्टनर", tagline: "लंबे लिंक छोटे और सुंदर — किसी भी भाषा में",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ कोई भी भाषा! कोई भी अंक! आपका अपना शॉर्ट लिंक",
    loginBtn: "Google से साइन इन करें", loginHint: "अपने शॉर्ट लिंक बनाने और प्रबंधित करने के लिए साइन इन करें",
    loginFail: "साइन इन विफल: ", longUrl: "लंबा लिंक", longUrlPh: "https:// से शुरू होने वाला URL पेस्ट करें",
    slugLabel: "कस्टम नाम", optional: "(वैकल्पिक)",
    slugPh: "स्वतः बनाने के लिए खाली छोड़ें (जैसे menu, 2026)",
    charHint: "अनुमत: अक्षर, अंक, हाइफ़न (-), अंडरस्कोर (_)", makeBtn: "🛹 छोटा करें!",
    making: "बन रहा है…", copy: "📋 कॉपी", copied: "✅ कॉपी हुआ", qr: "🔳 QR", test: "↗ जाँचें", edit: "✏️ बदलें", del: "🗑 हटाएँ",
    myLinks: "मेरे लिंक", tabMine: "मेरे लिंक", tabAll: "सभी", listLoading: "लोड हो रहा है…",
    listEmpty: "अभी कोई लिंक नहीं — पहले सुपरस्टार बनें! ⭐", listFail: "सूची लोड नहीं हो सकी",
    count: "", clicks: "👆", made: "हो गया! नीचे दिया पता कॉपी करें", errUrl: "कृपया लंबा लिंक डालें",
    errUrlFormat: "URL का प्रारूप सही नहीं है", errChars: "नाम में अमान्य अक्षर हैं ( . # $ [ ] / % ? & = + और अधिकतम 40 )",
    errReserved: "यह नाम साइट स्वयं उपयोग करती है। कृपया दूसरा चुनें!", errTaken: "पहले से उपयोग में है",
    errAuto: "स्वतः निर्माण विफल — फिर कोशिश करें", errGeneric: "कुछ गड़बड़ हुई। अपना कनेक्शन जाँचें।",
    extTitle: "Chrome एक्सटेंशन से और तेज़! 🧩",
    extDesc: "मौजूदा पेज को <b>एक क्लिक</b> में छोटा करें। राइट-क्लिक मेनू और लिंक कॉपी भी शामिल।",
    extBtn: "🐩 Chrome में जोड़ें", extSoon: "🚧 वेब स्टोर समीक्षा में — जल्द आ रहा है!",
    extFilled: "🐩 शूशू पता ले आया! नाम दें और बटन दबाएँ",
    admin: " (एडमिन)", logout: "साइन आउट", save: "⬇ सहेजें", close: "बंद करें",
    editPrompt: "नया गंतव्य URL डालें", delConfirm: "यह शॉर्ट लिंक हटाएँ?",
    secTitle: "🔒 सुरक्षा", privTitle: "📋 गोपनीयता नीति", langLabel: "भाषा"
  },
  ar: {
    title: "SHU مختصر الروابط", heroSub: "مختصر", tagline: "روابط طويلة تصبح قصيرة وجميلة — بأي لغة",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ أي لغة! أي رقم! رابطك القصير الخاص",
    loginBtn: "تسجيل الدخول بحساب Google", loginHint: "سجّل الدخول لإنشاء روابطك القصيرة وإدارتها",
    loginFail: "فشل تسجيل الدخول: ", longUrl: "الرابط الطويل", longUrlPh: "الصق رابطًا يبدأ بـ https://",
    slugLabel: "اسم مخصص", optional: "(اختياري)",
    slugPh: "اتركه فارغًا للإنشاء التلقائي (مثل menu، 2026)",
    charHint: "المسموح: حروف، أرقام، شرطة (-)، شرطة سفلية (_)", makeBtn: "🛹 اختصر!",
    making: "جارٍ الإنشاء…", copy: "📋 نسخ", copied: "✅ تم النسخ", qr: "🔳 QR", test: "↗ تجربة", edit: "✏️ تعديل", del: "🗑 حذف",
    myLinks: "روابطي", tabMine: "روابطي", tabAll: "الكل", listLoading: "جارٍ التحميل…",
    listEmpty: "لا توجد روابط بعد — كن أول نجم! ⭐", listFail: "تعذّر تحميل القائمة",
    count: "", clicks: "👆", made: "تم! انسخ العنوان أدناه", errUrl: "أدخل رابطًا طويلًا",
    errUrlFormat: "صيغة الرابط غير صحيحة", errChars: "الاسم يحتوي على رموز غير مسموحة ( . # $ [ ] / % ? & = + وبحد أقصى 40 )",
    errReserved: "هذا الاسم يستخدمه الموقع نفسه. اختر اسمًا آخر!", errTaken: "مستخدم بالفعل",
    errAuto: "فشل الإنشاء التلقائي — حاول مرة أخرى", errGeneric: "حدث خطأ. تحقّق من اتصالك.",
    extTitle: "أسرع مع إضافة Chrome! 🧩",
    extDesc: "اختصر الصفحة الحالية بـ<b>نقرة واحدة</b>. تشمل قائمة النقر الأيمن ونسخ الروابط.",
    extBtn: "🐩 أضِف إلى Chrome", extSoon: "🚧 قيد المراجعة في المتجر — قريبًا!",
    extFilled: "🐩 أحضر شوشو العنوان! سمِّه ثم اضغط الزر",
    admin: " (مشرف)", logout: "تسجيل الخروج", save: "⬇ حفظ", close: "إغلاق",
    editPrompt: "أدخل عنوان الوجهة الجديد", delConfirm: "حذف هذا الرابط القصير؟",
    secTitle: "🔒 الأمان", privTitle: "📋 سياسة الخصوصية", langLabel: "اللغة"
  },
  th: {
    title: "SHU ย่อลิงก์", heroSub: "ย่อลิงก์", tagline: "ลิงก์ยาวให้สั้นและสวย — ได้ทุกภาษา",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ ภาษาไหนก็ได้! ตัวเลขก็ได้! ลิงก์สั้นของคุณเอง",
    loginBtn: "เข้าสู่ระบบด้วย Google", loginHint: "เข้าสู่ระบบเพื่อสร้างและจัดการลิงก์สั้นของคุณ",
    loginFail: "เข้าสู่ระบบไม่สำเร็จ: ", longUrl: "ลิงก์ยาว", longUrlPh: "วาง URL ที่ขึ้นต้นด้วย https://",
    slugLabel: "ชื่อที่กำหนดเอง", optional: "(ไม่บังคับ)",
    slugPh: "เว้นว่างไว้เพื่อสร้างอัตโนมัติ (เช่น menu, 2026)",
    charHint: "ใช้ได้: ตัวอักษร ตัวเลข ขีดกลาง (-) ขีดล่าง (_)", makeBtn: "🛹 ย่อเลย!",
    making: "กำลังสร้าง…", copy: "📋 คัดลอก", copied: "✅ คัดลอกแล้ว", qr: "🔳 QR", test: "↗ ทดสอบ", edit: "✏️ แก้ไข", del: "🗑 ลบ",
    myLinks: "ลิงก์ของฉัน", tabMine: "ของฉัน", tabAll: "ทั้งหมด", listLoading: "กำลังโหลด…",
    listEmpty: "ยังไม่มีลิงก์ — มาเป็นซูเปอร์สตาร์คนแรกกัน! ⭐", listFail: "โหลดรายการไม่สำเร็จ",
    count: "", clicks: "👆", made: "เสร็จแล้ว! คัดลอกที่อยู่ด้านล่าง", errUrl: "กรุณาใส่ลิงก์ยาว",
    errUrlFormat: "รูปแบบ URL ไม่ถูกต้อง", errChars: "ชื่อมีอักขระที่ใช้ไม่ได้ ( . # $ [ ] / % ? & = + และไม่เกิน 40 )",
    errReserved: "ชื่อนี้เว็บไซต์ใช้อยู่ กรุณาเลือกชื่ออื่น!", errTaken: "ถูกใช้แล้ว",
    errAuto: "สร้างอัตโนมัติไม่สำเร็จ — ลองอีกครั้ง", errGeneric: "เกิดข้อผิดพลาด ตรวจสอบการเชื่อมต่อ",
    extTitle: "เร็วขึ้นด้วยส่วนขยาย Chrome! 🧩",
    extDesc: "ย่อหน้าปัจจุบันด้วย<b>คลิกเดียว</b> พร้อมเมนูคลิกขวาและคัดลอกลิงก์",
    extBtn: "🐩 เพิ่มใน Chrome", extSoon: "🚧 กำลังตรวจสอบใน Web Store — เร็วๆ นี้!",
    extFilled: "🐩 ชูชูคาบที่อยู่มาให้แล้ว! ตั้งชื่อแล้วกดปุ่ม",
    admin: " (ผู้ดูแล)", logout: "ออกจากระบบ", save: "⬇ บันทึก", close: "ปิด",
    editPrompt: "ใส่ URL ปลายทางใหม่", delConfirm: "ลบลิงก์สั้นนี้?",
    secTitle: "🔒 ความปลอดภัย", privTitle: "📋 นโยบายความเป็นส่วนตัว", langLabel: "ภาษา"
  },
  tr: {
    title: "SHU Bağlantı Kısaltıcı", heroSub: "Kısaltıcı", tagline: "Uzun bağlantılar kısa ve şık — her dilde",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Her dil! Her sayı! Kendi kısa bağlantın",
    loginBtn: "Google ile giriş yap", loginHint: "Kendi kısa bağlantılarınızı oluşturmak için giriş yapın",
    loginFail: "Giriş başarısız: ", longUrl: "Uzun bağlantı", longUrlPh: "https:// ile başlayan bir URL yapıştırın",
    slugLabel: "Özel ad", optional: "(isteğe bağlı)",
    slugPh: "Otomatik oluşturmak için boş bırakın (ör. menu, 2026)",
    charHint: "İzin verilen: harf, rakam, tire (-), alt çizgi (_)", makeBtn: "🛹 Kısalt!",
    making: "Oluşturuluyor…", copy: "📋 Kopyala", copied: "✅ Kopyalandı", qr: "🔳 QR", test: "↗ Dene", edit: "✏️ Düzenle", del: "🗑 Sil",
    myLinks: "Bağlantılarım", tabMine: "Benim", tabAll: "Tümü", listLoading: "Yükleniyor…",
    listEmpty: "Henüz bağlantı yok — ilk süperstar sen ol! ⭐", listFail: "Liste yüklenemedi",
    count: "", clicks: "👆", made: "Tamam! Aşağıdaki adresi kopyalayın", errUrl: "Lütfen uzun bir bağlantı girin",
    errUrlFormat: "URL biçimi doğru değil", errChars: "Ad geçersiz karakter içeriyor ( . # $ [ ] / % ? & = + ve en fazla 40 )",
    errReserved: "Bu adı sitenin kendisi kullanıyor. Lütfen başka bir ad seçin!", errTaken: "zaten kullanılıyor",
    errAuto: "Otomatik oluşturma başarısız — tekrar deneyin", errGeneric: "Bir sorun oluştu. Bağlantınızı kontrol edin.",
    extTitle: "Chrome uzantısıyla daha hızlı! 🧩",
    extDesc: "Açık sayfayı <b>tek tıkla</b> kısaltın. Sağ tık menüsü ve bağlantı kopyalama dahil.",
    extBtn: "🐩 Chrome'a ekle", extSoon: "🚧 Web Store'da inceleniyor — çok yakında!",
    extFilled: "🐩 Shushu adresi getirdi! Ad verin ve düğmeye basın",
    admin: " (yönetici)", logout: "Çıkış yap", save: "⬇ Kaydet", close: "Kapat",
    editPrompt: "Yeni hedef URL'yi girin", delConfirm: "Bu kısa bağlantı silinsin mi?",
    secTitle: "🔒 Güvenlik", privTitle: "📋 Gizlilik Politikası", langLabel: "Dil"
  },
  it: {
    title: "SHU Accorciatore di link", heroSub: "Accorciatore", tagline: "Link lunghi, corti e belli — in qualsiasi lingua",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Qualsiasi lingua! Qualsiasi numero! Il tuo link",
    loginBtn: "Accedi con Google", loginHint: "Accedi per creare e gestire i tuoi link brevi",
    loginFail: "Accesso non riuscito: ", longUrl: "Link lungo", longUrlPh: "Incolla un URL che inizia con https://",
    slugLabel: "Nome personalizzato", optional: "(facoltativo)",
    slugPh: "Lascia vuoto per generarlo automaticamente (es. menu, 2026)",
    charHint: "Consentiti: lettere, numeri, trattino (-), trattino basso (_)", makeBtn: "🛹 Accorcia!",
    making: "Creazione…", copy: "📋 Copia", copied: "✅ Copiato", qr: "🔳 QR", test: "↗ Prova", edit: "✏️ Modifica", del: "🗑 Elimina",
    myLinks: "I miei link", tabMine: "I miei", tabAll: "Tutti", listLoading: "Caricamento…",
    listEmpty: "Nessun link — diventa la prima star! ⭐", listFail: "Impossibile caricare l'elenco",
    count: "", clicks: "👆", made: "Fatto! Copia l'indirizzo qui sotto", errUrl: "Inserisci un link lungo",
    errUrlFormat: "Il formato dell'URL non è corretto", errChars: "Il nome contiene caratteri non validi ( . # $ [ ] / % ? & = + e max 40 )",
    errReserved: "Questo nome è usato dal sito stesso. Scegline un altro!", errTaken: "è già in uso",
    errAuto: "Generazione non riuscita — riprova", errGeneric: "Qualcosa è andato storto. Controlla la connessione.",
    extTitle: "Più veloce con l'estensione Chrome! 🧩",
    extDesc: "Accorcia la pagina corrente con <b>un clic</b>. Include menu contestuale e copia link.",
    extBtn: "🐩 Aggiungi a Chrome", extSoon: "🚧 In revisione sul Web Store — presto disponibile!",
    extFilled: "🐩 Shushu ha portato l'indirizzo! Dagli un nome e premi il pulsante",
    admin: " (admin)", logout: "Esci", save: "⬇ Salva", close: "Chiudi",
    editPrompt: "Inserisci il nuovo URL di destinazione", delConfirm: "Eliminare questo link breve?",
    secTitle: "🔒 Sicurezza", privTitle: "📋 Informativa sulla privacy", langLabel: "Lingua"
  },
  pl: {
    title: "SHU Skracacz linków", heroSub: "Skracacz", tagline: "Długie linki krótkie i ładne — w każdym języku",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Każdy język! Każda liczba! Twój własny krótki link",
    loginBtn: "Zaloguj się przez Google", loginHint: "Zaloguj się, aby tworzyć i zarządzać swoimi linkami",
    loginFail: "Logowanie nie powiodło się: ", longUrl: "Długi link", longUrlPh: "Wklej adres zaczynający się od https://",
    slugLabel: "Własna nazwa", optional: "(opcjonalnie)",
    slugPh: "Zostaw puste, aby wygenerować automatycznie (np. menu, 2026)",
    charHint: "Dozwolone: litery, cyfry, myślnik (-), podkreślenie (_)", makeBtn: "🛹 Skróć!",
    making: "Tworzenie…", copy: "📋 Kopiuj", copied: "✅ Skopiowano", qr: "🔳 QR", test: "↗ Testuj", edit: "✏️ Edytuj", del: "🗑 Usuń",
    myLinks: "Moje linki", tabMine: "Moje", tabAll: "Wszystkie", listLoading: "Ładowanie…",
    listEmpty: "Brak linków — zostań pierwszą gwiazdą! ⭐", listFail: "Nie udało się wczytać listy",
    count: "", clicks: "👆", made: "Gotowe! Skopiuj adres poniżej", errUrl: "Wpisz długi link",
    errUrlFormat: "Nieprawidłowy format adresu", errChars: "Nazwa zawiera niedozwolone znaki ( . # $ [ ] / % ? & = + i maks. 40 )",
    errReserved: "Ta nazwa jest używana przez samą stronę. Wybierz inną!", errTaken: "jest już zajęta",
    errAuto: "Nie udało się wygenerować — spróbuj ponownie", errGeneric: "Coś poszło nie tak. Sprawdź połączenie.",
    extTitle: "Szybciej z rozszerzeniem Chrome! 🧩",
    extDesc: "Skróć bieżącą stronę <b>jednym kliknięciem</b>. Menu kontekstowe i kopiowanie linków w zestawie.",
    extBtn: "🐩 Dodaj do Chrome", extSoon: "🚧 W trakcie weryfikacji w Web Store — już wkrótce!",
    extFilled: "🐩 Shushu przyniósł adres! Nadaj nazwę i naciśnij przycisk",
    admin: " (admin)", logout: "Wyloguj", save: "⬇ Zapisz", close: "Zamknij",
    editPrompt: "Wpisz nowy adres docelowy", delConfirm: "Usunąć ten krótki link?",
    secTitle: "🔒 Bezpieczeństwo", privTitle: "📋 Polityka prywatności", langLabel: "Język"
  },
  nl: {
    title: "SHU Linkverkorter", heroSub: "Verkorter", tagline: "Lange links kort en mooi — in elke taal",
    badge: "⭐ LINK <b>SUPERSTAR</b> ⭐", showcaseCap: "✨ Elke taal! Elk getal! Je eigen korte link",
    loginBtn: "Inloggen met Google", loginHint: "Log in om je eigen korte links te maken en te beheren",
    loginFail: "Inloggen mislukt: ", longUrl: "Lange link", longUrlPh: "Plak een URL die begint met https://",
    slugLabel: "Eigen naam", optional: "(optioneel)",
    slugPh: "Laat leeg om automatisch te genereren (bijv. menu, 2026)",
    charHint: "Toegestaan: letters, cijfers, koppelteken (-), underscore (_)", makeBtn: "🛹 Inkorten!",
    making: "Bezig met maken…", copy: "📋 Kopiëren", copied: "✅ Gekopieerd", qr: "🔳 QR", test: "↗ Testen", edit: "✏️ Bewerken", del: "🗑 Verwijderen",
    myLinks: "Mijn links", tabMine: "Mijn links", tabAll: "Alle", listLoading: "Laden…",
    listEmpty: "Nog geen links — word de eerste superster! ⭐", listFail: "Kon de lijst niet laden",
    count: "", clicks: "👆", made: "Klaar! Kopieer het adres hieronder", errUrl: "Voer een lange link in",
    errUrlFormat: "De URL-indeling klopt niet", errChars: "Die naam bevat ongeldige tekens ( . # $ [ ] / % ? & = + en max. 40 )",
    errReserved: "Die naam gebruikt de site zelf. Kies een andere!", errTaken: "is al in gebruik",
    errAuto: "Automatisch genereren mislukt — probeer opnieuw", errGeneric: "Er ging iets mis. Controleer je verbinding.",
    extTitle: "Sneller met de Chrome-extensie! 🧩",
    extDesc: "Kort de huidige pagina in met <b>één klik</b>. Inclusief rechtsklikmenu en links kopiëren.",
    extBtn: "🐩 Toevoegen aan Chrome", extSoon: "🚧 In beoordeling in de Web Store — binnenkort!",
    extFilled: "🐩 Shushu heeft het adres opgehaald! Geef het een naam en druk op de knop",
    admin: " (beheerder)", logout: "Uitloggen", save: "⬇ Opslaan", close: "Sluiten",
    editPrompt: "Voer de nieuwe bestemmings-URL in", delConfirm: "Deze korte link verwijderen?",
    secTitle: "🔒 Beveiliging", privTitle: "📋 Privacybeleid", langLabel: "Taal"
  }
};

const LANG_NAMES = {
  en: "English", ko: "한국어", ja: "日本語", zh_CN: "简体中文", zh_TW: "繁體中文", es: "Español",
  pt_BR: "Português", fr: "Français", de: "Deutsch", ru: "Русский", id: "Indonesia", vi: "Tiếng Việt",
  hi: "हिन्दी", ar: "العربية", th: "ไทย", tr: "Türkçe", it: "Italiano", pl: "Polski", nl: "Nederlands"
};

const RTL_LANGS = ["ar"];

function detectLang() {
  const saved = localStorage.getItem("shu_lang");
  if (saved && I18N[saved]) return saved;
  const navs = navigator.languages || [navigator.language || "en"];
  for (const raw of navs) {
    const l = raw.replace("-", "_");
    if (I18N[l]) return l;
    const base = l.split("_")[0];
    if (base === "zh") return /TW|HK|Hant/i.test(l) ? "zh_TW" : "zh_CN";
    if (base === "pt") return "pt_BR";
    if (I18N[base]) return base;
  }
  return "en";
}

let LANG = detectLang();
let TX = I18N[LANG] || I18N.en;

function T(key) {
  return (TX && TX[key] != null) ? TX[key] : (I18N.en[key] != null ? I18N.en[key] : key);
}

function setLang(code) {
  if (!I18N[code]) return;
  LANG = code;
  TX = I18N[code];
  localStorage.setItem("shu_lang", code);
  applySiteI18n();
}

function applySiteI18n() {
  document.documentElement.lang = LANG.replace("_", "-");
  document.documentElement.dir = RTL_LANGS.includes(LANG) ? "rtl" : "ltr";
  document.title = T("title");
  document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = T(el.dataset.t); });
  document.querySelectorAll("[data-t-html]").forEach((el) => { el.innerHTML = T(el.dataset.tHtml); });
  document.querySelectorAll("[data-t-ph]").forEach((el) => { el.placeholder = T(el.dataset.tPh); });
  ["langSel","langSel2"].forEach(id=>{
    const sel = document.getElementById(id);
    if (sel && sel.value !== LANG) sel.value = LANG;
  });
  if (typeof onLangChanged === "function") onLangChanged();
}

function buildLangSelect() {
  const sel = document.getElementById("langSel");
  if (!sel || sel.options.length) return;
  Object.keys(LANG_NAMES).forEach((code) => {
    const o = document.createElement("option");
    o.value = code; o.textContent = LANG_NAMES[code];
    sel.append(o);
  });
  sel.value = LANG;
  sel.addEventListener("change", () => setLang(sel.value));
}
