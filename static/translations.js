/* =========================================================
   PROGNOS IQ — MULTILINGUAL INTERFACE
   14 languages | Local dictionary | No external API
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "pha_language";

  const languages = {
    en: "English",
    hi: "हिन्दी",
    te: "తెలుగు",
    ta: "தமிழ்",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    bn: "বাংলা",
    mr: "मराठी",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    ja: "日本語",
    zh: "中文",
    ko: "한국어"
  };

  const order = [
    "hi", "te", "ta", "kn", "ml", "bn", "mr",
    "es", "fr", "de", "ja", "zh", "ko"
  ];

  /*
    Every row contains:
    Hindi, Telugu, Tamil, Kannada, Malayalam,
    Bengali, Marathi, Spanish, French, German,
    Japanese, Chinese, Korean.
  */

  const rows = {
    "Menu": ["मेन्यू","మెనూ","பட்டியல்","ಮೆನು","മെനു","মেনু","मेनू","Menú","Menu","Menü","メニュー","菜单","메뉴"],
    "Guest": ["अतिथि","అతిథి","விருந்தினர்","ಅತಿಥಿ","അതിഥി","অতিথি","पाहुणे","Invitado","Invité","Gast","ゲスト","访客","게스트"],
    "Log In / Sign Up": ["लॉग इन / साइन अप","లాగిన్ / సైన్ అప్","உள்நுழை / பதிவு செய்","ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್","ലോഗിൻ / സൈൻ അപ്പ്","লগ ইন / সাইন আপ","लॉग इन / साइन अप","Iniciar sesión / Registrarse","Connexion / Inscription","Anmelden / Registrieren","ログイン / 新規登録","登录 / 注册","로그인 / 가입"],
    "My Account": ["मेरा खाता","నా ఖాతా","எனது கணக்கு","ನನ್ನ ಖಾತೆ","എന്റെ അക്കൗണ്ട്","আমার অ্যাকাউন্ট","माझे खाते","Mi cuenta","Mon compte","Mein Konto","マイアカウント","我的账户","내 계정"],
    "Log Out": ["लॉग आउट","లాగ్ అవుట్","வெளியேறு","ಲಾಗ್ ಔಟ್","ലോഗ് ഔട്ട്","লগ আউট","लॉग आउट","Cerrar sesión","Déconnexion","Abmelden","ログアウト","退出登录","로그아웃"],
    "History": ["इतिहास","చరిత్ర","வரலாறு","ಇತಿಹಾಸ","ചരിത്രം","ইতিহাস","इतिहास","Historial","Historique","Verlauf","履歴","历史记录","기록"],
    "Account / Profile": ["खाता / प्रोफ़ाइल","ఖాతా / ప్రొఫైల్","கணக்கு / சுயவிவரம்","ಖಾತೆ / ಪ್ರೊಫೈಲ್","അക്കൗണ്ട് / പ്രൊഫൈൽ","অ্যাকাউন্ট / প্রোফাইল","खाते / प्रोफाइल","Cuenta / Perfil","Compte / Profil","Konto / Profil","アカウント / プロフィール","账户 / 个人资料","계정 / 프로필"],
    "Settings": ["सेटिंग्स","సెట్టింగ్‌లు","அமைப்புகள்","ಸೆಟ್ಟಿಂಗ್‌ಗಳು","ക്രമീകരണങ്ങൾ","সেটিংস","सेटिंग्ज","Configuración","Paramètres","Einstellungen","設定","设置","설정"],
    "Language": ["भाषा","భాష","மொழி","ಭಾಷೆ","ഭാഷ","ভাষা","भाषा","Idioma","Langue","Sprache","言語","语言","언어"],
    "Select language": ["भाषा चुनें","భాషను ఎంచుకోండి","மொழியைத் தேர்ந்தெடு","ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ","ഭാഷ തിരഞ്ഞെടുക്കുക","ভাষা নির্বাচন করুন","भाषा निवडा","Seleccionar idioma","Choisir la langue","Sprache auswählen","言語を選択","选择语言","언어 선택"],
    "Compact layout": ["कॉम्पैक्ट लेआउट","కాంపాక్ట్ లేఅవుట్","சுருக்கமான அமைப்பு","ಕಾಂಪ್ಯಾಕ್ಟ್ ವಿನ್ಯಾಸ","കോംപാക്റ്റ് ലേഔട്ട്","কমপ্যাক্ট বিন্যাস","कॉम्पॅक्ट लेआउट","Diseño compacto","Disposition compacte","Kompaktes Layout","コンパクト表示","紧凑布局","컴팩트 레이아웃"],
    "Confirm before clearing history": ["इतिहास साफ़ करने से पहले पुष्टि करें","చరిత్రను తొలగించే ముందు నిర్ధారించండి","வரலாற்றை அழிக்கும் முன் உறுதிப்படுத்தவும்","ಇತಿಹಾಸ ಅಳಿಸುವ ಮೊದಲು ದೃಢೀಕರಿಸಿ","ചരിത്രം മായ്ക്കുന്നതിന് മുമ്പ് സ്ഥിരീകരിക്കുക","ইতিহাস মুছে ফেলার আগে নিশ্চিত করুন","इतिहास पुसण्यापूर्वी पुष्टी करा","Confirmar antes de borrar el historial","Confirmer avant d'effacer l'historique","Vor dem Löschen des Verlaufs bestätigen","履歴を消去する前に確認","清除历史记录前确认","기록 삭제 전 확인"],
    "Save settings": ["सेटिंग्स सहेजें","సెట్టింగ్‌లను సేవ్ చేయండి","அமைப்புகளைச் சேமி","ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ","ക്രമീകരണങ്ങൾ സംരക്ഷിക്കുക","সেটিংস সংরক্ষণ করুন","सेटिंग्ज जतन करा","Guardar configuración","Enregistrer les paramètres","Einstellungen speichern","設定を保存","保存设置","설정 저장"],
    "Save profile": ["प्रोफ़ाइल सहेजें","ప్రొఫైల్‌ను సేవ్ చేయండి","சுயவிவரத்தைச் சேமி","ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ","പ്രൊഫൈൽ സംരക്ഷിക്കുക","প্রোফাইল সংরক্ষণ করুন","प्रोफाइल जतन करा","Guardar perfil","Enregistrer le profil","Profil speichern","プロフィールを保存","保存资料","프로필 저장"],
    "Prediction history": ["पूर्वानुमान इतिहास","అంచనా చరిత్ర","கணிப்பு வரலாறு","ಭವಿಷ್ಯವಾಣಿ ಇತಿಹಾಸ","പ്രവചന ചരിത്രം","পূর্বাভাসের ইতিহাস","अंदाज इतिहास","Historial de predicciones","Historique des prédictions","Vorhersageverlauf","予測履歴","预测历史","예측 기록"],
    "Clear history": ["इतिहास साफ़ करें","చరిత్రను తొలగించండి","வரலாற்றை அழி","ಇತಿಹಾಸ ಅಳಿಸಿ","ചരിത്രം മായ്ക്കുക","ইতিহাস মুছুন","इतिहास पुसून टाका","Borrar historial","Effacer l'historique","Verlauf löschen","履歴を消去","清除历史记录","기록 삭제"],
    "Important:": ["महत्वपूर्ण:","ముఖ్యమైనది:","முக்கியம்:","ಮುಖ್ಯ:","പ്രധാനം:","গুরুত্বপূর্ণ:","महत्त्वाचे:","Importante:","Important :","Wichtig:","重要:","重要提示：","중요:"],
    "Create your account": ["अपना खाता बनाएँ","మీ ఖాతాను సృష్టించండి","உங்கள் கணக்கை உருவாக்கவும்","ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ","നിങ്ങളുടെ അക്കൗണ്ട് സൃഷ്ടിക്കുക","আপনার অ্যাকাউন্ট তৈরি করুন","तुमचे खाते तयार करा","Crea tu cuenta","Créez votre compte","Konto erstellen","アカウントを作成","创建账户","계정 만들기"],
    "Create account": ["खाता बनाएँ","ఖాతాను సృష్టించండి","கணக்கை உருவாக்கு","ಖಾತೆ ರಚಿಸಿ","അക്കൗണ്ട് സൃഷ്ടിക്കുക","অ্যাকাউন্ট তৈরি করুন","खाते तयार करा","Crear cuenta","Créer un compte","Konto erstellen","アカウントを作成","创建账户","계정 만들기"],
    "Log in": ["लॉग इन करें","లాగిన్ చేయండి","உள்நுழைக","ಲಾಗಿನ್ ಮಾಡಿ","ലോഗിൻ ചെയ്യുക","লগ ইন করুন","लॉग इन करा","Iniciar sesión","Se connecter","Anmelden","ログイン","登录","로그인"],
    "Email address": ["ईमेल पता","ఈమెయిల్ చిరునామా","மின்னஞ்சல் முகவரி","ಇಮೇಲ್ ವಿಳಾಸ","ഇമെയിൽ വിലാസം","ইমেল ঠিকানা","ईमेल पत्ता","Dirección de correo","Adresse e-mail","E-Mail-Adresse","メールアドレス","电子邮件地址","이메일 주소"],
    "Password (8+ characters)": ["पासवर्ड (8+ अक्षर)","పాస్‌వర్డ్ (8+ అక్షరాలు)","கடவுச்சொல் (8+ எழுத்துகள்)","ಪಾಸ್‌ವರ್ಡ್ (8+ ಅಕ್ಷರಗಳು)","പാസ്‌വേഡ് (8+ അക്ഷരങ്ങൾ)","পাসওয়ার্ড (৮+ অক্ষর)","पासवर्ड (8+ अक्षरे)","Contraseña (8+ caracteres)","Mot de passe (8+ caractères)","Passwort (8+ Zeichen)","パスワード（8文字以上）","密码（至少8个字符）","비밀번호(8자 이상)"],
    "Confirm password": ["पासवर्ड की पुष्टि करें","పాస్‌వర్డ్‌ను నిర్ధారించండి","கடவுச்சொல்லை உறுதிப்படுத்தவும்","ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ","പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക","পাসওয়ার্ড নিশ্চিত করুন","पासवर्ड निश्चित करा","Confirmar contraseña","Confirmer le mot de passe","Passwort bestätigen","パスワードを確認","确认密码","비밀번호 확인"],
    "Display name": ["प्रदर्शित नाम","ప్రదర్శించాల్సిన పేరు","காட்சிப் பெயர்","ಪ್ರದರ್ಶನ ಹೆಸರು","പ്രദർശന നാമം","প্রদর্শিত নাম","प्रदर्शित नाव","Nombre para mostrar","Nom affiché","Anzeigename","表示名","显示名称","표시 이름"],
    "Email": ["ईमेल","ఈమెయిల్","மின்னஞ்சல்","ಇಮೇಲ್","ഇമെയിൽ","ইমেল","ईमेल","Correo electrónico","E-mail","E-Mail","メール","电子邮件","이메일"],
    "Basic health analysis": ["बुनियादी स्वास्थ्य विश्लेषण","ప్రాథమిక ఆరోగ్య విశ్లేషణ","அடிப்படை சுகாதார பகுப்பாய்வு","ಮೂಲ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ","അടിസ്ഥാന ആരോഗ്യ വിശകലനം","মৌলিক স্বাস্থ্য বিশ্লেষণ","मूलभूत आरोग्य विश्लेषण","Análisis básico de salud","Analyse de santé de base","Grundlegende Gesundheitsanalyse","基本健康分析","基础健康分析","기본 건강 분석"],
    "Enter current measurements and relevant history.": ["वर्तमान माप और संबंधित इतिहास दर्ज करें।","ప్రస్తుత కొలతలు మరియు సంబంధిత చరిత్రను నమోదు చేయండి.","தற்போதைய அளவீடுகள் மற்றும் தொடர்புடைய வரலாற்றை உள்ளிடவும்.","ಪ್ರಸ್ತುತ ಅಳತೆಗಳು ಮತ್ತು ಸಂಬಂಧಿತ ಇತಿಹಾಸವನ್ನು ನಮೂದಿಸಿ.","നിലവിലെ അളവുകളും ബന്ധപ്പെട്ട ചരിത്രവും നൽകുക.","বর্তমান পরিমাপ এবং প্রাসঙ্গিক ইতিহাস লিখুন।","सध्याची मोजमापे आणि संबंधित इतिहास नोंदवा.","Introduce las mediciones actuales y el historial pertinente.","Saisissez les mesures actuelles et les antécédents pertinents.","Geben Sie aktuelle Messwerte und relevante Vorgeschichte ein.","現在の測定値と関連する履歴を入力してください。","输入当前测量值和相关病史。","현재 측정값과 관련 병력을 입력하세요."],
    "Required screening inputs": ["आवश्यक स्क्रीनिंग जानकारी","అవసరమైన స్క్రీనింగ్ వివరాలు","தேவையான பரிசோதனை விவரங்கள்","ಅಗತ್ಯ ತಪಾಸಣೆ ವಿವರಗಳು","ആവശ്യമായ സ്ക്രീനിംഗ് വിവരങ്ങൾ","প্রয়োজনীয় স্ক্রিনিং তথ্য","आवश्यक तपासणी माहिती","Datos necesarios para la evaluación","Données requises pour le dépistage","Erforderliche Screening-Eingaben","必須スクリーニング項目","必需筛查信息","필수 선별 입력"],
    "Age (years) *": ["आयु (वर्ष) *","వయస్సు (సంవత్సరాలు) *","வயது (ஆண்டுகள்) *","ವಯಸ್ಸು (ವರ್ಷಗಳು) *","പ്രായം (വർഷം) *","বয়স (বছর) *","वय (वर्षे) *","Edad (años) *","Âge (années) *","Alter (Jahre) *","年齢（歳）*","年龄（岁）*","나이(세) *"],
    "Sex *": ["लिंग *","లింగం *","பாலினம் *","ಲಿಂಗ *","ലിംഗം *","লিঙ্গ *","लिंग *","Sexo *","Sexe *","Geschlecht *","性別 *","性别 *","성별 *"],
    "Select": ["चुनें","ఎంచుకోండి","தேர்ந்தெடுக்கவும்","ಆಯ್ಕೆಮಾಡಿ","തിരഞ്ഞെടുക്കുക","নির্বাচন করুন","निवडा","Seleccionar","Sélectionner","Auswählen","選択","选择","선택"],
    "Female": ["महिला","స్త్రీ","பெண்","ಮಹಿಳೆ","സ്ത്രീ","মহিলা","स्त्री","Mujer","Femme","Weiblich","女性","女性","여성"],
    "Male": ["पुरुष","పురుషుడు","ஆண்","ಪುರುಷ","പുരുഷൻ","পুরুষ","पुरुष","Hombre","Homme","Männlich","男性","男性","남성"],
    "Intersex": ["इंटरसेक्स","ఇంటర్‌సెక్స్","இடைப்பாலினம்","ಇಂಟರ್‌ಸೆಕ್ಸ್","ഇന്റർസെക്സ്","ইন্টারসেক্স","इंटरसेक्स","Intersexual","Intersexe","Intergeschlechtlich","インターセックス","间性","인터섹스"],
    "Prefer not to say": ["बताना नहीं चाहते","చెప్పదలచుకోలేదు","கூற விரும்பவில்லை","ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ","പറയാൻ താൽപ്പര്യമില്ല","বলতে অনিচ্ছুক","सांगू इच्छित नाही","Prefiero no decirlo","Je préfère ne pas répondre","Keine Angabe","回答しない","不愿透露","응답하지 않음"],
    "BMI (kg/m²) *": ["BMI (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","IMC (kg/m²) *","IMC (kg/m²) *","BMI (kg/m²) *","BMI (kg/m²) *","BMI（kg/m²）*","BMI (kg/m²) *"],
    "Systolic BP (mmHg) *": ["सिस्टोलिक BP (mmHg) *","సిస్టోలిక్ BP (mmHg) *","சிஸ்டாலிக் BP (mmHg) *","ಸಿಸ್ಟಾಲಿಕ್ BP (mmHg) *","സിസ്റ്റോളിക് BP (mmHg) *","সিস্টোলিক BP (mmHg) *","सिस्टोलिक BP (mmHg) *","PA sistólica (mmHg) *","PA systolique (mmHg) *","Systolischer Blutdruck (mmHg) *","収縮期血圧 (mmHg) *","收缩压 (mmHg) *","수축기 혈압 (mmHg) *"],
    "Diastolic BP (mmHg) *": ["डायस्टोलिक BP (mmHg) *","డయాస్టోలిక్ BP (mmHg) *","டயாஸ்டாலிக் BP (mmHg) *","ಡಯಾಸ್ಟಾಲಿಕ್ BP (mmHg) *","ഡയാസ്റ്റോളിക് BP (mmHg) *","ডায়াস্টোলিক BP (mmHg) *","डायस्टोलिक BP (mmHg) *","PA diastólica (mmHg) *","PA diastolique (mmHg) *","Diastolischer Blutdruck (mmHg) *","拡張期血圧 (mmHg) *","舒张压 (mmHg) *","이완기 혈압 (mmHg) *"],
    "Fasting glucose (mg/dL) *": ["उपवास ग्लूकोज़ (mg/dL) *","ఉపవాస గ్లూకోజ్ (mg/dL) *","உண்ணாநிலை குளுக்கோஸ் (mg/dL) *","ಉಪವಾಸ ಗ್ಲೂಕೋಸ್ (mg/dL) *","ഉപവാസ ഗ്ലൂക്കോസ് (mg/dL) *","খালি পেটে গ্লুকোজ (mg/dL) *","उपाशी ग्लुकोज (mg/dL) *","Glucosa en ayunas (mg/dL) *","Glycémie à jeun (mg/dL) *","Nüchternglukose (mg/dL) *","空腹時血糖 (mg/dL) *","空腹血糖 (mg/dL) *","공복 혈당 (mg/dL) *"],
    "Smoking status *": ["धूम्रपान की स्थिति *","ధూమపాన స్థితి *","புகைப்பிடித்தல் நிலை *","ಧೂಮಪಾನದ ಸ್ಥಿತಿ *","പുകവലി നില *","ধূমপানের অবস্থা *","धूम्रपान स्थिती *","Estado de tabaquismo *","Statut tabagique *","Raucherstatus *","喫煙状況 *","吸烟状况 *","흡연 상태 *"],
    "Non-smoker": ["धूम्रपान नहीं करते","ధూమపానం చేయరు","புகைப்பிடிப்பதில்லை","ಧೂಮಪಾನ ಮಾಡುವುದಿಲ್ಲ","പുകവലിക്കാത്തவர்","ধূমপান করেন না","धूम्रपान करत नाही","No fumador","Non-fumeur","Nichtraucher","非喫煙者","不吸烟","비흡연자"],
    "Smoker": ["धूम्रपान करते हैं","ధూమపానం చేస్తారు","புகைப்பிடிப்பவர்","ಧೂಮಪಾನಿ","പുകവലിക്കുന്നയാൾ","ধূমপায়ী","धूम्रपान करणारा","Fumador","Fumeur","Raucher","喫煙者","吸烟者","흡연자"],
    "Former smoker": ["पूर्व धूम्रपानकर्ता","గతంలో ధూమపానం చేసినవారు","முன்னாள் புகைப்பிடிப்பவர்","ಹಿಂದಿನ ಧೂಮಪಾನಿ","മുൻ പുകവലിക്കാരൻ","প্রাক্তন ধূমপায়ী","पूर्वी धूम्रपान करणारा","Exfumador","Ancien fumeur","Ehemaliger Raucher","以前喫煙していた","曾经吸烟","과거 흡연자"],
    "Alcohol use *": ["शराब का सेवन *","మద్యం వినియోగం *","மது பயன்பாடு *","ಮದ್ಯಪಾನ *","മദ്യ ഉപയോഗം *","মদ্যপানের ব্যবহার *","मद्यपान *","Consumo de alcohol *","Consommation d'alcool *","Alkoholkonsum *","飲酒 *","饮酒情况 *","음주 *"],
    "Non-alcoholic / no alcohol use": ["शराब का सेवन नहीं","మద్యం సేవించరు","மது அருந்துவதில்லை","ಮದ್ಯಪಾನ ಇಲ್ಲ","മദ്യം ഉപയോഗിക്കുന്നില്ല","মদ্যপান করেন না","मद्यपान करत नाही","No consume alcohol","Ne consomme pas d'alcool","Kein Alkoholkonsum","飲酒なし","不饮酒","음주하지 않음"],
    "Alcohol use": ["शराब का सेवन","మద్యం సేవనం","மது அருந்துதல்","ಮದ್ಯಪಾನ","മദ്യ ഉപയോഗം","মদ্যপান","मद्यपान","Consumo de alcohol","Consommation d'alcool","Alkoholkonsum","飲酒あり","饮酒","음주"],
    "Former alcohol use": ["पहले शराब का सेवन","గతంలో మద్యం సేవించారు","முன்பு மது அருந்தியவர்","ಹಿಂದೆ ಮದ್ಯಪಾನ","മുൻപ് മദ്യം ഉപയോഗിച്ചിരുന്നു","আগে মদ্যপান করতেন","पूर्वी मद्यपान","Consumo anterior de alcohol","Ancienne consommation d'alcool","Früherer Alkoholkonsum","以前飲酒していた","曾经饮酒","과거 음주"],
    "Co-morbidities *": ["सहवर्ती रोग *","సహవ్యాధులు *","உடனிருக்கும் நோய்கள் *","ಸಹರೋಗಗಳು *","ഒപ്പം ഉള്ള രോഗങ്ങൾ *","সহাবস্থানকারী রোগ *","सहव्याधी *","Comorbilidades *","Comorbidités *","Begleiterkrankungen *","併存疾患 *","合并症 *","동반 질환 *"],
    "None reported": ["कोई नहीं बताया गया","ఏవీ లేవు","எதுவும் தெரிவிக்கப்படவில்லை","ಯಾವುದೂ ವರದಿಯಾಗಿಲ್ಲ","ഒന്നും റിപ്പോർട്ട് ചെയ്തിട്ടില്ല","কিছু জানানো হয়নি","काहीही नमूद नाही","Ninguna indicada","Aucune signalée","Keine angegeben","申告なし","未报告","보고된 항목 없음"],
    "Diabetes": ["मधुमेह","మధుమేహం","நீரிழிவு","ಮಧುಮೇಹ","പ്രമേഹം","ডায়াবেটিস","मधुमेह","Diabetes","Diabète","Diabetes","糖尿病","糖尿病","당뇨병"],
    "Hypertension": ["उच्च रक्तचाप","అధిక రక్తపోటు","உயர் இரத்த அழுத்தம்","ಅಧಿಕ ರಕ್ತದೊತ್ತಡ","ഉയർന്ന രക്തസമ്മർദ്ദം","উচ্চ রক্তচাপ","उच्च रक्तदाब","Hipertensión","Hypertension","Bluthochdruck","高血圧","高血压","고혈압"],
    "Cardiovascular disease": ["हृदय संबंधी रोग","హృదయ సంబంధిత వ్యాధి","இதய நோய்","ಹೃದಯ ಸಂಬಂಧಿ ಕಾಯಿಲೆ","ഹൃദയ സംബന്ധമായ രോഗം","হৃদরোগ","हृदयविकार","Enfermedad cardiovascular","Maladie cardiovasculaire","Herz-Kreislauf-Erkrankung","心血管疾患","心血管疾病","심혈관 질환"],
    "Respiratory disease": ["श्वसन रोग","శ్వాసకోశ వ్యాధి","சுவாச நோய்","ಉಸಿರಾಟದ ಕಾಯಿಲೆ","ശ്വാസകോശ രോഗം","শ্বাসযন্ত্রের রোগ","श्वसन रोग","Enfermedad respiratoria","Maladie respiratoire","Atemwegserkrankung","呼吸器疾患","呼吸系统疾病","호흡기 질환"],
    "Kidney disease": ["गुर्दे की बीमारी","మూత్రపిండ వ్యాధి","சிறுநீரக நோய்","ಮೂತ್ರಪಿಂಡ ಕಾಯಿಲೆ","വൃക്കരോഗം","কিডনি রোগ","मूत्रपिंडाचा आजार","Enfermedad renal","Maladie rénale","Nierenerkrankung","腎臓病","肾病","신장 질환"],
    "Multiple / other conditions": ["कई / अन्य स्थितियाँ","అనేక / ఇతర పరిస్థితులు","பல / பிற நிலைகள்","ಬಹು / ಇತರ ಸ್ಥಿತಿಗಳು","ഒന്നിലധികം / മറ്റ് അവസ്ഥകൾ","একাধিক / অন্যান্য অবস্থা","अनेक / इतर स्थिती","Múltiples / otras afecciones","Multiples / autres affections","Mehrere / andere Erkrankungen","複数 / その他の状態","多种 / 其他情况","복수 / 기타 질환"],
    "Family history of cardio/metabolic disease *": ["हृदय/चयापचय रोग का पारिवारिक इतिहास *","గుండె/జీవక్రియ వ్యాధుల కుటుంబ చరిత్ర *","இதய/வளர்சிதை மாற்ற நோய் குடும்ப வரலாறு *","ಹೃದಯ/ಚಯಾಪಚಯ ಕಾಯಿಲೆಯ ಕುಟುಂಬ ಇತಿಹಾಸ *","ഹൃദയ/ഉപാപചയ രോഗങ്ങളുടെ കുടുംബ ചരിത്രം *","হৃদ্‌/বিপাকীয় রোগের পারিবারিক ইতিহাস *","हृदय/चयापचय रोगांचा कौटुंबिक इतिहास *","Antecedentes familiares de enfermedad cardiometabólica *","Antécédents familiaux de maladie cardio-métabolique *","Familiengeschichte von Herz-/Stoffwechselerkrankungen *","心臓・代謝疾患の家族歴 *","心脏/代谢疾病家族史 *","심장/대사 질환 가족력 *"],
    "No known family history": ["कोई ज्ञात पारिवारिक इतिहास नहीं","తెలిసిన కుటుంబ చరిత్ర లేదు","குடும்ப வரலாறு தெரியவில்லை","ತಿಳಿದ ಕುಟುಂಬ ಇತಿಹಾಸವಿಲ್ಲ","അറിയപ്പെടുന്ന കുടുംബചരിത്രമില്ല","জানা পারিবারিক ইতিহাস নেই","ज्ञात कौटुंबिक इतिहास नाही","Sin antecedentes familiares conocidos","Aucun antécédent familial connu","Keine bekannte Familiengeschichte","既知の家族歴なし","无已知家族史","알려진 가족력 없음"],
    "Yes": ["हाँ","అవును","ஆம்","ಹೌದು","അതെ","হ্যাঁ","होय","Sí","Oui","Ja","はい","是","예"],
    "Unknown": ["अज्ञात","తెలియదు","தெரியாது","ತಿಳಿದಿಲ್ಲ","അറിയില്ല","অজানা","अज्ञात","Desconocido","Inconnu","Unbekannt","不明","未知","알 수 없음"],
    "Pulse rate (beats/min) *": ["नाड़ी दर (धड़कन/मिनट) *","నాడి రేటు (బీట్స్/నిమిషం) *","நாடித்துடிப்பு (நிமிடம்) *","ನಾಡಿ ದರ (ಬಡಿತ/ನಿಮಿಷ) *","നാഡിമിടിപ്പ് (മിനിറ്റ്) *","নাড়ির গতি (বিট/মিনিট) *","नाडी दर (ठोके/मिनिट) *","Frecuencia del pulso (latidos/min) *","Fréquence du pouls (battements/min) *","Pulsfrequenz (Schläge/min) *","脈拍数（回/分）*","脉搏率（次/分钟）*","맥박수(회/분) *"],
    "SpO₂ (%) — optional": ["SpO₂ (%) — वैकल्पिक","SpO₂ (%) — ఐచ్ఛికం","SpO₂ (%) — விருப்பம்","SpO₂ (%) — ಐಚ್ಛಿಕ","SpO₂ (%) — ഐച്ഛികം","SpO₂ (%) — ঐচ্ছিক","SpO₂ (%) — ऐच्छिक","SpO₂ (%) — opcional","SpO₂ (%) — facultatif","SpO₂ (%) — optional","SpO₂ (%) — 任意","SpO₂ (%) — 可选","SpO₂ (%) — 선택 사항"],
    "Respiratory rate (breaths/min) — optional": ["श्वसन दर (साँस/मिनट) — वैकल्पिक","శ్వాస రేటు (శ్వాసలు/నిమిషం) — ఐచ్ఛికం","சுவாச வீதம் (நிமிடம்) — விருப்பம்","ಉಸಿರಾಟದ ದರ (ನಿಮಿಷಕ್ಕೆ) — ಐಚ್ಛಿಕ","ശ്വസന നിരക്ക് (മിനിറ്റിൽ) — ഐച്ഛികം","শ্বাসের হার (প্রতি মিনিট) — ঐচ্ছিক","श्वसन दर (श्वास/मिनिट) — ऐच्छिक","Frecuencia respiratoria (respiraciones/min) — opcional","Fréquence respiratoire (respirations/min) — facultatif","Atemfrequenz (Atemzüge/min) — optional","呼吸数（回/分）— 任意","呼吸频率（次/分钟）— 可选","호흡수(회/분) — 선택 사항"],
    "Weekly activity (minutes) — optional": ["साप्ताहिक गतिविधि (मिनट) — वैकल्पिक","వారపు శారీరక చురుకుదనం (నిమిషాలు) — ఐచ్ఛికం","வாராந்திர உடற்பயிற்சி (நிமிடங்கள்) — விருப்பம்","ವಾರದ ಚಟುವಟಿಕೆ (ನಿಮಿಷಗಳು) — ಐಚ್ಛಿಕ","ആഴ്ചയിലെ പ്രവർത്തനം (മിനിറ്റ്) — ഐച്ഛികം","সাপ্তাহিক কার্যকলাপ (মিনিট) — ঐচ্ছিক","साप्ताहिक क्रियाकलाप (मिनिटे) — ऐच्छिक","Actividad semanal (minutos) — opcional","Activité hebdomadaire (minutes) — facultatif","Wöchentliche Aktivität (Minuten) — optional","週間活動時間（分）— 任意","每周活动（分钟）— 可选","주간 활동(분) — 선택 사항"],
    "Run basic analysis": ["बुनियादी विश्लेषण चलाएँ","ప్రాథమిక విశ్లేషణ ప్రారంభించండి","அடிப்படை பகுப்பாய்வைத் தொடங்கு","ಮೂಲ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ","അടിസ്ഥാന വിശകലനം നടത്തുക","মৌলিক বিশ্লেষণ চালান","मूलभूत विश्लेषण सुरू करा","Ejecutar análisis básico","Lancer l’analyse de base","Basisanalyse starten","基本分析を実行","运行基础分析","기본 분석 실행"],
    "Reset inputs": ["इनपुट रीसेट करें","వివరాలను రీసెట్ చేయండి","உள்ளீடுகளை மீட்டமை","ಇನ್‌ಪುಟ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ","വിവരങ്ങൾ പുനഃസജ്ജമാക്കുക","ইনপুট রিসেট করুন","माहिती रीसेट करा","Restablecer datos","Réinitialiser les champs","Eingaben zurücksetzen","入力をリセット","重置输入","입력 초기화"],
    "Deep analysis — upload reports": ["गहन विश्लेषण — रिपोर्ट अपलोड करें","లోతైన విశ్లేషణ — నివేదికలను అప్‌లోడ్ చేయండి","ஆழமான பகுப்பாய்வு — அறிக்கைகளைப் பதிவேற்றவும்","ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ — ವರದಿಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ","വിശദമായ വിശകലനം — റിപ്പോർട്ടുകൾ അപ്‌ലോഡ് ചെയ്യുക","গভীর বিশ্লেষণ — রিপোর্ট আপলোড করুন","सखोल विश्लेषण — अहवाल अपलोड करा","Análisis profundo — subir informes","Analyse approfondie — téléverser les rapports","Tiefenanalyse — Berichte hochladen","詳細分析 — レポートをアップロード","深入分析 — 上传报告","심층 분석 — 보고서 업로드"],
    "Optional": ["वैकल्पिक","ఐచ్ఛికం","விருப்பம்","ಐಚ್ಛಿಕ","ഐച്ഛികം","ঐচ্ছিক","ऐच्छिक","Opcional","Facultatif","Optional","任意","可选","선택 사항"],
    "Blood reports": ["रक्त रिपोर्ट","రక్త నివేదికలు","இரத்த அறிக்கைகள்","ರಕ್ತ ವರದಿಗಳು","രക്ത റിപ്പോർട്ടുകൾ","রক্তের রিপোর্ট","रक्त अहवाल","Informes de sangre","Analyses sanguines","Blutberichte","血液検査レポート","血液报告","혈액 검사 보고서"],
    "X-ray reports/images": ["एक्स-रे रिपोर्ट/चित्र","ఎక్స్-రే నివేదికలు/చిత్రాలు","எக்ஸ்-ரே அறிக்கைகள்/படங்கள்","ಎಕ್ಸ್-ರೇ ವರದಿಗಳು/ಚಿತ್ರಗಳು","എക്സ്-റേ റിപ്പോർട്ടുകൾ/ചിത്രങ്ങൾ","এক্স-রে রিপোর্ট/ছবি","एक्स-रे अहवाल/प्रतिमा","Informes/imágenes de rayos X","Rapports/images radiographiques","Röntgenberichte/-bilder","X線レポート/画像","X光报告/图像","엑스레이 보고서/이미지"],
    "ECG reports/images": ["ECG रिपोर्ट/चित्र","ECG నివేదికలు/చిత్రాలు","ECG அறிக்கைகள்/படங்கள்","ECG ವರದಿಗಳು/ಚಿತ್ರಗಳು","ECG റിപ്പോർട്ടുകൾ/ചിത്രങ്ങൾ","ECG রিপোর্ট/ছবি","ECG अहवाल/प्रतिमा","Informes/imágenes de ECG","Rapports/images ECG","EKG-Berichte/-bilder","心電図レポート/画像","心电图报告/图像","심전도 보고서/이미지"],
    "USG reports/images": ["USG रिपोर्ट/चित्र","USG నివేదికలు/చిత్రాలు","USG அறிக்கைகள்/படங்கள்","USG ವರದಿಗಳು/ಚಿತ್ರಗಳು","USG റിപ്പോർട്ടുകൾ/ചിത്രങ്ങൾ","USG রিপোর্ট/ছবি","USG अहवाल/प्रतिमा","Informes/imágenes de ecografía","Rapports/images échographiques","Ultraschallberichte/-bilder","超音波レポート/画像","超声报告/图像","초음파 보고서/이미지"],
    "2D Echo reports/images": ["2D इको रिपोर्ट/चित्र","2D ఎకో నివేదికలు/చిత్రాలు","2D எக்கோ அறிக்கைகள்/படங்கள்","2D ಎಕೋ ವರದಿಗಳು/ಚಿತ್ರಗಳು","2D എക്കോ റിപ്പോർട്ടുകൾ/ചിത്രങ്ങൾ","2D ইকো রিপোর্ট/ছবি","2D इको अहवाल/प्रतिमा","Informes/imágenes de ecocardiograma 2D","Rapports/images d'échographie cardiaque 2D","2D-Echo-Berichte/-bilder","2D心エコーレポート/画像","二维超声心动图报告/图像","2D 심초음파 보고서/이미지"],
    "Culture / microbiology sensitivity reports": ["कल्चर / सूक्ष्मजीव संवेदनशीलता रिपोर्ट","కల్చర్ / సూక్ష్మజీవుల సున్నితత్వ నివేదికలు","கல்சர் / நுண்ணுயிர் உணர்திறன் அறிக்கைகள்","ಕಲ್ಚರ್ / ಸೂಕ್ಷ್ಮಜೀವಿ ಸಂವೇದನೆ ವರದಿಗಳು","കൾച്ചർ / മൈക്രോബയോളജി സെൻസിറ്റിവിറ്റി റിപ്പോർട്ടുകൾ","কালচার / মাইক্রোবায়োলজি সংবেদনশীলতা রিপোর্ট","कल्चर / सूक्ष्मजीव संवेदनशीलता अहवाल","Informes de cultivo/sensibilidad microbiológica","Rapports de culture/sensibilité microbiologique","Kultur-/mikrobiologische Empfindlichkeitsberichte","培養・微生物感受性レポート","培养/微生物敏感性报告","배양/미생물 감수성 보고서"],
    "Other clinical document": ["अन्य नैदानिक दस्तावेज़","ఇతర క్లినికల్ పత్రం","பிற மருத்துவ ஆவணம்","ಇತರ ವೈದ್ಯಕೀಯ ದಾಖಲೆ","മറ്റ് ക്ലിനിക്കൽ രേഖ","অন্যান্য ক্লিনিক্যাল নথি","इतर वैद्यकीय दस्तऐवज","Otro documento clínico","Autre document clinique","Anderes klinisches Dokument","その他の臨床文書","其他临床文件","기타 임상 문서"],
    "Upload reports": ["रिपोर्ट अपलोड करें","నివేదికలను అప్‌లోడ్ చేయండి","அறிக்கைகளைப் பதிவேற்று","ವರದಿಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ","റിപ്പോർട്ടുകൾ അപ്‌ലോഡ് ചെയ്യുക","রিপোর্ট আপলোড করুন","अहवाल अपलोड करा","Subir informes","Téléverser les rapports","Berichte hochladen","レポートをアップロード","上传报告","보고서 업로드"],
    "Clear selections": ["चयन साफ़ करें","ఎంపికలను తొలగించండి","தேர்வுகளை அழி","ಆಯ್ಕೆಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ","തിരഞ്ഞെടുത്തവ മായ്ക്കുക","নির্বাচন মুছুন","निवडी साफ करा","Borrar selecciones","Effacer les sélections","Auswahl löschen","選択をクリア","清除选择","선택 지우기"],
    "Upload summary": ["अपलोड सारांश","అప్‌లోడ్ సారాంశం","பதிவேற்றச் சுருக்கம்","ಅಪ್‌ಲೋಡ್ ಸಾರಾಂಶ","അപ്‌ലോഡ് സംഗ്രഹം","আপলোড সারাংশ","अपलोड सारांश","Resumen de carga","Résumé du téléversement","Upload-Zusammenfassung","アップロード概要","上传摘要","업로드 요약"],
    "Analyze uploaded reports with AI": ["AI से अपलोड की गई रिपोर्टों का विश्लेषण करें","అప్‌లోడ్ చేసిన నివేదికలను AIతో విశ్లేషించండి","பதிவேற்றிய அறிக்கைகளை AI மூலம் பகுப்பாய்வு செய்","ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ವರದಿಗಳನ್ನು AI ಮೂಲಕ ವಿಶ್ಲೇಷಿಸಿ","അപ്‌ലോഡ് ചെയ്ത റിപ്പോർട്ടുകൾ AI ഉപയോഗിച്ച് വിശകലനം ചെയ്യുക","AI দিয়ে আপলোড করা রিপোর্ট বিশ্লেষণ করুন","अपलोड केलेल्या अहवालांचे AI द्वारे विश्लेषण करा","Analizar informes cargados con IA","Analyser les rapports téléversés avec l'IA","Hochgeladene Berichte mit KI analysieren","アップロードしたレポートをAIで分析","使用AI分析上传的报告","업로드된 보고서를 AI로 분석"],
    "Checking AI configuration…": ["AI कॉन्फ़िगरेशन जाँची जा रही है…","AI కాన్ఫిగరేషన్ తనిఖీ అవుతోంది…","AI அமைப்பு சரிபார்க்கப்படுகிறது…","AI ಸಂರಚನೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…","AI ക്രമീകരണം പരിശോധിക്കുന്നു…","AI কনফিগারেশন পরীক্ষা করা হচ্ছে…","AI संरचना तपासत आहे…","Comprobando la configuración de IA…","Vérification de la configuration IA…","KI-Konfiguration wird geprüft…","AI設定を確認中…","正在检查AI配置…","AI 구성 확인 중…"],
    "AI report explanation": ["AI रिपोर्ट की व्याख्या","AI నివేదిక వివరణ","AI அறிக்கை விளக்கம்","AI ವರದಿ ವಿವರಣೆ","AI റിപ്പോർട്ട് വിശദീകരണം","AI রিপোর্টের ব্যাখ্যা","AI अहवाल स्पष्टीकरण","Explicación del informe de IA","Explication du rapport par IA","KI-Berichterklärung","AIレポートの説明","AI 报告解读","AI 보고서 설명"],
    "Ask about your screening results": ["अपने स्क्रीनिंग परिणामों के बारे में पूछें","మీ స్క్రీనింగ్ ఫలితాల గురించి అడగండి","உங்கள் பரிசோதனை முடிவுகள் பற்றி கேளுங்கள்","ನಿಮ್ಮ ತಪಾಸಣೆ ಫಲಿತಾಂಶಗಳ ಬಗ್ಗೆ ಕೇಳಿ","നിങ്ങളുടെ സ്ക്രീനിംഗ് ഫലങ്ങളെക്കുറിച്ച് ചോദിക്കുക","আপনার স্ক্রিনিং ফলাফল সম্পর্কে জিজ্ঞাসা করুন","तुमच्या तपासणी निकालांबद्दल विचारा","Pregunta sobre tus resultados","Posez des questions sur vos résultats","Fragen zu Ihren Screening-Ergebnissen","スクリーニング結果について質問","询问您的筛查结果","검사 결과에 대해 질문"],
    "Your question": ["आपका प्रश्न","మీ ప్రశ్న","உங்கள் கேள்வி","ನಿಮ್ಮ ಪ್ರಶ್ನೆ","നിങ്ങളുടെ ചോദ്യം","আপনার প্রশ্ন","तुमचा प्रश्न","Tu pregunta","Votre question","Ihre Frage","質問","您的问题","질문"],
    "Ask AI assistant": ["AI सहायक से पूछें","AI సహాయకుడిని అడగండి","AI உதவியாளரிடம் கேள்","AI ಸಹಾಯಕರನ್ನು ಕೇಳಿ","AI സഹായിയോട് ചോദിക്കുക","AI সহকারীকে জিজ্ঞাসা করুন","AI सहाय्यकाला विचारा","Preguntar al asistente de IA","Interroger l’assistant IA","KI-Assistent fragen","AIアシスタントに質問","询问 AI 助手","AI 도우미에게 질문"],
    "AI assistant answer": ["AI सहायक का उत्तर","AI సహాయకుడి సమాధానం","AI உதவியாளர் பதில்","AI ಸಹಾಯಕ ಉತ್ತರ","AI സഹായിയുടെ മറുപടി","AI সহকারীর উত্তর","AI सहाय्यकाचे उत्तर","Respuesta del asistente de IA","Réponse de l'assistant IA","Antwort des KI-Assistenten","AIアシスタントの回答","AI助手回答","AI 도우미 답변"],
    "Risk insights & counselling": ["जोखिम जानकारी और परामर्श","ప్రమాద సూచనలు మరియు సలహాలు","ஆபத்து நுண்ணறிவுகள் மற்றும் ஆலோசனை","ಅಪಾಯದ ಮಾಹಿತಿ ಮತ್ತು ಸಲಹೆ","അപകടസാധ്യതാ വിവരങ്ങളും കൗൺസിലിംഗും","ঝুঁকির তথ্য ও পরামর্শ","जोखीम माहिती आणि समुपदेशन","Información de riesgos y orientación","Informations sur les risques et conseils","Risikohinweise und Beratung","リスク情報とカウンセリング","风险信息与咨询","위험 정보 및 상담"],
    "Screening signals, contributing factors and general precautions.": ["स्क्रीनिंग संकेत, योगदान देने वाले कारक और सामान्य सावधानियाँ।","స్క్రీనింగ్ సూచనలు, ప్రభావితం చేసే అంశాలు మరియు సాధారణ జాగ్రత్తలు.","பரிசோதனை அறிகுறிகள், பங்களிக்கும் காரணிகள் மற்றும் பொதுவான முன்னெச்சரிக்கைகள்.","ತಪಾಸಣೆ ಸೂಚನೆಗಳು, ಕಾರಣಕಾರಿ ಅಂಶಗಳು ಮತ್ತು ಸಾಮಾನ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು.","സ്ക്രീനിംഗ് സൂചനകൾ, സംഭാവന ചെയ്യുന്ന ഘടകങ്ങൾ, പൊതുവായ മുൻകരുതലുകൾ.","স্ক্রিনিং সংকেত, প্রভাবক কারণ এবং সাধারণ সতর্কতা।","तपासणी संकेत, कारणीभूत घटक आणि सामान्य खबरदारी.","Señales de evaluación, factores contribuyentes y precauciones generales.","Signaux de dépistage, facteurs contributifs et précautions générales.","Screening-Signale, Einflussfaktoren und allgemeine Vorsichtsmaßnahmen.","スクリーニング指標、関連要因、一般的な注意事項。","筛查信号、影响因素和一般预防措施。","검사 신호, 기여 요인 및 일반 예방 조치."],
    "Waiting for analysis": ["विश्लेषण की प्रतीक्षा","విశ్లేషణ కోసం వేచి ఉంది","பகுப்பாய்வுக்காக காத்திருக்கிறது","ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ","വിശകലനത്തിനായി കാത്തിരിക്കുന്നു","বিশ্লেষণের জন্য অপেক্ষা করছে","विश्लेषणाची प्रतीक्षा","Esperando el análisis","En attente de l'analyse","Warten auf Analyse","分析待ち","等待分析","분석 대기 중"],
    "Illustrative screening indicator": ["उदाहरणात्मक स्क्रीनिंग संकेतक","ఉదాహరణాత్మక స్క్రీనింగ్ సూచిక","விளக்கத்திற்கான பரிசோதனை குறியீடு","ಉದಾಹರಣಾತ್ಮಕ ತಪಾಸಣೆ ಸೂಚಕ","ഉദാഹരണ സ്ക്രീനിംഗ് സൂചിക","উদাহরণমূলক স্ক্রিনিং সূচক","उदाहरणार्थ तपासणी निर्देशक","Indicador ilustrativo de evaluación","Indicateur illustratif de dépistage","Beispielhafter Screening-Indikator","参考スクリーニング指標","示例筛查指标","예시 선별 지표"],
    "Lower signal": ["कम संकेत","తక్కువ స్థాయి","குறைந்த அறிகுறி","ಕಡಿಮೆ ಸೂಚನೆ","കുറഞ്ഞ സൂചന","কম সংকেত","कमी संकेत","Señal baja","Signal faible","Niedriges Signal","低い指標","较低信号","낮은 신호"],
    "Higher signal": ["अधिक संकेत","అధిక స్థాయి","அதிக அறிகுறி","ಹೆಚ್ಚಿನ ಸೂಚನೆ","ഉയർന്ന സൂചന","উচ্চ সংকেত","अधिक संकेत","Señal alta","Signal élevé","Hohes Signal","高い指標","较高信号","높은 신호"],
    "Potential areas to review": ["समीक्षा के संभावित क्षेत्र","సమీక్షించాల్సిన అంశాలు","மதிப்பாய்வு செய்ய வேண்டிய பகுதிகள்","ಪರಿಶೀಲಿಸಬೇಕಾದ ಅಂಶಗಳು","പരിശോധിക്കേണ്ട മേഖലകൾ","পর্যালোচনার সম্ভাব্য ক্ষেত্র","पुनरावलोकनासाठी संभाव्य क्षेत्रे","Áreas potenciales para revisar","Points potentiels à examiner","Mögliche Prüfbereiche","確認すべき可能性のある項目","需要关注的潜在领域","검토할 가능성이 있는 영역"],
    "Conditions to discuss with a clinician": ["चिकित्सक से चर्चा करने योग्य स्थितियाँ","వైద్యునితో చర్చించాల్సిన పరిస్థితులు","மருத்துவருடன் விவாதிக்க வேண்டிய நிலைகள்","ವೈದ್ಯರೊಂದಿಗೆ ಚರ್ಚಿಸಬೇಕಾದ ಸ್ಥಿತಿಗಳು","ഡോക്ടറുമായി ചർച്ച ചെയ്യേണ്ട അവസ്ഥകൾ","চিকিৎসকের সঙ্গে আলোচনা করার মতো অবস্থা","डॉक्टरांशी चर्चा करण्यासारख्या स्थिती","Afecciones para comentar con un profesional","Affections à discuter avec un clinicien","Mit einem Arzt zu besprechende Zustände","医療専門家と相談する項目","需要与临床医生讨论的情况","의료진과 상의할 상태"],
    "Condition / health area": ["स्थिति / स्वास्थ्य क्षेत्र","పరిస్థితి / ఆరోగ్య అంశం","நிலை / சுகாதார பகுதி","ಸ್ಥಿತಿ / ಆರೋಗ್ಯ ಕ್ಷೇತ್ರ","അവസ്ഥ / ആരോഗ്യ മേഖല","অবস্থা / স্বাস্থ্য ক্ষেত্র","स्थिती / आरोग्य क्षेत्र","Afección / área de salud","Affection / domaine de santé","Zustand / Gesundheitsbereich","状態 / 健康分野","情况/健康领域","상태 / 건강 영역"],
    "Screening signal": ["स्क्रीनिंग संकेत","స్క్రీనింగ్ సూచన","பரிசோதனை அறிகுறி","ತಪಾಸಣೆ ಸೂಚನೆ","സ്ക്രീനിംഗ് സൂചന","স্ক্রিনিং সংকেত","तपासणी संकेत","Señal de evaluación","Signal de dépistage","Screening-Signal","スクリーニング指標","筛查信号","선별 신호"],
    "Why it was flagged": ["इसे चिह्नित क्यों किया गया","ఇది ఎందుకు గుర్తించబడింది","இது ஏன் குறிக்கப்பட்டது","ಇದನ್ನು ಏಕೆ ಗುರುತಿಸಲಾಗಿದೆ","ഇത് അടയാളപ്പെടുത്തിയത് എന്തുകൊണ്ട്","এটি কেন চিহ্নিত হয়েছে","हे का चिन्हांकित केले","Por qué se señaló","Pourquoi cela a été signalé","Warum es markiert wurde","フラグが付いた理由","标记原因","표시된 이유"],
    "Suggested follow-up": ["सुझाया गया अगला कदम","సూచించిన తదుపరి చర్య","பரிந்துரைக்கப்பட்ட அடுத்த நடவடிக்கை","ಸೂಚಿಸಿದ ಮುಂದಿನ ಕ್ರಮ","ശുപാർശ ചെയ്യുന്ന തുടർനടപടി","প্রস্তাবিত পরবর্তী পদক্ষেপ","सुचवलेली पुढील कृती","Seguimiento sugerido","Suivi suggéré","Empfohlene Nachverfolgung","推奨される次の対応","建议后续措施","권장 후속 조치"],
    "Top contributing factors": ["मुख्य योगदान देने वाले कारक","ప్రధాన ప్రభావిత అంశాలు","முக்கிய பங்களிக்கும் காரணிகள்","ಮುಖ್ಯ ಕಾರಣಕಾರಿ ಅಂಶಗಳು","പ്രധാന സംഭാവന ഘടകങ്ങൾ","প্রধান প্রভাবক কারণ","प्रमुख कारणीभूत घटक","Principales factores contribuyentes","Principaux facteurs contributifs","Wichtigste Einflussfaktoren","主な関連要因","主要影响因素","주요 기여 요인"],
    "Factor": ["कारक","కారకం","காரணி","ಅಂಶ","ഘടകം","কারণ","घटक","Factor","Facteur","Faktor","要因","因素","요인"],
    "Observed input": ["दर्ज किया गया मान","నమోదు చేసిన విలువ","உள்ளிடப்பட்ட மதிப்பு","ನಮೂದಿಸಿದ ಮೌಲ್ಯ","നൽകിയ മൂല്യം","নথিভুক্ত মান","नोंदवलेले मूल्य","Dato observado","Valeur observée","Beobachteter Wert","入力値","观察值","관찰된 입력값"],
    "Relative contribution": ["सापेक्ष योगदान","సాపేక్ష ప్రభావం","ஒப்பீட்டு பங்களிப்பு","ಸಾಪೇಕ್ಷ ಕೊಡುಗೆ","ആപേക്ഷിക സംഭാവന","আপেক্ষিক অবদান","सापेक्ष योगदान","Contribución relativa","Contribution relative","Relativer Beitrag","相対的な寄与","相对贡献","상대적 기여"],
    "Animated contribution scale": ["योगदान का एनिमेटेड पैमाना","ప్రభావం యొక్క యానిమేటెడ్ స్కేల్","பங்களிப்பு அளவுகோல்","ಕೊಡುಗೆ ಮಾಪಕ","സംഭാവനാ സ്കെയിൽ","অবদানের স্কেল","योगदान मापन","Escala animada de contribución","Échelle animée de contribution","Animierte Beitragsskala","寄与度スケール","贡献度刻度","기여도 척도"],
    "General precautions": ["सामान्य सावधानियाँ","సాధారణ జాగ్రత్తలు","பொதுவான முன்னெச்சரிக்கைகள்","ಸಾಮಾನ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು","പൊതുവായ മുൻകരുതലുകൾ","সাধারণ সতর্কতা","सामान्य खबरदारी","Precauciones generales","Précautions générales","Allgemeine Vorsichtsmaßnahmen","一般的な注意事項","一般注意事项","일반적인 주의사항"],
    "Patient counselling": ["रोगी परामर्श","రోగి సలహాలు","நோயாளர் ஆலோசனை","ರೋಗಿ ಸಲಹೆ","രോഗി കൗൺസിലിംഗ്","রোগীর পরামর্শ","रुग्ण समुपदेशन","Orientación al paciente","Conseils au patient","Patientenberatung","患者への助言","患者指导","환자 상담"],
    "Clinical safety:": ["चिकित्सकीय सुरक्षा:","వైద్య భద్రత:","மருத்துவ பாதுகாப்பு:","ವೈದ್ಯಕೀಯ ಸುರಕ್ಷತೆ:","ക്ലിനിക്കൽ സുരക്ഷ:","ক্লিনিক্যাল নিরাপত্তা:","वैद्यकीय सुरक्षितता:","Seguridad clínica:","Sécurité clinique :","Klinische Sicherheit:","医療安全：","临床安全：","임상 안전:"],
    "Screening prototype": ["स्क्रीनिंग प्रोटोटाइप","స్క్రీనింగ్ నమూనా","பரிசோதனை முன்மாதிரி","ತಪಾಸಣೆ ಮಾದರಿ","സ്ക്രീനിംഗ് മാതൃക","স্ক্রিনিং প্রোটোটাইপ","तपासणी नमुना","Prototipo de evaluación","Prototype de dépistage","Screening-Prototyp","スクリーニング試作版","筛查原型","선별 프로토타입"],
    "Analyzing…": ["विश्लेषण हो रहा है…","విశ్లేషిస్తోంది…","பகுப்பாய்வு செய்கிறது…","ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ…","വിശകലനം ചെയ്യുന്നു…","বিশ্লেষণ করা হচ্ছে…","विश्लेषण सुरू आहे…","Analizando…","Analyse en cours…","Analyse läuft…","分析中…","正在分析…","분석 중…"],
    "Profile saved.": ["प्रोफ़ाइल सहेजी गई।","ప్రొఫైల్ సేవ్ అయింది.","சுயவிவரம் சேமிக்கப்பட்டது.","ಪ್ರೊಫೈಲ್ ಉಳಿಸಲಾಗಿದೆ.","പ്രൊഫൈൽ സംരക്ഷിച്ചു.","প্রোফাইল সংরক্ষিত হয়েছে।","प्रोफाइल जतन केले.","Perfil guardado.","Profil enregistré.","Profil gespeichert.","プロフィールを保存しました。","资料已保存。","프로필이 저장되었습니다."],
    "Settings saved.": ["सेटिंग्स सहेजी गईं।","సెట్టింగ్‌లు సేవ్ అయ్యాయి.","அமைப்புகள் சேமிக்கப்பட்டன.","ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ.","ക്രമീകരണങ്ങൾ സംരക്ഷിച്ചു.","সেটিংস সংরক্ষিত হয়েছে।","सेटिंग्ज जतन केल्या.","Configuración guardada.","Paramètres enregistrés.","Einstellungen gespeichert.","設定を保存しました。","设置已保存。","설정이 저장되었습니다."]
  };

  const dictionary = {};

  Object.entries(rows).forEach(([english, values]) => {
    dictionary[english] = {};
    order.forEach((code, index) => {
      dictionary[english][code] = values[index];
    });
  });

  let currentLanguage = localStorage.getItem(STORAGE_KEY) || "en";

  if (!languages[currentLanguage]) {
    currentLanguage = "en";
  }

  /*
    Reverse dictionary:
    Converts known translated text back to its English key.
    This fixes dropdown options that are already in Telugu
    when English is selected.
  */
  const reverseDictionary = {};

  Object.entries(dictionary).forEach(([english, translations]) => {
    Object.values(translations).forEach(translated => {
      if (translated && !reverseDictionary[translated]) {
        reverseDictionary[translated] = english;
      }
    });
  });

  function translate(value) {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();

    if (!trimmed) {
      return value;
    }

    const english = dictionary[trimmed]
      ? trimmed
      : (reverseDictionary[trimmed] || trimmed);

    const translated = currentLanguage === "en"
      ? english
      : (dictionary[english]?.[currentLanguage] || english);

    return value.replace(trimmed, translated);
  }

  function originalValue(element, attribute) {
    const key = "__pha_original_" + attribute;

    if (!(key in element)) {
      element[key] = element.getAttribute(attribute);
    }

    return element[key];
  }

  function translateAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    ["placeholder", "title", "aria-label"].forEach(attribute => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(
          attribute,
          translate(originalValue(element, attribute))
        );
      }
    });
  }

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (node.parentElement?.closest("#languageSetting")) {
        continue;
      }

      if (!("__pha_original_text" in node)) {
        node.__pha_original_text = node.nodeValue;
      }

      nodes.push(node);
    }

    nodes.forEach(node => {
      node.nodeValue = translate(node.__pha_original_text);
    });
  }

  function translateSelectOptions(root) {
    root.querySelectorAll?.("option").forEach(option => {
      if (!("__pha_original_option" in option)) {
        option.__pha_original_option = option.textContent;
      }

      option.textContent = translate(
        option.__pha_original_option
      );
    });

    if (root.matches?.("option")) {
      if (!("__pha_original_option" in root)) {
        root.__pha_original_option = root.textContent;
      }

      root.textContent = translate(
        root.__pha_original_option
      );
    }
  }

  function translateElement(root) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    if (root.id === "languageSetting") {
      return;
    }

    translateTextNodes(root);
    translateAttributes(root);
    translateSelectOptions(root);

    root.querySelectorAll?.(
      "[placeholder], [title], [aria-label]"
    ).forEach(translateAttributes);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage;

    translateElement(document.body);

    const selector = document.getElementById("languageSetting");

    if (selector) {
      selector.value = currentLanguage;
    }

    const languageLabel = document.querySelector(
      "#languageSettingRow span"
    );

    if (languageLabel) {
      languageLabel.textContent = translate("Language");
    }
  }

  function setLanguage(code) {
    if (!languages[code]) {
      return;
    }

    currentLanguage = code;

    localStorage.setItem(STORAGE_KEY, code);

    applyTranslations();

    document.dispatchEvent(
      new CustomEvent("pha-language-change", {
        detail: {
          code,
          name: languages[code]
        }
      })
    );
  }

  function addLanguageSelector() {
    const settingsPanel = document.getElementById("settingsPanel");

    if (
      !settingsPanel ||
      document.getElementById("languageSetting")
    ) {
      return;
    }

    const label = document.createElement("label");

    label.className = "toggle-row";
    label.id = "languageSettingRow";

    const labelText = document.createElement("span");

    labelText.textContent = translate("Language");

    const select = document.createElement("select");

    select.id = "languageSetting";
    select.setAttribute("aria-label", "Language");

    Object.entries(languages).forEach(([code, name]) => {
      const option = document.createElement("option");

      option.value = code;
      option.textContent = name;

      select.appendChild(option);
    });

    select.value = currentLanguage;

    select.addEventListener("change", () => {
      setLanguage(select.value);
    });

    label.append(labelText, select);

    const saveButton = document.getElementById("saveSettings");

    settingsPanel.insertBefore(label, saveButton || null);
  }

  function initialize() {
    addLanguageSelector();
    applyTranslations();

    const observer = new MutationObserver(records => {
      records.forEach(record => {
        record.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateElement(node);
          } else if (node.nodeType === Node.TEXT_NODE) {
            if (!("__pha_original_text" in node)) {
              node.__pha_original_text = node.nodeValue;
            }

            node.nodeValue = translate(
              node.__pha_original_text
            );
          }
        });
      });

      addLanguageSelector();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  window.PHATranslations = {
    languages,
    dictionary,
    t: translate,
    setLanguage,
    apply: applyTranslations,
    getLanguage: () => currentLanguage,
    getLanguageName: () => languages[currentLanguage]
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );
  } else {
    initialize();
  }

})();