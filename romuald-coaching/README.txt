╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║           🚀 ROMUALD COACH - GUIDE DE DÉPLOIEMENT NETLIFY 🚀                 ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Bonjour ! Ce fichier contient toutes les instructions pour mettre ton site en ligne.

C'est SUPER simple, suis les étapes ci-dessous et ton site sera live en 5 minutes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ETAPE 1 : MODIFIER LES INFORMATIONS PERSONNELLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ouvre le fichier "index.html" avec un éditeur de texte (Notepad++, VS Code, etc.)

cherche la section <script> en bas du fichier (juste avant </body>)

Modifie ces valeurs dans la section CONFIG :

    const CONFIG = {
        coachName: "Romuald",          ← Ton prénom
        calendlyLink: "TON_LIEN_CALENDLY_ICI",  ← TON LIEN CALENDLY (TRÈS IMPORTANT)
        instagram: "romuald_coach",    ← Ton pseudo Instagram (sans @)
        whatsapp: "33612345678",       ← Ton numéro avec code pays
        email: "contact@romuald-coach.com"  ← Ton email
    };

COMMENT TROUVER TON LIEN CALENDLY :
1. Va sur https://calendly.com
2. Connecte-toi ou crée un compte gratuit
3. Crée un type d'événement (ex: "Appel découverte 30min")
4. Clique sur le lien de l'événement
5. Copie l'URL et colle-la dans calendlyLink

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 ETAPE 2 : AJOUTER TES PHOTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ouvre le dossier "images" et ajoute ces photos :

┌─────────────────────────────────────────────────────────────────────────────┐
│ IMAGE                        │ TAILLE RECOMMANDÉE    │ CE QU'IL FAUT METTRE │
├─────────────────────────────────────────────────────────────────────────────┤
│ coach-photo.jpg              │ 400x400px (carré)    │ Ta photo de profil   │
│ coach-about.jpg              │ 600x800px (portrait) │ Photo de toi coaching│
│ hero-bg.jpg                  │ 1920x1080px          │ Photo gym/sport      │
│ avant-client1.jpg            │ 400x500px            │ Photo AVANT client 1 │
│ apres-client1.jpg            │ 400x500px            │ Photo APRÈS client 1 │
│ avant-client2.jpg            │ 400x500px            │ Photo AVANT client 2 │
│ apres-client2.jpg            │ 400x500px            │ Photo APRÈS client 2 │
│ avant-client3.jpg            │ 400x500px            │ Photo AVANT client 3 │
│ apres-client3.jpg            │ 400x500px            │ Photo APRÈS client 3 │
│ testimonial-client1.jpg      │ 80x80px (carré)      │ Photo client 1       │
│ testimonial-client2.jpg      │ 80x80px (carré)      │ Photo client 2       │
│ testimonial-client3.jpg      │ 80x80px (carré)      │ Photo client 3       │
│ testimonial-client4.jpg      │ 80x80px (carré)      │ Photo client 4       │
│ favicon.ico                  │ 16x16 ou 32x32px     │ Ton logo/miniature   │
└─────────────────────────────────────────────────────────────────────────────┘

CONSEILS POUR LES PHOTOS :
- Utilise des photos de bonne qualité (最小 72 DPI)
- Format: JPG ou PNG de préférence
- Pour les avant/après : essaie d'avoir le même angle et éclairage
- Tu peux utiliser ton téléphone pour prendre les photos

SI TU N'AS PAS ENCORE DE PHOTOS CLIENTS :
Les photos placeholder (floues) seront remplacées automatiquement par des images
de démonstration. Tu pourras les remplacer plus tard.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ETAPE 3 : DÉPLOYER SUR NETLIFY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Va sur https://www.netlify.com et crée un compte gratuit (ou connecte-toi)

2. Une fois connecté, tu arrives sur ton tableau de bord

3. Clique sur "Add new site" → "Deploy manually"

4. Glisse-dépose le dossier COMPLET "romuald-coaching" dans la zone

5. Attends 30 secondes... Et BIM ! Ton site est en ligne ! 🎉

6. Netlify te donne une URL temporaire du style : romantic-einstein-12345.netlify.app

7. Pour avoir ton propre nom de domaine (ex: www.romuald-coach.com) :
   - Achète un domaine (sur Namecheap, OVH, etc.)
   - Va dans Site settings → Domain management
   - Ajoute ton domaine personnalisé

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 ÉTAPE 4 : PERSONNALISER LES COULEURS (OPTIONNEL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Si tu veux changer les couleurs du site, ouvre "styles.css"

Cherche la section ":root" au début du fichier et modifie :

    --primary: #FF4D00;        ← Couleur principale (boutons, accents)
    --primary-dark: #E64500;   ← Couleur principale foncée
    --bg-dark: #0F0F1A;        ← Couleur de fond principale
    --bg-card: #1A1A2E;        ← Couleur des cartes

Tu peux utiliser https://coolors.co pour trouver de belles combinaisons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 ÉTAPE 5 : MODIFIER LES TEXTES (OPTIONNEL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tous les textes du site sont directement dans "index.html".

Tu peux modifier :
- Le titre principal (h1 dans la section hero)
- Les descriptions de chaque section
- Les tarifs (section #tarifs)
- Les questions FAQ
- Les textes des témoignages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 ÉTAPE 6 : TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROBLÈME : Le site ne s'affiche pas correctement
→ Vérifie que tous les fichiers sont dans le même dossier
→ Vérifie que index.html est bien nommé (pas index.html.txt)

PROBLÈME : Les images ne chargent pas
→ Vérifie que les images sont dans le dossier "images"
→ Vérifie que les noms de fichiers sont exacts (respecte majuscules/minuscules)

PROBLÈME : Le lien Calendly ne fonctionne pas
→ Vérifie que tu as bien mis ton lien dans CONFIG
→ Le lien doit commencer par "https://calendly.com/..."

PROBLÈME : Le site est lent
→ Optimize tes images sur https://tinypng.com avant de les ajouter
→ Utilise le format WebP pour de meilleures performances

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ VÉRIFICATION FINALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Avant de déployer, vérifie que tu as :

□ Modifié le lien Calendly dans CONFIG
□ Ajouté ta photo de profil (coach-photo.jpg)
□ Ajouté une photo pour la section About (coach-about.jpg)
□ Vérifié que le fichier index.html n'a pas d'erreur de syntaxe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 CONSEILS BONUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Ajoute Google Analytics :
   - Crée un compte sur https://analytics.google.com
   - Ajoute le code de suivi dans le <head> de index.html

2. Ajoute un pixel Facebook :
   - Crée un compte Business Manager
   - Ajoute le code dans le <head>

3. Configure le SSL (automatique sur Netlify) :
   - Netlify active automatiquement le HTTPS
   - Ton site sera sécurisé automatiquement

4. Prépare ton contenu pour le SEO :
   - Remplace les textes génériques par tes propres témoignages
   - Ajoute tes vraies stats (+100 clients, etc.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 C'EST PARTI !
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Si tu suis ces étapes correctement, ton site sera en ligne en moins de 10 minutes.

Si tu as des questions, n'hésite pas à demander de l'aide !

Bon courage pour ta transformation digitale 💪

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Version du template : 1.0
Dernière mise à jour : Janvier 2025
Créé avec ❤️ pour Romuald Coach