export const rules = {
    start: {
      question: "Haai saya adalah Sisku, Asisten kucing virtual yang siap membantu mengetahui penyakit kucing kamu, Yuk kasih tau aku tujuan kamu dengan pilih opsi dibawah ini!",
      options: [
        { text: "Nyyari tahu penyakit yang dialami kucing kesayangan", next: "Q1" },
        { text: "Maau ngobrol aja sama Sisku", next: "END_HEALTHY" },
      ],
    },
    Q1: {
      question: "Okke mari kita mendiagnosa, Apakah kucing kamu lebih agresif akhir-akhir ini?",
      options: [
        { text: "Iyya", next: "Q2" },
        { text: "Tiidak", next: "Q3" },
      ],
    },
    Q2: {
      question: "Appakah kucing kamu sering mencakar atau menggigit tanpa alasan jelas?",
      options: [
        { text: "Yaa", next: "RESULT_STRESS" },
        { text: "Tiidak", next: "Q3" },
      ],
    },
    Q3: {
      question: "Appakah kucing kamu lebih sering makan sekarang?",
      options: [
        { text: "Yaa", next: "RESULT_HYPERTHYROIDISM" },
        { text: "Tiidak", next: "RESULT_UNKNOWN" },
      ],
    },
    RESULT_STRESS: {
      result: "Haasil diagnosanya adalah mungkin kucing kamu udah gak betah sebenarnya dipelihara sama kamu, Cuman karena dia kucing gak bisa ngomong jadi wehh dia ngeberontak.",
    },
    RESULT_HYPERTHYROIDISM: {
      result: "Kuucing kamu mungkin mengalami hipertiroidisme, yaitu dimana kelenjar tiroid memproduksi hormon tiroid (terutama tiroksin atau T4) secara berlebihan. Sebaiknya konsultasikan ke dokter hewan.",
    },
    RESULT_UNKNOWN: {
      result: "Maau mati itu kucingnya, udah bosen hidup kucingnya.",
    },
    END_HEALTHY: {
      result: "Yaahhh aku lagi males ngobrol, kita udahan ya. Bye!",
    },
  };
  