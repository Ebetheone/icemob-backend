const Product = require("../../../model/Product.model");
const productsSeed = [
  {
    name: "BOHEMIAN RHAPSODY",
    img: [{ name: "/assets/images/bohemian.jpg" }],
    price: 160000,
    isOnSale: true,
    salePercentage: 15,
    type: [{ name: "Пянз" }],
    category: [{ name: "SOUNDTRACK" }],
    description: "BOHEMIAN RHAPSODY Original Soundtrack",
  },
  {
    name: "МӨНХ ТУНХ",
    img: [{ name: "/assets/images/monkhTunkh.jpg" }],
    price: 150000,
    isOnSale: true,
    salePercentage: 20,
    type: [{ name: "Пянз" }],
    category: [{ name: "KIDS" }],
    description:
      "Таны худалдан авсан пянзны 10.000₮ “ЗҮРХ МАРТАХГҮЙ” төсөл -д ❤️ хандив болон очих юм. ",
  },
  {
    name: "'SCARFACE' 1LP",
    img: [{ name: "/assets/images/scarface.jpg" }],
    price: 130000,
    type: [{ name: "Пянз" }],
    category: [{ name: "SOUNDTRACK" }],
    description: "“SCARFACE” 1LP",
  },
  {
    name: "XXXTENTACION | “?” 1LP",
    img: [{ name: "/assets/images/xxtentacion.jpg" }],
    price: 140000,
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "XXXTENTACION | “?”",
  },
  {
    img: [{ name: "/assets/images/louis.jpg" }],
    price: 150000,
    name: "LOUIS & THE GOOD BOOK",
    type: [{ name: "Пянз" }],
    category: [{ name: "JAZZ" }],
    description: "LOUIS ARMSTRONG  with the SY OLIVER CHOIR and THE ALL STARS",
  },
  {
    img: [{ name: "/assets/images/cuz.jpg" }],
    price: 130000,
    name: "“CUZ I LOVE YOU” 1LP",
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "LIZZO | “CUZ I LOVE YOU”",
  },
  {
    img: [{ name: "/assets/images/doggfather.jpg" }],
    price: 130000,
    name: "“THA DOGGFATHER” 2LP",
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "SNOOP DOGGY DOGG - “THA DOGGFATHER” ",
  },
  {
    img: [{ name: "/assets/images/trippie.jpg" }],
    price: 150000,
    name: "TRIPPIE REDD: !",
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    isOnSale: true,
    salePercentage: 30,
    description: "TRIPPIE REDD",
  },
  {
    img: [{ name: "/assets/images/after-the-end.jpg" }],
    price: 100000,
    name: "AFTER THE END",
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: "MERCHANDISE - AFTER THE END",
  },
  {
    img: [{ name: "/assets/images/dreams.jpg" }],
    price: 160000,
    name: "DREAMS: THE COLLECTION",
    isOnSale: true,
    salePercentage: 20,
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: "THE CRANBERRIES | DREAMS: THE COLLECTION",
  },
  {
    img: [{ name: "/assets/images/goodbye.jpg" }],
    price: 150000,
    name: "GOODBYE & GOOD RIDDANCE",
    isOnSale: true,
    salePercentage: 50,
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "JUICE WRLD | GOODBYE & GOOD RIDDANCE",
  },
  {
    img: [{ name: "/assets/images/backToBlack.jpg" }],
    price: 150000,
    name: "BACK TO BLACK",
    type: [{ name: "Пянз" }],
    category: [{ name: "JAZZ" }],
    description: "AMY WINEHOUSE | BACK TO BLACK",
  },
  {
    img: [{ name: "/assets/images/batOut.jpg" }],
    price: 140000,
    name: "BAT OUT OF HELL",
    type: [{ name: "Пянз" }],
    category: [{ name: " ROCK" }],
    description: "MEAT LOAF | BAT OUT OF HELL",
  },
  {
    img: [{ name: "/assets/images/blizzard.jpg" }],
    price: 150000,
    name: "BLIZZARD OF OZZ",
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: "OZZY OSBOURNE | BLIZZARD OF OZZ",
  },
  {
    img: [{ name: "/assets/images/kingOfPop.jpg" }],
    price: 140000,
    name: "KING OF POP",
    type: [{ name: "Пянз" }],
    category: [{ name: "POP" }],
    description: "MICHAEL JACKSON | KING OF POP",
  },
  {
    img: [{ name: "/assets/images/V.jpg" }],
    price: 160000,
    name: "V 1LP",
    isOnSale: true,
    salePercentage: 35,
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: "MAROON 5 | V (The Fifth Studio Album)",
  },
  {
    img: [{ name: "/assets/images/sadButTrue.jpg" }],
    price: 200000,
    name: "SAD BUT TRUE / WOLF TOTEM + MAGAZINE ",
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: "THE HU | SAD BUT TRUE / WOLF TOTEM",
  },
  {
    img: [{ name: "/assets/images/masterPiece.jpg" }],
    price: 400000,
    name: "MENDE’S MASTERPIECE",
    type: [{ name: "Пянз" }],
    category: [{ name: "МОНГОЛ" }],
    description: "MENDBAYAR. J (THROAT SINGER) | MENDE’S MASTERPIECE",
  },
  {
    img: [{ name: "/assets/images/never.jpg" }],
    price: 200000,
    name: "NEVER",
    type: [{ name: "Пянз" }],
    category: [{ name: "POP" }],
    description:
      "AMRA - NEVER SIDE A: A1. Farewell ft. Mika D A2. Endless ft. The Horizon A3. Game of Love ft. Uuganaa A4. With You ft. Mint Ulaanbaatar A5. Take Me There ft. Mint Ulaanbaatar SIDE B: B1. Close To You ft. b1shrel B2. Mine Forever ft. AudioTreats B3. Été ft. Gr8Khan B4. Never ft. Man On The Moon B5. All Night ft. Panchi & Maexst",
  },
  {
    img: [{ name: "/assets/images/shockwave.jpg" }],
    price: 140000,
    name: "SHOCKWAVE",
    type: [{ name: "Пянз" }],
    category: [{ name: "ELECTRONIC" }],
    description: "MARSHMELLO | SHOCKWAVE",
  },
  {
    img: [{ name: "/assets/images/forTheThrone.jpg" }],
    price: 140000,
    name: "FOR THE THRONE",
    type: [{ name: "Пянз" }],
    category: [{ name: "SOUNDTRACK" }],
    description: "GAME OF THRONES | FOR THE THRONE | SOUNDTRACK ",
  },
  {
    img: [{ name: "/assets/images/culture3.jpg" }],
    price: 180000,
    name: "CULTURE III",
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "MIGOS | CULTURE III",
  },
  {
    img: [{ name: "/assets/images/lauryn.jpg" }],
    price: 160000,
    name: "THE MISEDUCATION OF LAURYN HILL",
    type: [{ name: "Пянз" }],
    category: [{ name: "SOUL" }, { name: "R&B" }],
    description: " LAURYN HILL THE MISEDUCATION OF LAURYN HILL",
  },
  {
    img: [{ name: "/assets/images/amazing.jpg" }],
    price: 130000,
    name: "THE AMAZING",
    type: [{ name: "Пянз" }],
    category: [{ name: "JAZZ" }],
    description: "NINA SIMONE | THE AMAZING",
  },
  {
    img: [{ name: "/assets/images/getLifted.jpg" }],
    price: 130000,
    name: "GET LIFTED",
    type: [{ name: "Пянз" }],
    category: [{ name: "SOUL" }, { name: "R&B" }],
    description: "JOHN LEGEND | GET LIFTED",
  },
  {
    img: [{ name: "/assets/images/losGrandes.jpg" }],
    price: 140000,
    name: "LOS GRANDES ÉXITOS EN ESPAÑOL",
    type: [{ name: "Пянз" }],
    category: [{ name: "HIP HOP" }],
    description: "CYPRESS HILL | LOS GRANDES ÉXITOS EN ESPAÑOL",
  },
  {
    img: [{ name: "/assets/images/dooWop.jpg" }],
    price: 160000,
    name: "DOO WOP MEMORIES",
    type: [{ name: "Пянз" }],
    category: [{ name: "CLASSIC" }],
    description: "VARIOUS ARTISTS - DOO WOP MEMORIES",
  },
  {
    img: [{ name: "/assets/images/greenDay.jpg" }],
    price: 120000,
    name: "GREEN DAY NIMROD",
    type: [{ name: "Пянз" }],
    category: [{ name: "ROCK" }],
    description: " GREEN DAY NIMROD,  VINYL ALBUM ",
  },
  {
    img: [{ name: "/assets/images/merryChristmas.jpg" }],
    price: 120000,
    name: "MERRY CHRISTMAS",
    type: [{ name: "Пянз" }],
    category: [{ name: "JAZZ" }],
    description: "BING CROSBY - MERRY CHRISTMAS",
  },
  {
    img: [{ name: "/assets/images/doloonTerbum.jpg" }],
    price: 270000,
    name: "ДОЛООН ТЭРБУМ",
    type: [{ name: "Пянз" }],
    category: [{ name: "МОНГОЛ" }],
    description:
      "ХУРД хамтлагийн 30 жилийн ойд зориулан гаргасан Долоон Тэрбум пянз гурван өнгөний сонголттойгоор худалдаанд гарлаа.",
  },
  {
    img: [{ name: "/assets/images/billie.jpg" }],
    price: 120000,
    name: "BILLIE HOLIDAY STORY",
    type: [{ name: "Пянз" }],
    category: [{ name: "BLUES" }],
    description: "THE BILLIE HOLIDAY STORY",
  },
  {
    img: [{ name: "/assets/images/adele25.jpg" }],
    price: 140000,
    name: "'ADELE 25' 1LP ",
    type: [{ name: "Пянз" }],
    category: [{ name: "POP" }],
    description: "ADELE | ADELE 25",
  },

  // Хямдарсан//
  {
    img: [{ name: "/assets/images/20Z0.jpg" }],
    price: 130000,
    name: `SASH | "20Z0"`,
    isOnSale: true,
    salePercentage: 15,
    type: [{ name: "Пянз" }],
    category: [{ name: "МОНГОЛ" }],
    description:
      "SASH | 20Z0 , Рэппэр SASH -ийн 20Z0 9 дуунаас бүрдсэн 10 инч пянз худалдаанд гарлаа. A SIDE : INTRO NERGUI DUU MUNGU NO LOVE B SIDE : RARI FRIDAY II 6 OUTRO BONUS TRACK : ERH DURAARAA GALZUU",
  },
  {
    img: [{ name: "/assets/images/liveForever.jpg" }],
    price: 170000,
    name: "LIVE FOREVER BOX SET",
    isOnSale: true,
    salePercentage: 18,
    type: [{ name: "Пянз" }],
    category: [{ name: "REGGAE" }],
    description:
      "BOB MARLEY LIVE FOREVER BOOK LP   3LP 2CD   CONDITION : 3LP Пянзны эхлэл хэсэг хэдэн секунд нь асуудалтай.   2CD Сайн төлөвтэй.",
  },

  // Пянз тоглуулагч//
  {
    img: [{ name: "/assets/images/fellazBrush.jpg" }],
    price: 25000,
    name: "FELLAZ• BRUSH",
    type: [{ name: "Пянзны хэрэгсэл" }],
    category: [{ name: "Пянзны хэрэгсэл" }],
    description:
      "FELLAZ • Карбон фибер пянз цэвэрлэгч Цахилгаанждаггүй материалаар хийгдсэн бөгөөд нэг сая гаруй карбон утас пянзны ховил руу гүн орж тоос шороог бүрэн цэвэрлэнэ. Өдөр тутам пянзаа цэвэрлэснээр чанартай дуугаралтыг дэмжиж, пянзны эдэлгээг уртасгана.",
  },
];

const ProductCreate = async (req, res) => {
  // const { name, description, img, category, price, isOnSale, saleAmount } =
  // req.body;
  productsSeed.forEach((product) => {
    if (product.isOnSale)
      product.saleAmount = (product.price * product.salePercentage) / 100;
  });
  // const _data = {
  //   name: productsSeed.name,
  //   description: productsSeed.description,
  //   category: productsSeed.category,
  //   price: productsSeed.price,
  // };
  // if (img || productsSeed.img) _data.img = productsSeed;
  // if (isOnSale) _data.isOnSale = isOnSale;
  // if (saleAmount) _data.saleAmount = saleAmount;

  // if (req.body) {
  //   await Product.create({ _data });
  // } else await Product.insertMany(productsSeed);

  const fella = await Product.findOneAndUpdate(
    {
      _id: "6391cbf7f5e4e930a13959d5",
    },
    {
      price: 25000,
      name: "FELLAZ• BRUSH",
      type: [{ name: "Пянзны хэрэгсэл" }],
      img: [{ name: "/assets/images/fellazBrush.jpg" }],
      category: [{ name: "Пянзны хэрэгсэл" }],
      description:
        "FELLAZ • Карбон фибер пянз цэвэрлэгч Цахилгаанждаггүй материалаар хийгдсэн бөгөөд нэг сая гаруй карбон утас пянзны ховил руу гүн орж тоос шороог бүрэн цэвэрлэнэ. Өдөр тутам пянзаа цэвэрлэснээр чанартай дуугаралтыг дэмжиж, пянзны эдэлгээг уртасгана.",
    }
  );
  res.status(200).json({
    description: "Successfully created Product",
    fella,
  });
};

module.exports = {
  ProductCreate,
};
