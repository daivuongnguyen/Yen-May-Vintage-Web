import { ContentData } from './types';

export const INITIAL_CONTENT: ContentData = {
  hero: {
    est: "Est. 2024 • Da Nang",
    title: "Fashion Curators, Not Just Sellers.",
    subtitle: "We do the hard work of hunting, treating, and styling so you can effortlessly enjoy the art of global vintage fashion.",
    cta: "Explore Collection",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2QLZhb87tbX4BKLW9RzPlZk8OSH_CKtFEjH9dMG3eUlk5Yr0cuDnmRZmkuapa5WtjKlnEkBBi4SequhJEYyeIjT2Rw7Hwael1lxwOqNq6k2dC6K4FJ5NZ438UIWInHOZ3M8J9AobLlVLB1ffb0q0i3LZVctsKPYcOal6KBVomR4g_WQDUre6L2a9zGaM6tbFoF1tvkTagp3v6hzXEWypHAosW_Xb4ThmXlWLNCWMDOJDkyokQv6B7oN0iOp7yIWsWbb0M4Dr2O-U"
  },
  brandHeart: {
    subtitle: "The Philosophy",
    title: "Hand-picked. Hand-treated. One-of-a-kind.",
    description: "Yen May is a collection, not a warehouse. We scour international markets for branded Vintage and Y2K pieces that tell a story.",
    feature1Title: "Curated Selection",
    feature1Text: "Strictly no bulk bales. Every single item is chosen for its unique character and quality.",
    feature2Title: "Professionally Treated",
    feature2Text: "Washed, steamed, and mended. Ready to wear the moment it arrives at your door.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKNNOm2fspgKBWVrjCIuCiME3vI_k_GcFK01-4tvu_ybcMZJKDJNLJUy04aIOf70qGJLLcE15U_PnQU1N-PkodBtYjj0KL11DKKf4HdSY_slQQi4JwfZbwgede7N5jRoe84h1e9ODAPR03WqsGZeL7CMllLAepU18n9562ytQ7KQOUfQY574fYzufAUY9W3WwhWJe1qg4W59NoA4yABpNAsGNTbq82N6EYVaQHZ_g0JXRA2sWixnSxF8qnw9seo5oH9pxfed78ZwI"
  },
  gallery: {
    subtitle: "The Collection",
    title: "Gems of the Week",
    description: "We are not a standard e-commerce store. Think of this as a gallery. See something you love?",
    cta: "Get your Fashion Passport via DM",
    items: [
      { id: '1', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClneMtQMb2kqrHx-SLOiyvqouorQ0dxgNmAQO5xIKtxVSPQN_gDNrGGVeEfUi-1FDd3NDLKAz5oXd04RlDsXK9idxpl_1g_iIwwTvLPge9mxJv_z8USOaZ3sVgAz9IZVY94dwjRY9JPre8wFARoE1WlKuZ5KZAPCFL_i26miJSQG4FPH8MUSkqRghgJSS_co-o5NZiE8B9wuoRRsbaMDsee4tiHrKCR0zA0k41YdV47YS7p8VBWfYYOIW0UK33hEaW7jzubrMKT-Q", title: "Silk Floral Midi", status: "Available • Size M" },
      { id: '2', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzTIZ6o9VL3BvfiMV7ZKB7LE1n-gTde201O4XTzHKRqg_Ic7u2m5soVrnQKgCxGx4LXRSokJYFR7xgJCVaJ8ElgXkFG_DDci4rh4a0xpjsI0HsvPG6bJqmSrUGUtpkjhV0bJ53T1neHkA6jbB74ZkmTIj-SBkBt5toj0K05FFjcnZMHw1idteSWNP28ktH2UL4WtDPATLMRkj1n-9GFiAsRuwB-CEgPP6qK-F6gWzfbV_BvUcVlIDR5oSuSTo2FZZN4zk3DGCMMgU", title: "90s Biker Jacket", status: "Reserved • Size L" },
      { id: '3', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6wLP57hmZ3FHT4i20Ic2UkOY4D01857tXcwmfk-wIEwvYyi78gUnwCUa1_wUgz575UfYhJNK1u8zFx6CbHFUfpF6UfZQ45EKR_-NIXBmCMRAjZDR8nlKPiZ3O6d2LlpJoTxyls33nV8WOPIDULeJDZjsneeUuYJngvu5Q-KdGvm9R_AGp2gjNqCGwuu8TXzcO4Uc7ZlJd2ONrEJ_9cK3tJ6c-ck7GEgVm4DTzKdkUI7LQETuGFog_ZcszAem5TAcShZ0UDedwDyc", title: "Coogi Style Knit", status: "Available • Size XL", tag: "Rare Find" },
      { id: '4', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzTIZ6o9VL3BvfiMV7ZKB7LE1n-gTde201O4XTzHKRqg_Ic7u2m5soVrnQKgCxGx4LXRSokJYFR7xgJCVaJ8ElgXkFG_DDci4rh4a0xpjsI0HsvPG6bJqmSrUGUtpkjhV0bJ53T1neHkA6jbB74ZkmTIj-SBkBt5toj0K05FFjcnZMHw1idteSWNP28ktH2UL4WtDPATLMRkj1n-9GFiAsRuwB-CEgPP6qK-F6gWzfbV_BvUcVlIDR5oSuSTo2FZZN4zk3DGCMMgU", title: "Distressed Denim", status: "Sold Out • Size M" },
      { id: '5', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClneMtQMb2kqrHx-SLOiyvqouorQ0dxgNmAQO5xIKtxVSPQN_gDNrGGVeEfUi-1FDd3NDLKAz5oXd04RlDsXK9idxpl_1g_iIwwTvLPge9mxJv_z8USOaZ3sVgAz9IZVY94dwjRY9JPre8wFARoE1WlKuZ5KZAPCFL_i26miJSQG4FPH8MUSkqRghgJSS_co-o5NZiE8B9wuoRRsbaMDsee4tiHrKCR0zA0k41YdV47YS7p8VBWfYYOIW0UK33hEaW7jzubrMKT-Q", title: "Velvet Slip", status: "Available • Size S" },
      { id: '6', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6wLP57hmZ3FHT4i20Ic2UkOY4D01857tXcwmfk-wIEwvYyi78gUnwCUa1_wUgz575UfYhJNK1u8zFx6CbHFUfpF6UfZQ45EKR_-NIXBmCMRAjZDR8nlKPiZ3O6d2LlpJoTxyls33nV8WOPIDULeJDZjsneeUuYJngvu5Q-KdGvm9R_AGp2gjNqCGwuu8TXzcO4Uc7ZlJd2ONrEJ_9cK3tJ6c-ck7GEgVm4DTzKdkUI7LQETuGFog_ZcszAem5TAcShZ0UDedwDyc", title: "Wool Cardigan", status: "Reserved • Size L" },
    ]
  },
  community: {
    subtitle: "Community",
    title: "Spotted at Yen May",
    description: "Join our vintage family. Real smiles, real people, finding their unique story. Tag @yenmayvintage to be featured.",
    items: [
      { id: 'c1', handle: "@thao.nguyen", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh8c4P4i82jhllbzInxifuLIuGWeIiHkajyq9TMwJu2RjnSbbRLccnSWq8JOVZ1HopbtAZPGC-0lV0M0wDwdGwyKt-TKmVvPr8WGqPdeaeZlpEBjmP7l54K2b-gswhJBpDBo7PABNq2bNuGNb3eVU6EIximmgvpOBZwzoYLXBdhvCO0S8zKZ6qCJFV5hPqH2r3tV5_wrp6J1ZnS9Usy6c9aU3MOO7M1_T1S7MH6O0mUixn34YKkjMoBL9hx0m5dSQU66xJf-o2g8o" },
      { id: 'c2', handle: "@minh_anh_99", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOIm-Ol3G08eGKNplgQ_KKmfp_SxTr1ofpYU7KF7DSvjjPYk3MNFis7TtFQssOJEhat0fCj96sANPlMOMPgOM1LKgHKHSyoIK8TWCfuwKd4i-CxsBF_4_zQ4rGvO0kA2SSKeyC0fHLopLyo02D3mkt1hj50UjiuriHQu3dR-cmcvOf9tKH6YbwDtWl4AAGriBNxPkBKVmHn-wHSQTkOO3gX1uBk6wbEuGa2QAjRHUFlA6-c2XURBWq4d6t4wo3xAABy5WJFq0_9l8" },
      { id: 'c3', handle: "@linh.dan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqjFWJQSiklSE_eLiWlcCFKAo4QA-D8alaXQ4BoENjbT_MkkwNEwxs-EPHtETEUNx8xR_kZJVeQdv6BAn4J8YEQTo6OWBkPjDf-fNbR89AEJrcAcbdNKg-ijZGWK6D6Cv-63fS7Sa9S2zvtvkiebkSAUa6ql9ao_5D3RcPVSC-611C4tmQxM-L3MwACHpjS7oSxP1QSLmAPDcC1kHEPMtE0HcdWjQUk4nDBevSowgPZv91-WjbE-sx7wR2RYUVUEoG5g6OkwsZ43Q" },
      { id: 'c4', handle: "@kim_ngan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu_jhaulL4bP_EVJ4GMngHQJlxZpucrrCYmSpw7_s2wbSGO60SP6eEDs0YWLw6YSE_0agzgas7EWluaIoIEOCbxbFWqfzZAmZepw-U6tzWUcynh817N7wtsVRg7pt5rF8M3XFOC-5yCW4jFVG4rbHaZgKYl7_8lWss4nzdR8SlEJ1W9MbcI4hOHcoGRhZJlFUOTGzt958mbyvKmz4YhZLR1uRtyB257m6K_XfRU9MD1CNh2UY1XbQX-M6HzkGT87zSK8lhnVjW_Tw" }
    ]
  },
  prestige: {
    title: "As Featured In",
    press: ["Da Nang Newspaper", "Quang Nam News", "Style Magazine"],
    testimonials: [
      { id: 't1', rating: 5, title: "\"The Chloe Experience\"", text: "\"A hidden gem in Da Nang. The curation is impeccable, and the vibe is so chill. It feels less like shopping and more like visiting an art gallery where you can take the art home.\"", author: "Sarah Jenkins", platform: "Google Review", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0KU4hH0TQTk7egYaKGZ06cPDUfX34saimQ1iHWfKahVKUg5_jXdCMHFlzov5Lv0E6aSJ5x2JSs_pRaqRIhjkvi__5j8QFWEo9Q8hXpXkbOkHmW-0sE_eZwkUmJB0OWXBfqgU1Xl1cr9TmMaIjpwxyKSx_YsPcDlwFwQmNORjOunTptw1piJmLzdyU-ZOx5icBWn4iqMrp7pJASMCUxh5qDzTVAw9VIMTPIkxRIE0vDTlKm9k40gdhIL6AKv3xBl8I1K17hDVpD-w" },
      { id: 't2', rating: 5, title: "\"Rare Finds Galore\"", text: "\"I've been hunting for a specific 90s leather jacket for years. Walked into Yen May and there it was, clean and in perfect condition. Unbelievable luck!\"", author: "Minh Thư", platform: "Facebook", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPLqNrE2gTTiTkNkditANcIwRkPR3XYCAAMpE7yxxjSQgyk6GtLWeI2-p45VCfkke9rTsldLIyiidBzgvhnH_TISxckdH2OIgsKYE7SfAQkea6UwBJKdj0yWLOYx5wq3waRLfSW7P_5nz2_omI7dRgkiHFWwdEcq0i3BnNCPelQDSvi9BaIgr8h3xRRVBbPt9WtI8maC7qo745x0Ya83dtvL0MMOqp0PdW5TppAPpXfpvFe54OevREWzgvM-xrJ5UvXcmbqjaPnj4" },
      { id: 't3', rating: 5, title: "\"Sustainability Win\"", text: "\"So happy to see a store in VN taking sustainable fashion seriously. No fast fashion junk here, just high quality pieces that have stood the test of time.\"", author: "Alex Johnson", platform: "TripAdvisor", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLOO8EvABUCYF7i2s3foN_vGpnTcEYT5NkqqId4TNoLTqtompT-f1hNjDUMEPrjxSoWUvgEexHbJfmkASgg1763l8EvFc1m9WA1CfLcGJRfP59n31Zt4ucCU3P9U_jTrZ1qkZkffghdv4Xb_UHTU9ywBfLgqRDRnHulPZd4nMAgP6LdygIjEbtIGJ6yfZWTurpUuDBwvWZjcHX-Ry5CuFwrn4D5TOu50anLBQC2Oyc6U86y9r-HATDQ8EoEUuITSUuIVoB2ma7heA" },
      { id: 't4', rating: 5, title: "\"Warmest Welcome\"", text: "\"The owner is incredibly knowledgeable and sweet. She helped me style a corset top I was unsure about. I left feeling so confident!\"", author: "Hạnh Phạm", platform: "Google Review", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUaLSHAB91umCghbbNvuo8RaDMLMMmZk7hGLRpJTgk5ANNG10GJ32bOSGQ7m_dC7pvHMVruH5b7tX-twVSbmE-v_9Kof_PPHtx8Sw8aIZG2w341HvdnvgRLf5L5X2tSI-VTbWGLcTp65p5J7VDQUsKWy1ULvStWtqFyWG4NdTpVNin5mQcSmy9AfI_Wxmn4FInvHxSPL1sH0diszC0_IekMwj_N1nmG-R1GmTuOQ5Z5aXpOm5QXyZtkdNEvSqZRCo-q2UWiPWdHkE" },
      { id: 't5', rating: 5, title: "\"Atmosphere is 10/10\"", text: "\"Came for the clothes, stayed for the playlist and the scent. Seriously, what candles are you burning? It's such a relaxing shopping experience.\"", author: "Jessica Lee", platform: "Instagram", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQcJLZ3pkypUow1F8rIH2vW7_OK0NTV-wDqYLZFHf-rPxQbJ3CUEEk3m0NY88rYrdQi82z4frCV6foE1Drfg3clDUSbtvx06Vj5LLxFSA0rtIq6RDdGocO3ZzCgwDnuBvXXrhbvlALK-QWJbTDOgDgzV_cRQNqKb1nK87f64cVr0WcSzxapTijB3rFnammUKu3ya_0wyzi8iBDLZVC8MHkzonBlOfFNaNOC0W4ELVdIgeI3B9zk1vbYZXL8BOFjhaAu4aNOtK_lzc" },
      { id: 't6', rating: 5, title: "\"Fair Pricing\"", text: "\"Vintage shops can be overpriced traps, but Yen May is fair. You pay for quality and curation, but it doesn't break the bank. Highly recommend.\"", author: "Tuan Anh", platform: "Google Review", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmBcbHG5dQC3qqu6cZNdVUULnWsx4y_SA9k2IC7avePLu68g8lIF9ZRedl9qEz9PAc7oIg2UXg8__QykHVSJzxSJD4Ba7J2of1uQcuOo9LgAWLcMA2JS1vzfcHrauFxtGFE8YBNypcDTw5GW04h78zmcTyOF63PoSJCtFnFdPVSk1lSi0Ew5TugCLTuvjds1Pk1F6hMDYcdqvxMKzp086qKa0ypMHIv3PA2azlg9W2hzgzQ7V3l9klLgL9WbywLSk0imQqxD2zmc0" }
    ]
  },
  oasis: {
    tag: "The Experience",
    title: "A Sanctuary of Slow Fashion.",
    p1: "Escape the city noise and drift into a world of curated nostalgia. Our store is designed as a living room for fashion lovers—scented with calming essential oils and soundtracked by warm, crackling vinyl melodies.",
    p2: "Browse through racks of hand-treated vintage gems at your own rhythm. There’s no pressure here, only the invitation to touch, feel, and find the piece that speaks to you. Whether you need styling advice or just a quiet corner to admire the craftsmanship, our oasis is open.",
    cta: "Step into Our Oasis",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_0nGy_oOzP7qFAi5f5AwOmzzdirAn7NLzr9cs6xsVHKhnY6ec-8NuN5O4-GnywnVS7IyO9A4wwH5U3RguVmSvXlmFLbRlOk8MCcq8caJ3lXlbRKpdxh3YWf4YZgeYbfJ7dgqZLyqTQGzIKfpJA6b37hpyJ3Yj1CS5UnzaYwkthlgqOrCjwtSfnuxq30yDGQywdoylS2KU10yj0UkQU8VKPx3ITTPVoDWhuLx0ujEN7tb5o8rIr2U_4wd3gQ9Fz8xPRDPxeuM2lgM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKNNOm2fspgKBWVrjCIuCiME3vI_k_GcFK01-4tvu_ybcMZJKDJNLJUy04aIOf70qGJLLcE15U_PnQU1N-PkodBtYjj0KL11DKKf4HdSY_slQQi4JwfZbwgede7N5jRoe84h1e9ODAPR03WqsGZeL7CMllLAepU18n9562ytQ7KQOUfQY574fYzufAUY9W3WwhWJe1qg4W59NoA4yABpNAsGNTbq82N6EYVaQHZ_g0JXRA2sWixnSxF8qnw9seo5oH9pxfed78ZwI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUaLSHAB91umCghbbNvuo8RaDMLMMmZk7hGLRpJTgk5ANNG10GJ32bOSGQ7m_dC7pvHMVruH5b7tX-twVSbmE-v_9Kof_PPHtx8Sw8aIZG2w341HvdnvgRLf5L5X2tSI-VTbWGLcTp65p5J7VDQUsKWy1ULvStWtqFyWG4NdTpVNin5mQcSmy9AfI_Wxmn4FInvHxSPL1sH0diszC0_IekMwj_N1nmG-R1GmTuOQ5Z5aXpOm5QXyZtkdNEvSqZRCo-q2UWiPWdHkE"
    ]
  },
  location: {
    subtitle: "Visit Us",
    title: "Come Find Your Story",
    description: "Tucked away in the quiet streets of Son Tra.",
    address: "45/3 An Hai Dong 1 St,\nSon Tra, Da Nang",
    hours: "10:00 AM — 9:00 PM"
  }
};