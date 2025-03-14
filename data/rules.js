export const rules = {
    start: {
      question: "Appakah kamu ingin mengetahui penyakit yang sedang dialami kucing kamu?",
      options: [
        { text: "Yaa", next: "Q1" },
        { text: "Tiidak", next: "END_HEALTHY" },
      ],
    },
    Q1: {
      question: "Appakah kucing kamu lebih agresif akhir-akhir ini?",
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
      result: "Kuucing kamu mungkin mengalami stres. Cobalah menciptakan lingkungan yang lebih tenang untuknya.",
    },
    RESULT_HYPERTHYROIDISM: {
      result: "Kuucing kamu mungkin mengalami hipertiroidisme. Sebaiknya konsultasikan ke dokter hewan.",
    },
    RESULT_UNKNOWN: {
      result: "Maau mati itu kucingnya, udah bosen hidup kucingnya.",
    },
    END_HEALTHY: {
      result: "Nggapain kesini coba...",
    },
  };
  