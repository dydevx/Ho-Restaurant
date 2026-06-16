const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a, .site-footer a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");

const orderItemsEl = document.querySelector("#order-items");
const cartPanelEl = document.querySelector(".cart-panel");
const cartItemsEl = document.querySelector("#cart-items");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const whatsappOrderEl = document.querySelector("#whatsapp-order");
const orderHintEl = document.querySelector("#order-hint");
const orderInputs = document.querySelectorAll("#customer-name, #customer-phone, #order-type, #order-note");

const whatsappNumber = "4982617393234";
const menuItems = [
  { id: "m1", category: "mittag", name: "M1. Rau Curry", description: "Saisongemüse, rote Kokosmilch-Currysoße, Reis.", price: 11 },
  { id: "m2", category: "mittag", name: "M2. Đậu Phụ Curry", description: "Gebratener Tofu, Saisongemüse, rote Kokosmilch-Currysoße, Reis.", price: 11 },
  { id: "m3", category: "mittag", name: "M3. Đậu Phụ Lá Quế", description: "Gebratener Tofu, Thai-Basilikum, Saisongemüse, Reis.", price: 11 },
  { id: "m4", category: "mittag", name: "M4. Gà Curry", description: "Hühnerbrustfilet, rote Kokosmilch-Currysoße, Saisongemüse, Reis.", price: 11 },
  { id: "m5", category: "mittag", name: "M5. Gà Nướng Sốt Xoài", description: "Gegrilltes Hühnerbrustfilet, Kokosmilch-Mangosoße, Gemüse, Reis.", price: 11 },
  { id: "m6", category: "mittag", name: "M6. Gà Hạt Điều", description: "Hühnerbrustfilet, Cashewnüsse, Saisongemüse, Reis.", price: 11 },
  { id: "m7", category: "mittag", name: "M7. Bò Xào Hạt Điều", description: "Gebratenes Rindfleisch, Cashewnüsse, Saisongemüse, Reis.", price: 12 },
  { id: "m8", category: "mittag", name: "M8. Vịt Curry", description: "Knusprige Ente, rote Kokosmilch-Currysoße, Gemüse, Reis.", price: 12 },
  { id: "m9", category: "mittag", name: "M9. Vịt Sốt Lạc", description: "Knusprige Ente, Kokosmilch-Erdnusssoße, Gemüse, Reis.", price: 12 },
  { id: "m10", category: "mittag", name: "M10. Vịt Hạt Điều", description: "Knusprige Ente, Cashewnüsse, Saisongemüse, Reis.", price: 12 },
  { id: "m11", category: "mittag", name: "M11. Tôm Curry", description: "Riesengarnelen, rote Kokosmilch-Currysoße, Gemüse, Reis.", price: 12 },
  { id: "m12", category: "mittag", name: "M12. Bún Đậu Phụ", description: "Lauwarme Reisnudeln, Tofu, Salat, Kräuter, Erdnüsse, Dressing.", price: 11 },
  { id: "m13", category: "mittag", name: "M13. Mỳ Xào Gà", description: "Gebratene Weizennudeln, Hühnerbrustfilet, Ei, Gemüse, Röstzwiebeln.", price: 11 },
  { id: "m14", category: "mittag", name: "M14. Phở Bò", description: "Reisbandnudeln, kräftige Brühe, Rindfleisch, Frühlingszwiebeln, Kräuter.", price: 12 },

  { id: "v1", category: "vorspeisen", name: "V1. Súp Miso", description: "Miso-Suppe mit Seidentofu, Seetang, Dashi und Sojabohnenpaste.", price: 4 },
  { id: "v2a", category: "vorspeisen", name: "V2. Súp Chua Ngọt mit Hühnerbrustfilet", description: "Süß-Sauer-Suppe mit Pilzen, Zitronengras und Kräutern.", price: 6 },
  { id: "v2b", category: "vorspeisen", name: "V2. Súp Chua Ngọt mit Garnelen", description: "Süß-Sauer-Suppe mit Pilzen, Zitronengras und Kräutern.", price: 7 },
  { id: "v3a", category: "vorspeisen", name: "V3. Súp Nước Dừa mit Hühnerbrustfilet", description: "Kokosmilchsuppe mit Pilzen, Zitronengras und Kräutern.", price: 6 },
  { id: "v3b", category: "vorspeisen", name: "V3. Súp Nước Dừa mit Garnelen", description: "Kokosmilchsuppe mit Pilzen, Zitronengras und Kräutern.", price: 7 },
  { id: "v4", category: "vorspeisen", name: "V4. Seafood Popcorns", description: "Gebackene Garnelen und Sepia im knusprigen Teigmantel, Chili-Mayonnaise.", price: 7 },
  { id: "v5", category: "vorspeisen", name: "V5. Edamame", description: "Junge gekochte Sojabohnen am Zweig mit Meersalz oder Shichimi Nanami.", price: 5 },
  { id: "v6", category: "vorspeisen", name: "V6. Krabbenchips", description: "Knuspriger Snack zum Knabbern.", price: 3 },
  { id: "v7", category: "vorspeisen", name: "V7. Nem Chay", description: "Vegane Frühlingsröllchen mit Gemüsefüllung, 6 Stück.", price: 4 },
  { id: "v8", category: "vorspeisen", name: "V8. Nem Việt Nam", description: "Vietnamesische Frühlingsrollen mit Dipsoße, 2 Stück.", price: 6 },
  { id: "v9", category: "vorspeisen", name: "V9. Hoành Thánh Chiên", description: "Frittierte Teigtaschen mit Garnelen-Hühnerfleisch-Füllung, 4 Stück.", price: 6 },
  { id: "v10", category: "vorspeisen", name: "V10. Gà Xiên Sa Tế", description: "Gegrillte Hühnerfleischspieße mit Erdnusssoße, 3 Stück.", price: 6 },
  { id: "v11", category: "vorspeisen", name: "V11. Há Cảo Tôm", description: "Gedämpfte Dumplings mit Garnelenfüllung, 5 Stück.", price: 7 },
  { id: "v12a", category: "vorspeisen", name: "V12. Gyoza mit Gemüsefüllung", description: "Gegrillte Teigtaschen, 5 Stück.", price: 6 },
  { id: "v12b", category: "vorspeisen", name: "V12. Gyoza mit Hühnerfleischfüllung", description: "Gegrillte Teigtaschen, 5 Stück.", price: 7 },
  { id: "v13", category: "vorspeisen", name: "V13. Ebi Tempura", description: "Riesengarnelen im Tempuramantel, Mayonnaise-Dip, 2 Stück.", price: 8 },
  { id: "v14a", category: "vorspeisen", name: "V14. Gỏi Cuốn mit Tofu", description: "Sommerrollen mit Reisnudeln, Kräutern und Hoisin-Kokosmilch-Dip.", price: 5 },
  { id: "v14b", category: "vorspeisen", name: "V14. Gỏi Cuốn mit Hühnerbrustfilet", description: "Sommerrollen mit Reisnudeln, Kräutern und Hoisin-Kokosmilch-Dip.", price: 6 },
  { id: "v14c", category: "vorspeisen", name: "V14. Gỏi Cuốn mit Garnelen", description: "Sommerrollen mit Reisnudeln, Kräutern und Hoisin-Kokosmilch-Dip.", price: 7 },
  { id: "v15", category: "vorspeisen", name: "V15. Salat Đu Đủ Tôm", description: "Grüner Papayasalat mit Riesengarnelen, Kräutern und Dressing.", price: 9 },
  { id: "v16", category: "vorspeisen", name: "V16. Salat Xoài Vịt", description: "Mango-Ente-Salat mit Kräutern, Erdnüssen und Dressing.", price: 9 },
  { id: "v17", category: "vorspeisen", name: "V17. Goma Wakame", description: "Würziger Seealgensalat mit Sesam.", price: 5 },
  { id: "v18", category: "vorspeisen", name: "V18. Bunter Salat", description: "Avocado, Erbsen, Gurke, Mango, Salat, Kräuter und Sesam-Dressing.", price: 12 },
  { id: "v19", category: "vorspeisen", name: "V19. Lachs Tatar", description: "Lachs, Avocado, Frühlingszwiebeln und Chilisoße.", price: 8 },
  { id: "v20", category: "vorspeisen", name: "V20. Thunfisch Tatar", description: "Thunfisch, Avocado, Frühlingszwiebeln und Chilisoße.", price: 9 },

  { id: "r1", category: "reisgerichte", name: "1. Rau Curry", description: "Saisongemüse in roter Kokosmilch-Currysoße, mit Reis.", price: 13 },
  { id: "r2", category: "reisgerichte", name: "2. Đậu Phụ Curry", description: "Tofu und Saisongemüse in roter Kokosmilch-Currysoße, mit Reis.", price: 14 },
  { id: "r3", category: "reisgerichte", name: "3. Đậu Phụ Sả Ớt", description: "Tofu mit Zitronengras, Chilischoten und Saisongemüse, mit Reis.", price: 14 },
  { id: "r4", category: "reisgerichte", name: "4. Đậu Phụ Hạt Điều", description: "Tofu mit Cashewnüssen und Saisongemüse, mit Reis.", price: 14 },
  { id: "r20", category: "reisgerichte", name: "20. Gà Curry", description: "Hühnerbrustfilet und Gemüse in roter Currysoße, mit Reis.", price: 15 },
  { id: "r21", category: "reisgerichte", name: "21. Gà Sốt Xoài", description: "Hühnerbrustfilet mit Gemüse in Kokosmilch-Mangosoße, mit Reis.", price: 15 },
  { id: "r22", category: "reisgerichte", name: "22. Gà Sốt Lạc", description: "Hühnerbrustfilet mit Gemüse in Kokosmilch-Erdnusssoße, mit Reis.", price: 15 },
  { id: "r23", category: "reisgerichte", name: "23. Gà Hạt Điều", description: "Hühnerbrustfilet mit Cashewnüssen und Saisongemüse, mit Reis.", price: 15 },
  { id: "r24", category: "reisgerichte", name: "24. Gà Sả Ớt", description: "Hühnerbrustfilet mit Zitronengras, Chilischoten und Gemüse, mit Reis.", price: 15 },
  { id: "r25", category: "reisgerichte", name: "25. Gà Pikant", description: "Gegrilltes Hühnerbrustfilet und Saisongemüse in pikanter Soße.", price: 15 },
  { id: "r30", category: "reisgerichte", name: "30. Bò Curry", description: "Rindfleisch mit Saisongemüse in roter Currysoße, mit Reis.", price: 16 },
  { id: "r31", category: "reisgerichte", name: "31. Bò Sả Ớt", description: "Rindfleisch mit Zitronengras, Chilischoten und Saisongemüse.", price: 16 },
  { id: "r32", category: "reisgerichte", name: "32. Bò Hạt Điều", description: "Rindfleisch mit Cashewnüssen und Saisongemüse, mit Reis.", price: 16 },
  { id: "r33", category: "reisgerichte", name: "33. Bò Tiêu Xanh", description: "Rindfleisch mit Grünpfeffer und Saisongemüse, mit Reis.", price: 16 },
  { id: "r34", category: "reisgerichte", name: "34. Dschingis Khan", description: "Rindfleisch mit Paprika und Zwiebeln in würziger BBQ-Soße.", price: 16 },
  { id: "r35", category: "reisgerichte", name: "35. Bò Teriyaki", description: "Rindfleischwürfel mit Teriyaki-Soße, Paprika und Zwiebeln.", price: 16 },
  { id: "r40", category: "reisgerichte", name: "40. Vịt Curry", description: "Knusprige Ente mit Saisongemüse in roter Currysoße, mit Reis.", price: 18 },
  { id: "r41", category: "reisgerichte", name: "41. Vịt Sốt Xoài", description: "Knusprige Ente mit Saisongemüse in Kokosmilch-Mangosoße.", price: 18 },
  { id: "r42", category: "reisgerichte", name: "42. Vịt Sốt Lạc", description: "Knusprige Ente mit Saisongemüse in Kokosmilch-Erdnusssoße.", price: 18 },
  { id: "r43", category: "reisgerichte", name: "43. Vịt Hạt Điều", description: "Knusprige Ente mit Saisongemüse und Cashewnüssen.", price: 18 },
  { id: "r44", category: "reisgerichte", name: "44. Vịt Pikant", description: "Knusprige Ente mit Saisongemüse in pikanter Soße.", price: 18 },
  { id: "r50", category: "reisgerichte", name: "50. Cá Curry", description: "Lachsfilet mit Saisongemüse in roter Currysoße, mit Reis.", price: 19 },
  { id: "r51", category: "reisgerichte", name: "51. Cá Lá Quế", description: "Lachsfilet mit Thai-Basilikum und Saisongemüse, mit Reis.", price: 19 },
  { id: "r52", category: "reisgerichte", name: "52. Cá Pikant", description: "Lachsfilet mit Saisongemüse in pikanter Soße, mit Reis.", price: 19 },
  { id: "r53", category: "reisgerichte", name: "53. Salmon Teriyaki", description: "Lachsfilet in Teriyaki-Soße mit Sesam-Topping, mit Reis.", price: 19 },
  { id: "r54", category: "reisgerichte", name: "54. Tuna Teriyaki", description: "Thunfischfilet in Teriyaki-Soße mit Sesam-Topping, mit Reis.", price: 19 },
  { id: "r60", category: "reisgerichte", name: "60. Tôm Curry", description: "Riesengarnelen mit Gemüse in roter Currysoße, mit Reis.", price: 19 },
  { id: "r61", category: "reisgerichte", name: "61. Tôm Lá Quế", description: "Riesengarnelen mit Thai-Basilikum und Saisongemüse, mit Reis.", price: 19 },
  { id: "r62", category: "reisgerichte", name: "62. Tôm Tiêu Xanh", description: "Riesengarnelen mit Grünpfeffer und Saisongemüse, mit Reis.", price: 19 },

  { id: "n70", category: "nudeln", name: "70. Bún Đậu Phụ", description: "Reisnudeln mit Tofu, Salat, Kräutern, Erdnüssen und Dressing.", price: 14 },
  { id: "n71", category: "nudeln", name: "71. Bún Nem", description: "Reisnudeln mit vietnamesischen Frühlingsrollen, Kräutern und Dressing.", price: 14 },
  { id: "n72", category: "nudeln", name: "72. Bún Bò Xào", description: "Reisnudeln mit Rindfleisch, Zwiebeln, Kräutern und Dressing.", price: 16 },
  { id: "n73", category: "nudeln", name: "73. Bún Gà Xào", description: "Reisnudeln mit Hühnerbrustfilet, Kräutern, Erdnüssen und Dressing.", price: 15 },
  { id: "n74", category: "nudeln", name: "74. Bún Vịt", description: "Reisnudeln mit knuspriger Ente, Kräutern, Erdnüssen und Dressing.", price: 18 },
  { id: "n75a", category: "nudeln", name: "75. Phở mit Tofu", description: "Reisbandnudelsuppe mit Kräutern und kräftiger Brühe.", price: 14 },
  { id: "n75b", category: "nudeln", name: "75. Phở mit Hühnerbrustfilet", description: "Reisbandnudelsuppe mit Kräutern und kräftiger Brühe.", price: 15 },
  { id: "n75c", category: "nudeln", name: "75. Phở mit Rindfleisch", description: "Reisbandnudelsuppe mit Entrecôte, Kräutern und kräftiger Brühe.", price: 16 },
  { id: "n76a", category: "nudeln", name: "76. Udon Xào mit Gemüse", description: "Gebratene Udon-Nudeln mit Saisongemüse.", price: 13 },
  { id: "n76b", category: "nudeln", name: "76. Udon Xào mit Tofu", description: "Gebratene Udon-Nudeln mit Tofu und Saisongemüse.", price: 14 },
  { id: "n76c", category: "nudeln", name: "76. Udon Xào mit Hühnerbrustfilet", description: "Gebratene Udon-Nudeln mit Hühnerbrustfilet und Saisongemüse.", price: 15 },
  { id: "n76d", category: "nudeln", name: "76. Udon Xào mit Rindfleisch", description: "Gebratene Udon-Nudeln mit Rindfleisch und Saisongemüse.", price: 16 },
  { id: "n76e", category: "nudeln", name: "76. Udon Xào mit Ente", description: "Gebratene Udon-Nudeln mit knuspriger Ente und Saisongemüse.", price: 18 },
  { id: "n76f", category: "nudeln", name: "76. Udon Xào mit Riesengarnelen", description: "Gebratene Udon-Nudeln mit Riesengarnelen und Saisongemüse.", price: 19 },
  { id: "n77a", category: "nudeln", name: "77. Udon Curry mit Gemüse", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit Saisongemüse.", price: 13 },
  { id: "n77b", category: "nudeln", name: "77. Udon Curry mit Tofu", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit Tofu.", price: 14 },
  { id: "n77c", category: "nudeln", name: "77. Udon Curry mit Hühnerbrustfilet", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit Hühnerbrustfilet.", price: 15 },
  { id: "n77d", category: "nudeln", name: "77. Udon Curry mit Rindfleisch", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit Rindfleisch.", price: 16 },
  { id: "n77e", category: "nudeln", name: "77. Udon Curry mit Ente", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit knuspriger Ente.", price: 18 },
  { id: "n77f", category: "nudeln", name: "77. Udon Curry mit Riesengarnelen", description: "Udon-Nudeln in roter Kokosmilch-Currysoße mit Riesengarnelen.", price: 19 },
  { id: "n78", category: "nudeln", name: "78. Mỳ Xào Rau", description: "Gebratene Nudeln mit Saisongemüse, Ei und Röstzwiebeln.", price: 13 },
  { id: "n79", category: "nudeln", name: "79. Mỳ Xào Đậu Phụ", description: "Gebratene Nudeln mit Tofu, Ei, Gemüse und Röstzwiebeln.", price: 14 },
  { id: "n80", category: "nudeln", name: "80. Mỳ Xào Gà", description: "Gebratene Nudeln mit Hühnerbrustfilet, Ei, Gemüse und Röstzwiebeln.", price: 15 },
  { id: "n81", category: "nudeln", name: "81. Mỳ Xào Bò", description: "Gebratene Nudeln mit Rindfleisch, Ei, Gemüse und Röstzwiebeln.", price: 16 },
  { id: "n82", category: "nudeln", name: "82. Mỳ Vịt", description: "Gebratene Nudeln mit knuspriger Ente, Ei, Gemüse und Röstzwiebeln.", price: 18 },
  { id: "n83", category: "nudeln", name: "83. Mỳ Xào Tôm", description: "Gebratene Nudeln mit Riesengarnelen, Ei, Gemüse und Röstzwiebeln.", price: 19 },

  { id: "s1", category: "sushi", name: "S1. Sake Maki", description: "Hosomaki mit Lachs, 6 Stück.", price: 4 },
  { id: "s2", category: "sushi", name: "S2. Tekka Maki", description: "Hosomaki mit Thunfisch, 6 Stück.", price: 4 },
  { id: "s3", category: "sushi", name: "S3. Ebi Maki", description: "Hosomaki mit gekochten Riesengarnelen, 6 Stück.", price: 4 },
  { id: "s4", category: "sushi", name: "S4. Kappa Maki", description: "Hosomaki mit Gurke, 6 Stück.", price: 3 },
  { id: "s5", category: "sushi", name: "S5. Avocado Maki", description: "Hosomaki mit Avocado, 6 Stück.", price: 3 },
  { id: "n1", category: "sushi", name: "N1. Sake Nigiri", description: "Nigiri mit Lachs, 2 Stück.", price: 6 },
  { id: "n2", category: "sushi", name: "N2. Maguro Nigiri", description: "Nigiri mit Thunfisch, 2 Stück.", price: 6 },
  { id: "n3", category: "sushi", name: "N3. Ebi Nigiri", description: "Nigiri mit gekochten Garnelen, 2 Stück.", price: 6 },
  { id: "n4", category: "sushi", name: "N4. Anago Nigiri", description: "Nigiri mit gegrilltem Süßwasseraal, 2 Stück.", price: 6 },
  { id: "s6", category: "sushi", name: "S6. Sake Sashimi", description: "Sashimi mit Lachs, 4 Stück.", price: 10 },
  { id: "s7", category: "sushi", name: "S7. Tuna Sashimi", description: "Sashimi mit Thunfisch, 4 Stück.", price: 12 },
  { id: "u1", category: "sushi", name: "U1. Kappa Philadelphia", description: "Inside-Out mit Gurke, Frischkäse und Sesam, 8 Stück.", price: 7 },
  { id: "u2", category: "sushi", name: "U2. Avocado Philadelphia", description: "Inside-Out mit Avocado, Frischkäse und Sesam, 8 Stück.", price: 7 },
  { id: "u3", category: "sushi", name: "U3. Green", description: "Inside-Out mit Gurke, Avocado, Frischkäse und Sesam, 8 Stück.", price: 7 },
  { id: "u4", category: "sushi", name: "U4. Alaska", description: "Inside-Out mit Lachs, Avocado und Sesam, 8 Stück.", price: 8 },
  { id: "u5", category: "sushi", name: "U5. Alaska Tobiko", description: "Inside-Out mit Lachs, Avocado und Tobiko, 8 Stück.", price: 8 },
  { id: "u6", category: "sushi", name: "U6. California", description: "Inside-Out mit Surimi, Avocado und Sesam, 8 Stück.", price: 7 },
  { id: "u7", category: "sushi", name: "U7. Salmon Philadelphia", description: "Inside-Out mit Lachs, Gurke, Frischkäse und Sesam, 8 Stück.", price: 8 },
  { id: "u8", category: "sushi", name: "U8. Boston", description: "Inside-Out mit Thunfisch, Avocado und Sesam, 8 Stück.", price: 8 },
  { id: "u9", category: "sushi", name: "U9. Ocean", description: "Inside-Out mit Thunfisch, Lachs, Avocado und Tobiko, 8 Stück.", price: 10 },
  { id: "u10", category: "sushi", name: "U10. Salmon Ebi", description: "Inside-Out mit Garnelen-Tempura und Lachs, 8 Stück.", price: 14 },
  { id: "u11", category: "sushi", name: "U11. Rainbow", description: "Inside-Out mit Avocado, Garnelen, Lachs, Thunfisch und Avocado, 8 Stück.", price: 14 },
  { id: "u12", category: "sushi", name: "U12. Sake Spezial", description: "Inside-Out mit Lachs, Avocado, Gurke und Lachs außen, 8 Stück.", price: 14 },
  { id: "u13", category: "sushi", name: "U13. Dragon", description: "Inside-Out mit Lachs, Avocado, Gurke und Avocado außen, 8 Stück.", price: 12 },
  { id: "u14", category: "sushi", name: "U14. Unagi Spezial", description: "Inside-Out mit Lachs, Avocado, Gurke und gegrilltem Aal, 8 Stück.", price: 14 },
  { id: "u15", category: "sushi", name: "U15. Veggie", description: "Inside-Out mit Avocado, Gurke, Frischkäse und Avocado außen, 8 Stück.", price: 10 },
  { id: "c1", category: "sushi", name: "C1. Salmon Crunchy Roll", description: "Frittierte Rolle mit Lachs, Avocado und Reis, 6 Stück.", price: 9 },
  { id: "c2", category: "sushi", name: "C2. Spicy Tuna Crunchy Roll", description: "Frittierte Rolle mit Thunfisch, Avocado und Reis, 6 Stück.", price: 9 },
  { id: "c3", category: "sushi", name: "C3. Black Tiger Crunchy Roll", description: "Frittierte Rolle mit Black Tiger Garnelen, Avocado und Reis, 6 Stück.", price: 9 },
  { id: "c4", category: "sushi", name: "C4. Mix Crunchy Roll", description: "Frittierte Rolle mit Thunfisch, Lachs, Avocado und Reis, 6 Stück.", price: 10 },
  { id: "c5", category: "sushi", name: "C5. Veggie Mix Crunchy Roll", description: "Frittierte Rolle mit Avocado, Gurke, Frischkäse und Reis, 6 Stück.", price: 8 },
  { id: "set1", category: "sushi", name: "Set 1", description: "Kappa Maki, Sake Maki und Tekka Maki.", price: 12 },
  { id: "set2", category: "sushi", name: "Set 2", description: "Kappa Maki, Avocado Maki und Green.", price: 12 },
  { id: "set3", category: "sushi", name: "Set 3", description: "Maki-Mix mit Alaska und California.", price: 15 },
  { id: "set4", category: "sushi", name: "Set 4", description: "Nigiri, Hosomaki, Alaska Tobiko und California.", price: 20 },
  { id: "set5", category: "sushi", name: "Set 5", description: "Maki, California, Alaska Tobiko und Sake Nigiri.", price: 27 },
  { id: "set6", category: "sushi", name: "Set 6", description: "Sake Nigiri, Sake Maki und Sake Sashimi.", price: 17 },
  { id: "set7", category: "sushi", name: "Set 7", description: "Maguro Nigiri, Tekka Maki und Tuna Sashimi.", price: 18 },
  { id: "set8", category: "sushi", name: "Set 8. Klassische Platte", description: "Sushi-Platte für 2-3 Personen.", price: 60 },
  { id: "sig1", category: "sushi", name: "Signature 1", description: "Avocado, Rettich, Tobiko, Reis, Frischkäse, Lachs außen.", price: 13 },
  { id: "sig2", category: "sushi", name: "Signature 2", description: "Avocado, Rettich, Tobiko, Thunfisch, Garnelen und Reispapier.", price: 16 },
  { id: "sig3", category: "sushi", name: "Signature 3", description: "Rettich, Lachs, Sesam, Garnelen, Gurke und Reispapier.", price: 16 },
  { id: "sig4", category: "sushi", name: "Signature 4", description: "Gurke, Lachs, Thunfisch, Rettich, Nori und Reispapier mit Sesam.", price: 14 },
  { id: "sig5", category: "sushi", name: "Signature 5", description: "Lachs, Avocado, Rettich, Garnelen, Tobiko und Chilifäden.", price: 14 },
  { id: "sig6", category: "sushi", name: "Signature 6", description: "Nigiri mit Avocado, Lachs, Reis, Nori, Frischkäse und Tobiko.", price: 11 },
  { id: "sig7", category: "sushi", name: "Signature 7", description: "Mosaic Cubes mit Reis, Lachs, Rettich und Gurke.", price: 10 },
  { id: "sig8", category: "sushi", name: "Signature 8", description: "Rolls mit Reis, Lachs, Rettich und Schnittlauch.", price: 11 },

  { id: "d100", category: "dessert", name: "100. Chuối Chiên", description: "Gebackene Bananenbällchen mit Honig und Vanilleeis.", price: 6 },
  { id: "d101", category: "dessert", name: "101. Bánh Dừa Chiên", description: "Gebackene Kokosbällchen mit Honig.", price: 6 },
  { id: "d102", category: "dessert", name: "102. Bánh Bao Hấp Nhân Hạt Sen", description: "Gedämpfte Hefeteigklöße mit Lotuspaste in Kokosmilchsoße.", price: 6 },
  { id: "d103", category: "dessert", name: "103. Mochi-Eis Platte", description: "Klebreisbällchen mit Eiscremefüllung und Früchten.", price: 7.5 },
  { id: "d104", category: "dessert", name: "104. Dreierlei Eis", description: "Yuzu Eis, Ingwer Eis und schwarzes Sesameis mit Saisonfrüchten.", price: 8 },
];

const cart = new Map();

document.body.classList.add("reveal-ready");

const formatPrice = (value) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  navPanel.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Menü öffnen");
  navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
};

const openMenu = () => {
  document.body.classList.add("nav-open");
  navPanel.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Menü schließen");
  navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
};

const renderMenuItems = (category = "mittag") => {
  if (!orderItemsEl) return;

  orderItemsEl.innerHTML = menuItems
    .filter((item) => item.category === category)
    .map(
      (item) => `
        <article class="order-item">
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="order-item-footer">
            <span class="order-price">${formatPrice(item.price)}</span>
            <button class="order-add" type="button" data-add="${item.id}" aria-label="${item.name} hinzufügen">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </article>
      `
    )
    .join("");
};

const cartEntries = () =>
  Array.from(cart.entries()).map(([id, quantity]) => ({
    ...menuItems.find((item) => item.id === id),
    quantity,
  }));

const cartTotal = () => cartEntries().reduce((total, item) => total + item.price * item.quantity, 0);

const scrollCartIntoViewOnMobile = () => {
  if (!cartPanelEl || !window.matchMedia("(max-width: 980px)").matches) return;

  requestAnimationFrame(() => {
    cartPanelEl.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};

const buildWhatsAppMessage = () => {
  const name = document.querySelector("#customer-name")?.value.trim() || "-";
  const phone = document.querySelector("#customer-phone")?.value.trim() || "-";
  const type = document.querySelector("#order-type")?.value || "Abholung";
  const note = document.querySelector("#order-note")?.value.trim() || "-";
  const items = cartEntries()
    .map((item) => `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`)
    .join("\n");

  return [
    "Hallo Ho Restaurant, ich möchte bestellen:",
    "",
    items,
    "",
    `Gesamt: ${formatPrice(cartTotal())}`,
    `Bestellart: ${type}`,
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `Adresse / Hinweis: ${note}`,
  ].join("\n");
};

const updateWhatsAppLink = () => {
  if (!whatsappOrderEl || !orderHintEl) return;

  if (!cart.size) {
    whatsappOrderEl.classList.add("disabled");
    whatsappOrderEl.setAttribute("href", "#bestellen");
    orderHintEl.textContent = "Bitte wählen Sie mindestens ein Gericht aus.";
    return;
  }

  whatsappOrderEl.classList.remove("disabled");
  whatsappOrderEl.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  orderHintEl.textContent = "Die Bestellung wird als WhatsApp-Nachricht vorbereitet.";
};

const renderCart = () => {
  if (!cartItemsEl || !cartCountEl || !cartTotalEl) return;

  const entries = cartEntries();
  const count = entries.reduce((total, item) => total + item.quantity, 0);

  cartCountEl.textContent = count;
  cartTotalEl.textContent = formatPrice(cartTotal());

  if (!entries.length) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Noch keine Gerichte ausgewählt.</p>';
    updateWhatsAppLink();
    return;
  }

  cartItemsEl.innerHTML = entries
    .map(
      (item) => `
        <div class="cart-row">
          <div>
            <h4>${item.name}</h4>
            <p>${formatPrice(item.price)} pro Portion</p>
          </div>
          <div class="cart-controls">
            <div class="cart-qty" aria-label="Menge für ${item.name}">
              <button type="button" data-decrease="${item.id}" aria-label="${item.name} reduzieren">−</button>
              <strong>${item.quantity}</strong>
              <button type="button" data-increase="${item.id}" aria-label="${item.name} erhöhen">+</button>
            </div>
            <button class="cart-remove" type="button" data-remove="${item.id}" aria-label="${item.name} entfernen">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `
    )
    .join("");

  updateWhatsAppLink();
};

const addToCart = (id, shouldShowCart = false) => {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();

  if (shouldShowCart) {
    scrollCartIntoViewOnMobile();
  }
};

const decreaseCartItem = (id) => {
  const current = cart.get(id) || 0;

  if (current <= 1) {
    cart.delete(id);
  } else {
    cart.set(id, current - 1);
  }

  renderCart();
};

navToggle.addEventListener("click", () => {
  if (navPanel.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navPanel.classList.contains("open")) {
      closeMenu();
    }
  });
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");
  const tabButton = event.target.closest(".order-tab");

  if (addButton) addToCart(addButton.dataset.add, true);
  if (increaseButton) addToCart(increaseButton.dataset.increase);
  if (decreaseButton) decreaseCartItem(decreaseButton.dataset.decrease);
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }

  if (tabButton) {
    document.querySelectorAll(".order-tab").forEach((button) => button.classList.remove("active"));
    tabButton.classList.add("active");
    renderMenuItems(tabButton.dataset.category);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navPanel.classList.contains("open")) {
    closeMenu();
  }
});

whatsappOrderEl?.addEventListener("click", (event) => {
  if (!cart.size) {
    event.preventDefault();
  }
});

orderInputs.forEach((input) => input.addEventListener("input", updateWhatsAppLink));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const showVisibleReveals = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
      item.classList.add("visible");
      revealObserver.unobserve(item);
    }
  });
};

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      document.querySelectorAll(".nav-panel a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("load", showVisibleReveals);
requestAnimationFrame(showVisibleReveals);
renderMenuItems();
renderCart();
setHeaderState();
