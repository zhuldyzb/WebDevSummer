const categories = [
  {
    id: 1,
    name: 'Toys',
    products: [
      {
        id: 1,
        name: 'LeapFrog Learning Friends 100 Words Book, Green',
        description: 'Join animal friends Turtle, Tiger and Monkey as they explore new vocabulary in the Learning Friends 100 Words Book. Explore the colorful pages and touch each picture to hear the animals say toddler-appropriate words along with exciting facts and sound effects. Immerse your child in bilingual play by sliding the language switch to hear the words, songs and instructions in Spanish. Touch the pictures to hear silly sound effects in Fun Sounds mode or press the light-up star button to hear two learning songs. Discover new vocabulary with cute learning friends! Intended for ages 18+ months. Requires 2 AA batteries. Batteries included for demo purposes only. New batteries recommended for regular use.',
        image: 'https://m.media-amazon.com/images/I/71wQb2LWUkL._AC_SL1500_.jpg',
        rating: 4.8,
        link: 'https://www.amazon.com/LeapFrog-Learning-Friends-Words-Green/dp/B07B6ZN7P8/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&dib=eyJ2IjoiMSJ9.I7RuAdeRHNnoJg3tZQ2s5NtzvVhqgtOOO0tMjKVHyKIvSO61v0t4OY13edf7VpIOY_DA04t2Rl59y9d0sHdXdhGQcSc2QgltJU1qd3JuMS7zuTEgi3vnTTouYMMpF8z31K8dVZs23iGSOJj3UZNpFljr0CevoQz8YNlrNgmIV0xVRfQNn7HAghu5uDQrfiBg1UQVsKIsGGzucFdBHgCw5MM0AbXy7dV_QBCDEZ7m7iE0WmtGhHxhlr94X3vG4av0-2mDPDLe509jXlAJB36m9pN0SzqZm9st472A_X1xZwQ.8AeLOqofC4eUSwpujJMnyhPXl_aF8s52eqr5clekWM4&dib_tag=se&keywords=learning%2Btoys&pd_rd_r=0844d95d-f3bc-469c-8068-d1f458d48691&pd_rd_w=bQ8b7&pd_rd_wg=GUrDz&pf_rd_p=b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&pf_rd_r=MBRAKBSP9Q5A2D5CJ33B&qid=1718612263&sr=8-2&th=1',
        likes: 0 
      },
      {
        id: 2,
        name: 'VTech Touch and Learn Activity Desk Deluxe (Frustration Free Packaging)',
        description: 'The Touch and Learn Activity Desk Deluxe by VTech is a 3-in-1 toddler activity center with 5 separate activity pages packed full of fun ways to learn! The desk itself features an interactive desktop and pages of activities to explore educational subjects like letters, numbers, music, colors and more. Choose from 8 expansion packs (each sold separately) to focus on a specific curriculum like nursery rhymes, reading skills, animals, and numbers. The toddler play table features 100+ vocabulary words, 20+ activities and 20+ songs. It also transforms from a toy desk and chair into an easel and a chalkboard with plenty of storage space for art supplies to encourage play and discovery. The LED display illustrates letter and number stroke order and how to draw basic shapes.',
        image: 'https://m.media-amazon.com/images/I/612vMyfT8zL._AC_SL1001_.jpg',
        rating: 4.7,
        link: 'https://www.amazon.com/VTech-Activity-Deluxe-Frustration-Packaging/dp/B01FVS6V9Y/ref=sr_1_7?_encoding=UTF8&content-id=amzn1.sym.b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&dib=eyJ2IjoiMSJ9.I7RuAdeRHNnoJg3tZQ2s5NtzvVhqgtOOO0tMjKVHyKIvSO61v0t4OY13edf7VpIOY_DA04t2Rl59y9d0sHdXdhGQcSc2QgltJU1qd3JuMS7zuTEgi3vnTTouYMMpF8z31K8dVZs23iGSOJj3UZNpFljr0CevoQz8YNlrNgmIV0xVRfQNn7HAghu5uDQrfiBg1UQVsKIsGGzucFdBHgCw5MM0AbXy7dV_QBCDEZ7m7iE0WmtGhHxhlr94X3vG4av0-2mDPDLe509jXlAJB36m9pN0SzqZm9st472A_X1xZwQ.8AeLOqofC4eUSwpujJMnyhPXl_aF8s52eqr5clekWM4&dib_tag=se&keywords=learning%2Btoys&pd_rd_r=0844d95d-f3bc-469c-8068-d1f458d48691&pd_rd_w=bQ8b7&pd_rd_wg=GUrDz&pf_rd_p=b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&pf_rd_r=MBRAKBSP9Q5A2D5CJ33B&qid=1718612263&sr=8-7&th=1',
        likes: 0 
      },
      {
        id: 3,
        name: 'LeapFrog My Own Leaptop, 2 - 4 years, Green',
        description: 'Leap into letters and animals with this perfectly sized laptop toy. Lift the lid to reveal 26 letter buttons to push and explore, each introducing its name and sound. Pressing the buttons also displays an animation of an animal that begins with that letter. Encourage kids to practice spelling their names by personalizing the little laptop. Get to work playing pretend and exchange emails with puppy pal Scout. Writing emails to you makes him happy! Play animal trivia and letter games that introduce animal facts and ask kids to choose the correct answer by pressing a letter button.',
        image: 'https://m.media-amazon.com/images/I/61quHjcEqIL._AC_SL1000_.jpg',
        rating: 4.7,
        link: 'https://www.amazon.com/LeapFrog-My-Own-Leaptop-Green/dp/B0038AJYSS/ref=sr_1_18?_encoding=UTF8&content-id=amzn1.sym.b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&dib=eyJ2IjoiMSJ9.I7RuAdeRHNnoJg3tZQ2s5NtzvVhqgtOOO0tMjKVHyKIvSO61v0t4OY13edf7VpIOY_DA04t2Rl59y9d0sHdXdhGQcSc2QgltJU1qd3JuMS7zuTEgi3vnTTouYMMpF8z31K8dVZs23iGSOJj3UZNpFljr0CevoQz8YNlrNgmIV0xVRfQNn7HAghu5uDQrfiBg1UQVsKIsGGzucFdBHgCw5MM0AbXy7dV_QBCDEZ7m7iE0WmtGhHxhlr94X3vG4av0-2mDPDLe509jXlAJB36m9pN0SzqZm9st472A_X1xZwQ.8AeLOqofC4eUSwpujJMnyhPXl_aF8s52eqr5clekWM4&dib_tag=se&keywords=learning%2Btoys&pd_rd_r=0844d95d-f3bc-469c-8068-d1f458d48691&pd_rd_w=bQ8b7&pd_rd_wg=GUrDz&pf_rd_p=b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&pf_rd_r=MBRAKBSP9Q5A2D5CJ33B&qid=1718612263&sr=8-18&th=1',
        likes: 0 
      },
      {
        id: 4,
        name: 'Fisher-Price Laugh & Learn Smart Stages Puppy',
        description: 'Fisher-Price Laugh & Learn Smart Stages Puppy is soft, cuddly, and he\'s ready to make sure learning fun never ends. This plush puppy responds to your baby\'s touch with exciting sing-along songs and phrases that introduce more than 100 first words, parts of the body, colors, shapes, and more! And because every baby develops at their own pace, Smart Stages technology lets you select the level that\'s best for your child. There are a variety of songs, sounds and phrases within each of the three levels of play. And Puppy\'s light-up, multicolor heart even twinkles along to the music!',
        image: 'https://m.media-amazon.com/images/I/71M9jsP2KTL._AC_UL640_QL65_.jpg',
        rating: 4.8,
        link: 'https://shorturl.at/W3obi',
        likes: 0 
      },
      {
        id: 5,
        name: 'LeapFrog 2-in-1 LeapTop Touch',
        description: 'The LeapFrog 2-in-1 LeapTop Touch is a laptop designed for kids that transforms into a touch screen tablet. It features a keyboard with letters and numbers, and a touch screen for interactive play. Kids can pretend to send emails, play alphabet games, and learn about animals and their sounds. The LeapTop Touch is ideal for ages 2-4 and helps develop language and communication skills.',
        image: 'https://m.media-amazon.com/images/I/61fvlT1I-EL._AC_SL1000_.jpg',
        rating: 4.5,
        link: 'https://www.amazon.com/LeapFrog-2-1-LeapTop-Touch/dp/B01MR5EF5D/ref=sr_1_12?_encoding=UTF8&content-id=amzn1.sym.b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&keywords=learning%2Btoys&qid=1718612263&sr=8-12',
        likes: 0 
      }

      
    ]

  },

  

    {
      id: 2,
      name: 'Home Essentials',
      products: [
        {
          id: 6,
          name: 'VTech KidiBeats Drum Set',
          description: 'The VTech KidiBeats Drum Set is a fun and educational toy for young children. It features three drum pads and a cymbal, each with its own unique sound for sensory development. Kids can play along to nine melodies in various styles, including rock, dance, and pop. Learning modes teach letters, numbers, and music with fun and interactive games. The drum set is great for developing fine motor skills and encouraging a love of music.',
          image: 'https://m.media-amazon.com/images/I/81CTi+EyOKL._AC_SL1500_.jpg',
          rating: 4.6,
          link: 'https://www.amazon.com/VTech-KidiBeats-Drum-Set-Frustration/dp/B00DW1JT5G/ref=sr_1_20?_encoding=UTF8&content-id=amzn1.sym.b378ed84-9ce7-4534-ab5a-a5a362ea6b4e&keywords=learning%2Btoys&qid=1718612263&sr=8-20',
          likes: 0 
        },
        {
          id: 7,
          name: 'Playskool Sit n Spin Classic Spinning Activity Toy for Toddlers',
          description: 'The Playskool Sit n Spin toy has been a classic for generations! This version of the classic spinning toy helps toddlers practice balance, coordination, and motor skills as they spin the wheel to make the base move. It is a great way for kids to burn off energy and have fun indoors. The Sit n Spin is designed for children ages 18 months and up and is perfect for solo play or playdates.',
          image: 'https://m.media-amazon.com/images/I/71ZhBXgcTTL._AC_UL640_QL65_.jpg',
          rating: 4.7,
          link: 'https://www.amazon.com/Playskool-Classic-Spinning-Activity-Toddlers/dp/B00YTWEMUO/ref=sr_1_2?crid=RR5N1J40VA8N&dib=eyJ2IjoiMSJ9.KHFs3Rnse_HmU10gLy27xu7mxKw0IeUQ3Z7m0C8k8y_USI6BnhQdTgWg6h18jKv_TCS3WyzE_I17tT23iuRa_2N5kVoK6yFXwDlFnT3XAyPTcHEswzSmKiIZrlRE5o_XBGpHMIzidNRFiYHZrMZ1WqUzV2YPK2rBVv1k-ZJAtMSYTembHskwqBKndl2NA3bPfzRFFNA-0cScCcMJW0le843hgV6cuZrM0N6cfplZDbNjae8x7jEcRVNDwnBCdxEX7SqNKp3D0w-oGytAhUq1gfFF2HCMsedNFRwIqD5x-tw.o_Wp1uvQc0yx2FPVYoU0M-fd8ZAY3DDjk_pR_tG7Iys&dib_tag=se&keywords=playskool+sit+and+spin&qid=1718613590&sprefix=playskool%2Caps%2C388&sr=8-2',
          likes: 0 
        },
        {
          id: 8,
          name: 'Fat Brain Toys Dimpl Baby Toy',
          description: 'Fat Brain Toys Dimpl is a simple yet innovative toy that will keep babies entertained for hours. It features five vibrant silicone bubbles built into a plastic frame. Push them in and out, poke them, prod them, and listen to them pop! Dimpl is perfect for sensory exploration and fine motor skills development. It\'s also great for on-the-go fun and is designed for babies and toddlers.',
          image: 'https://m.media-amazon.com/images/I/61ig9IQaxlL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          link: 'https://www.amazon.com/Fat-Brain-Toys-FA192-1-Dimpl/dp/B079CH7PLF/ref=sr_1_1?crid=1PO4U2NUGHD58&dib=eyJ2IjoiMSJ9.kW6slHA5G3TLvrMCTCMzEzE9R7l0h_Rew3_lOeu02O3JaUCsXtjoPfsTQjxeA0n6PLX6fyW7MX10O_ZOPasqqL10x0SBCicvmBxoCl7A3vmSe8z1YiiXEL7O0Ukob-iUhqRA7aQ3uY9PSupc5FBzn_Db2kNpDNyd4czcnk3CCewMUqmj696OAuW_q_UpazERJ2asorHCcF5VTI6d2N-P8mRWRU58vStkU51WAxA5aw4M0W7-NidcnoebzTLbyzvGIKUbHiQ9Vz6IuU_NCCRspFLL2cTOe1vRAzBUXFiFFZ4.8vHtCm-Ca8W0oA8AakClSaopF7krqUrL0NL1osRFHpo&dib_tag=se&keywords=Fat+Brain+Toys+Dimpl+Baby+Toy&qid=1718613414&sprefix=fat+brain+toys+dimpl+baby+toy%2Caps%2C549&sr=8-1',
          likes: 0 
        },
        { id: 9,
          name: 'KitchenAid All Purpose Kitchen Shears with Protective Sheath for Everyday use, Dishwasher Safe Stainless Steel Scissors with Comfort Grip, 8.72-Inch, Black',
          description: 'KitchenAid All Purpose Kitchen Shears with Protective Sheath for Everyday use, Dishwasher Safe Stainless Steel Scissors with Comfort Grip, 8.72-Inch, Black',

          image: 'https://shorturl.at/VDcp4',
          rating: 4.8,
          likes: 0,
          link: 'https://shorturl.at/pg6fq' },

        { id: 10,
          name: 'Blind Barber Tompkins Scented Candle - Long Lasting Soy Wax Man Candle in Barber Style ',
          description: 'Blind Barber Tompkins Scented Candle - Long Lasting Soy Wax Man Candle in Barber Style ',
          image: 'https://m.media-amazon.com/images/I/61J-68uashL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NDQ4NDE3MjM1MzQzMjc1OjE3MTg5NzE5MzM6c3BfYXRmOjMwMDEyMDEzNjE3MDcwMjo6MDo6&url=%2FBlind-Barber-Tompkins-Scented-Candle%2Fdp%2FB007XL50AY%2Fref%3Dsr_1_3_sspa%3Fcrid%3D2WXVTYU1GG553%26dib%3DeyJ2IjoiMSJ9.A5vyzDDnmdkP1Nt9YRvGWZwGQlahT9AAnLIoYhNOCIXQcQ8wlfMsns_-iqY5uNDVWKuo9yxdbnupwhZEpq-spBFfoeFxAIlx1dOhg9JxH00TyJztxhMb_JCjYMmbnhYcT2YVMThy222nRB7Hz6xHmkjkfYi-m4OtqwjaPsAQOrMYgmaWmhNAzxgju47wz8O7zWFnFYM-Fy06N4HOGVk0UVd-8Ns88pW0EOl_sASYJqZn9_DfQpZKQhT3nOMwFqRfWrXy2ulJ4UaNL6rygK2UmGwNr99Ldu0GjkGWk3Oc1VU.p1U5GNkuEHy4gBPb4w5uO5cZ_XLXnT14LdpqF5sEl_I%26dib_tag%3Dse%26keywords%3Dcandle%26qid%3D1718971932%26sprefix%3Dcandl%252Caps%252C356%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'}
      ]
    },
    {
      id: 3,
      name: 'Skincare and Makeup',
      products: [
        {
          id: 11,
          name: 'TruSkin Vitamin C Serum for Face',
          description: 'This serum is formulated with Vitamin C, hyaluronic acid, and Vitamin E for brighter, smoother, and more radiant skin. It helps reduce wrinkles, fine lines, and age spots while enhancing skin firmness and elasticity.',
          image: 'https://m.media-amazon.com/images/I/51xr2lw0Y7L._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NjYyMjE1OTUwNjA5MjM2OjE3MTg5NzE1NTQ6c3BfYXRmOjMwMDAyNTUwNzAyNDIwMjo6MDo6&url=%2FVitamin-Serum-Face-Ageing-Brightening%2Fdp%2FB07P5TMHD9%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2TZUWDO7HZ0O8%26dib%3DeyJ2IjoiMSJ9.CWwbazijSivIfgclcjfM2Bmr1XGNAhZnzyn03LUbjdUi5ODmQP_3J8WY1AthH6QjyGGHli3TtxlfL4C9W9sUMIiyH3LC2O--CxA5bNqzAsLnjUgZ6FwuOfPdLFhjeVLnc29LTOs8VWWk531cAqw3znLl5JBmAcRleKFA1GMQ_PNN2zj8j6DNKWyoMSzMTqQvEFS9oYy76qI4fuxNcFyix39unQXFSxtmbmuSWhDGSki86feiGhLs9J6OIXjgex4OKEZXL1B1Ek_-xrwx-Dg0jsMfaRQCdopgeGp4inMqm6U.QUnrE_Z_lyzS09KkSM0hzNK_5aD6gxkUifSwUVNQNCk%26dib_tag%3Dse%26keywords%3Dvitamin%2Bc%2Bface%2Bserum%26qid%3D1718971554%26sprefix%3Dvitamin%2Bc%252Caps%252C314%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 12,
          name: 'Aztec Secret Indian Healing Clay Mask',
          description: 'Made with 100% natural calcium bentonite clay, this mask is perfect for deep pore cleansing. It helps remove impurities and dirt from the skin, leaving it refreshed and smooth. Great for acne-prone skin.',
          image: 'https://m.media-amazon.com/images/I/51gWAvQb9aL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/Aztec-Secret-Cleansing-Original-Bentonite/dp/B081FK6L1G/ref=sr_1_2?crid=37NCSLGS1KA44&dib=eyJ2IjoiMSJ9.SI5KS59M99psPaatVX1pa6_32HEV5M1KI0w2cPmLZNLy-6sjd9hxElqSw9ih151Tl1gFtmdWiag2aRMUS-0uLflOuPQdRe-wHmg088FC3IDPrbEk_rQbdciqUIAMK8J1bHMG7wYQGleXFJmRpLE1L9vcRlJHCKAp7QsKB7PuiXd-zwHgdFG910WcVjR-4zQHTwHpXwbhrAY759-74ff_Nj5ASZzKgw_c6wbKYw_kfe8TC9unD64LqZ4XdS76AmALZUtQGNTZ2fHi-Ut5rUtjNGMwt7JgVhyPqy-aexXGbBM.70EE0512dAENdaZr_e5jXIsJ5-5oYETs_eiaY1vSC9U&dib_tag=se&keywords=aztec+secret+indian+healing+clay&qid=1718971583&sprefix=axtec+secr%2Caps%2C261&sr=8-2'
        },
        {
          id: 13,
          name: 'CeraVe Hydrating Facial Cleanser',
          description: 'This cleanser contains ceramides and hyaluronic acid to cleanse and hydrate the skin without stripping its natural protective barrier. It is suitable for normal to dry skin types and helps maintain moisture levels.',
          image: 'https://m.media-amazon.com/images/I/51DbQev1thL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Fragrance/dp/B01MSSDEPK/ref=sr_1_2?crid=1QX2PN0ZPPSSM&dib=eyJ2IjoiMSJ9.eLnFeu0RFaEMjQtbvjXecFc18dYIs9IAuzZkt49QxQFPSX7-jASrfQ-u-huo93e0H9ydG5cq0PZ9HUGL6V05jpXS0LASkBLIkfwwh6IvH7fatzPdwry_6D0v9C1P7Cy4ybhrGGDmANZIBDt6x_6WOBMedO6gQ5oWDVT2ofhTC2Resl0BXRk3qlN-C__5nehmCuhPoVdaamFlw5e8X6ukpZu5eBOLXyjFjX9m03CDyCJYp-yYid62xzl8tvrj01E3rxnhK5Rgwph8RwYvxlbe8L7Z-SzofEXLy8iQg1pYWY4.ZkbWAWep22xEH8LB5iqRvM7KGDm4MscywahpE_c6NP0&dib_tag=se&keywords=cerave+hydrating+cleanser&qid=1718971609&sprefix=cerave+h%2Caps%2C282&sr=8-2'
        },
        {
          id: 14,
          name: 'Maybelline New York Instant Age Rewind Eraser Dark Circles Treatment Concealer',
          description: 'This concealer is infused with goji berry and haloxyl to erase dark circles and fine lines while brightening the under-eye area. It provides a flawless finish and is suitable for all skin types.',
          image: 'https://m.media-amazon.com/images/I/713aIfJzCrL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozODk0MTYxOTQzOTQ3NDYwOjE3MTg5NzE2NDE6c3BfYXRmOjMwMDE2MTIzNjM4ODUwMjo6MDo6&url=%2FMaybelline-New-York-Instant-Treatment%2Fdp%2FB002XHC4I4%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3Q1AFGE3QA97H%26dib%3DeyJ2IjoiMSJ9.w2asp0irq2_4bigfozHOpOW_n3SKVqpJraj-S-wmAopVXGijsvWQm7SVEtVRL49gUFHUUBa_Pmyn5l6Oth_LcZya5rBSBg0qjM07JeTO4dqc28VViJ6OK4osiel_xZYMutyQscHSbn4AUSd2ytFxIf3LWr9KGp_gV0jY_kyqfNM9fmDElImFNlBSWBCGQr8c3JZLtX--rAtWvcTO1lHjX8IdRttLN-gGVAkHu8cteoqs0_l0dzfRKPsrRCb1vvb-n8UlL5fSIHkU_jBh5OZQA95-zSm4GbBbh1k_PGzAo9k.kby-1lNrtqKb2Kyda3dBm2fE2HR8QJEtJoqeq0aBXC8%26dib_tag%3Dse%26keywords%3Dmaybelline%2Bconcealer%26qid%3D1718971641%26sprefix%3Dmaybe%252Caps%252C254%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 15,
          name: 'Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel Face Moisturizer for Dry Skin',
          description: 'This moisturizer is formulated with hyaluronic acid to hydrate and nourish dry skin. It absorbs quickly and leaves the skin feeling supple and smooth. Ideal for daily use to maintain skin hydration.',
          image: 'https://m.media-amazon.com/images/I/81VaKls8qpL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3MDAyMTg4MTYyMzE5NTQ0OjE3MTg5NzE2NjY6c3BfYXRmOjMwMDEwMTUwOTkxMzIwMjo6MDo6&url=%2FNeutrogena-Hyaluronic-Antioxidants-Alcohol-free-Non-comedogenic%2Fdp%2FB07GRBQXTV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1F1S6O57A8Q2I%26dib%3DeyJ2IjoiMSJ9.bGPH78VgR7G_N-7b2vvKI2mDNrSfvtAQD-qbJtp_tR6VbaMjaf_ZixEVbFnkPDdc10LswNVl3CcWdmWMrKxUUZfB2eX9b4gSnK-P1Akqb98nfNmvEZP_-SdSk1OaK-PzRqty_F7BBO-EsHZ50LOirvEMRv2ih9KhpJAFsPs0n7uJn0_rX7D3FgUaxQhSXRI3Xtb-QQskPPucfoR7ybBNMj-AHDfhu9W96nYKChXzRUMKP5o2cHX5aWU4snf6CLLKZFJL2sM3cZfZoGi12ecmuNUGE5VnikUfyXhmXPW01Ng.IMHc7vIjskYPpC8A7fQKi7RGtNxfoBentGPPeugg6rs%26dib_tag%3Dse%26keywords%3Dneutrogena%2Bhydro%2Bboost%26qid%3D1718971666%26sprefix%3Dneutro%252Caps%252C270%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        }
      ]
    },
    {
      id: 4,
      name: 'Stationery',
      products: [
        {
          id: 16,
          name: 'Uni-ball Jetstream Retractable Ballpoint Pens',
          description: 'Smooth writing ballpoint pens with quick-drying ink that prevents smearing. Ideal for everyday writing and note-taking.',
          image: 'https://m.media-amazon.com/images/I/71Ldn7dS4aL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToxOTA2NzEwMTM5MjQyMDYwOjE3MTg5NzE3NDM6c3BfYXRmOjIwMDA2Mzk1MDc0NzA5ODo6MDo6&url=%2Funi-ball-Jetstream-Ballpoint-Point-1-0mm%2Fdp%2FB0016P6CUU%2Fref%3Dsr_1_3_sspa%3Fcrid%3DDMNR3UTXQO4B%26dib%3DeyJ2IjoiMSJ9.O9jtiCL8aY35vK8U2pv-hqrvCk5inn-T-kGU21UvE1GCeGGo_a2kg0sbuoRp8m03rfkwoxVk_yD-SiHaje3nByO6ouFiKuJx3_1fsC0fvuyZ9bg1I4KZn9O4NrG5X0KxWpxPXpXIRIklL0fYMiHO4TdA948LmIwOLFkGnR4rArgUz2PzN7Q3UgduSMFDNHfMSe51SJ58gLitEU4iYWBGqDEn2qjUOIK8KmNkdUYWHZcNEOKKmJovv5y6Ijjnhb8WVSAPA5z7TSi7K3B77DifeVL9zIFQExVBhpVGl7zJW14.OQMUCrdTLTcJWnpfcc3N7S0z1aO5emcQawGiHq5vimY%26dib_tag%3Dse%26keywords%3Dsmooth%2Bballpoint%2Bpens%26qid%3D1718971742%26sprefix%3Dsmooth%2Bbal%252Caps%252C305%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 17,
          name: 'Moleskine Classic Notebook',
          description: 'Hardcover notebook with premium paper and an elastic closure. Perfect for journaling, sketching, and note-taking.',
          image: 'https://m.media-amazon.com/images/I/81hU7gtDsZL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNjIwMzUwMjU1OTI3NjI1OjE3MTg5NzE3ODY6c3BfYXRmOjIwMDE2ODEzNjU1MDI5ODo6MDo6&url=%2FJournal-Lined-Hardcover-Notebook-Expandable%2Fdp%2FB07L4JCG7T%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3R8BB1XQVMLRZ%26dib%3DeyJ2IjoiMSJ9.qiMGr-gusl9dihHFd758PniRyU0NEgTFrrFb8WoMzl9tTLUxwYq0DmSCQY6vOTFMbszk90k03jKZXVXe5b7eh2XJHQ0heOwb8BPvHSJ14RxSlu_rwBuqItEi3veeoZBAp7fnJhCS_svEYGy5qY3PbmDLsZxqqpOhwAfniM1XB2VQiUdfrDhxQdQvn_rCbYC2o9ZOYjRV9JzpyIUG-4oVr_kseqIQbEIOwqxNi_iQvlNDDzoT-39KnpgsWZ9MphVLGdsqQ9dfNSzOcemv0FiwcJaNs7C10TdsJahqs-TnIoE.l_80L4v--vJhsewha4eqfZX5kjqZo_TOuAWmge4tTUE%26dib_tag%3Dse%26keywords%3Dmoleskine%2Bnotebooks%26qid%3D1718971786%26sprefix%3Dmoles%252Caps%252C248%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 18,
          name: 'Tombow Dual Brush Pen Art Markers',
          description: 'Water-based markers with flexible brush tips and fine tip markers for precision. Ideal for artists, illustrators, and crafters.',
          image: 'https://m.media-amazon.com/images/I/71YSqrr+KnL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNjIwMzUwMjU1OTI3NjI1OjE3MTg5NzE3ODY6c3BfYXRmOjIwMDE2ODEzNjU1MDI5ODo6MDo6&url=%2FJournal-Lined-Hardcover-Notebook-Expandable%2Fdp%2FB07L4JCG7T%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3R8BB1XQVMLRZ%26dib%3DeyJ2IjoiMSJ9.qiMGr-gusl9dihHFd758PniRyU0NEgTFrrFb8WoMzl9tTLUxwYq0DmSCQY6vOTFMbszk90k03jKZXVXe5b7eh2XJHQ0heOwb8BPvHSJ14RxSlu_rwBuqItEi3veeoZBAp7fnJhCS_svEYGy5qY3PbmDLsZxqqpOhwAfniM1XB2VQiUdfrDhxQdQvn_rCbYC2o9ZOYjRV9JzpyIUG-4oVr_kseqIQbEIOwqxNi_iQvlNDDzoT-39KnpgsWZ9MphVLGdsqQ9dfNSzOcemv0FiwcJaNs7C10TdsJahqs-TnIoE.l_80L4v--vJhsewha4eqfZX5kjqZo_TOuAWmge4tTUE%26dib_tag%3Dse%26keywords%3Dmoleskine%2Bnotebooks%26qid%3D1718971786%26sprefix%3Dmoles%252Caps%252C248%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 19,
          name: 'Scotch Desktop Tape Dispenser Silvertech',
          description: 'Stylish and compact tape dispenser that holds standard 1-inch core tape rolls. Perfect for home, office, or school use.',
          image: 'https://m.media-amazon.com/images/I/61QDiBezhkL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNjIwMzUwMjU1OTI3NjI1OjE3MTg5NzE3ODY6c3BfYXRmOjIwMDE2ODEzNjU1MDI5ODo6MDo6&url=%2FJournal-Lined-Hardcover-Notebook-Expandable%2Fdp%2FB07L4JCG7T%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3R8BB1XQVMLRZ%26dib%3DeyJ2IjoiMSJ9.qiMGr-gusl9dihHFd758PniRyU0NEgTFrrFb8WoMzl9tTLUxwYq0DmSCQY6vOTFMbszk90k03jKZXVXe5b7eh2XJHQ0heOwb8BPvHSJ14RxSlu_rwBuqItEi3veeoZBAp7fnJhCS_svEYGy5qY3PbmDLsZxqqpOhwAfniM1XB2VQiUdfrDhxQdQvn_rCbYC2o9ZOYjRV9JzpyIUG-4oVr_kseqIQbEIOwqxNi_iQvlNDDzoT-39KnpgsWZ9MphVLGdsqQ9dfNSzOcemv0FiwcJaNs7C10TdsJahqs-TnIoE.l_80L4v--vJhsewha4eqfZX5kjqZo_TOuAWmge4tTUE%26dib_tag%3Dse%26keywords%3Dmoleskine%2Bnotebooks%26qid%3D1718971786%26sprefix%3Dmoles%252Caps%252C248%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        },
        {
          id: 20,
          name: 'Post-it Super Sticky Notes',
          description: 'Colorful sticky notes with super-strong adhesive to stick practically anywhere. Great for reminders, labeling, and creative applications.',
          image: 'https://m.media-amazon.com/images/I/61Ec8zdZ1DL._AC_UL640_QL65_.jpg',
          rating: 4.8,
          likes: 0,
          link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNjIwMzUwMjU1OTI3NjI1OjE3MTg5NzE3ODY6c3BfYXRmOjIwMDE2ODEzNjU1MDI5ODo6MDo6&url=%2FJournal-Lined-Hardcover-Notebook-Expandable%2Fdp%2FB07L4JCG7T%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3R8BB1XQVMLRZ%26dib%3DeyJ2IjoiMSJ9.qiMGr-gusl9dihHFd758PniRyU0NEgTFrrFb8WoMzl9tTLUxwYq0DmSCQY6vOTFMbszk90k03jKZXVXe5b7eh2XJHQ0heOwb8BPvHSJ14RxSlu_rwBuqItEi3veeoZBAp7fnJhCS_svEYGy5qY3PbmDLsZxqqpOhwAfniM1XB2VQiUdfrDhxQdQvn_rCbYC2o9ZOYjRV9JzpyIUG-4oVr_kseqIQbEIOwqxNi_iQvlNDDzoT-39KnpgsWZ9MphVLGdsqQ9dfNSzOcemv0FiwcJaNs7C10TdsJahqs-TnIoE.l_80L4v--vJhsewha4eqfZX5kjqZo_TOuAWmge4tTUE%26dib_tag%3Dse%26keywords%3Dmoleskine%2Bnotebooks%26qid%3D1718971786%26sprefix%3Dmoles%252Caps%252C248%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1'
        }
      ]
    }
  ];
  
  export default categories;