export const rules = {
  start: {
    question: "Haai saya adalah Sisku, Asisten kucing virtual yang siap membantu mengetahui penyakit kucing kamu, Yuk kasih tau aku tujuan kamu dengan pilih opsi dibawah ini!",
    options: [
      { text: "Nyari tahu penyakit yang dialami kucing kesayangan", next: "Q1" },
      { text: "Mau ngobrol aja sama Sisku", next: "END_HEALTHY" },
    ],
  },
  Q1: {
    question: "Okke mari kita mendiagnosa, Apakah kucing kamu lebih agresif akhir-akhir ini?",
    options: [
      { text: "Iya", next: "Q2" },
      { text: "Tidak", next: "Q3" },
    ],
  },
  Q2: {
    question: "Appakah sekarang lebih sering buang air kecil?",
    options: [
      { text: "Yaa", next: "Q3" },
      { text: "Tidak", next: "Q7" },
    ],
  },
  Q3: {
    question: "Appakah kamu merasa kucing kamu mengalami penurunan berat badan?",
    options: [
      { text: "Yaa", next: "Q4" },
      { text: "Tiidak", next: "Q5" },
    ],
  },
  Q4: {
    question: "hmmmm....apakah bulu kucing kamu terlihat lebih kusam atau berantakan?",
    options: [
      { text: "Yaa", next: "RESULT_HYPERTHYROIDISM" },
      { text: "Tiidak", next: "RESULT_UNKNOWN" },
    ],
  },
  Q5: {
    question: "appakah kucing kamu lebih sering pup?",
    options: [
      { text: "Yaa", next: "Q6" },
      { text: "Tiidak", next: "Q9" },
    ],
  },
  Q6: {
    question: "appakah didalam fasesnya terdapat serat-serat bulu?",
    options: [
      { text: "Yaa", next: "RESULT_ALOPECIA" },
      { text: "Tiidak", next: "RESULT_ALERGI" },
    ],
  },
  Q7: {
    question: "appakah kucing kamu terlihat lebih sering garuk-garuk (gatelan)?",
    options: [
      { text: "Yaa", next: "Q8" },
      { text: "Tiidak", next: "RESULT_OK" },
    ],
  },
  Q8: {
    question: "seepertinya gejalanya cukup serius, Apakah di kulitnya terdapat peradangan?",
    options: [
      { text: "Yaa", next: "RESULT_SCABIES" },
      { text: "Tiidak", next: "RESULT_UNKNOWN1" },
    ],
  },
  Q9: {
    question: "hmmmm....menarik, appakah kucing kamu terlihat lebih sering garuk-garuk (gatelan)?",
    options: [
      { text: "Sepertinya iyaa", next: "Q10" },
      { text: "Tiidak", next: "RESULT_UNKNOWN" },
    ],
  },
  Q10: {
    question: "appakah timbul peradangan di kulitnya?",
    options: [
      { text: "Sepertinya iyaa", next: "RESULT_SCABIES" },
      { text: "Tiidak", next: "Q11" },
    ],
  },
  Q11: {
    question: "appakah bulu-bulunya mulai mengalami kerontokan?",
    options: [
      { text: "Sepertinya iyaa", next: "Q12" },
      { text: "Tiidak", next: "RESULT_UNKNOWN" },
    ],
  },
  Q12: {
    question: "Peertanyaan terakhir sebalum aku diagnosis, apakah kulit kucing kamu terlihat berminyak dan mengeluarkan aroma tak sedap?",
    options: [
      { text: "iyaa", next: "RESULT_BASAH" },
      { text: "Tiidak", next: "RESULT_KERING" },
    ],
  },
  RESULT_STRESS: {
    result: "Haasil diagnosanya adalah mungkin kucing kamu udah gak betah sebenarnya dipelihara sama kamu, Cuman karena dia kucing gak bisa ngomong jadi wehh dia ngeberontak.",
  },
  RESULT_HYPERTHYROIDISM: {
    result: "Kuucing kamu mengalami hipertiroidisme, yaitu dimana kelenjar tiroid memproduksi hormon tiroid (terutama tiroksin atau T4) secara berlebihan. Ini termasuk salah satu penyakit serius yang dialami oleh kucing tua pada umumnya, beberapa faktor penyebabnya adalah terlalu sering konsumsi makanan kaleng, perubahan gaya hidup lebih banyak di dalam kandang (jarang bergerak), hingga terkena paparan kimia disruptor tiroid seperti BPA, untuk pencegahan pertama berikan obat methimazole atau carbimazole untuk menghambat produksi hormon tiroid sambil lakukan konsultasikan ke dokter hewan.",
  },
  RESULT_ALOPECIA: {
    result: "Kuucing kamu mengalami gejala alopecia, yaitu kondisi kerontokan atau kebotakan pada bulu kucing baik sebagian maupun seluruh tubuh, yang terkadang disertai oleh rasa gatal-gatal. Penyebabnya bisa karena alergi, infeksi jamur, parasit, atau penyakit autoimun. Selalu jaga kebersihan kucing dan lingkungannya, sisir bulu secara rutin, cegah kutu dan jamur dengan memberikan obat anti kutu, dan pastikan agar kucing tidak mengalami stress berlebihan untuk mengobati gejala alopecia.",
  },
  RESULT_DIARE: {
    result: "Seepertinya kucing kamu hanya mengalami diare. Untuk pencegahan lakukan beberapa langkah 1.pastikan air bersih selalu tersedia untuk minum si kucing, 2.beri makanan yang mudah dicerna, 3.stop pemberian makanan untuk sementara waktu, 4.berikan obat diare dari dokter hewan. Lakukan konsultasi ke dokter hewan jika gejala masih terus berlanjut.",
  },
  RESULT_SCABIES: {
    result: "Kuucing kamu mengalami scabies. Yaitu penyakit kulit menular yang disebabkan oleh tungau kecil bernama Notoedres cati. beberapa penyebab infeksi scabies ini adalah lingkungan yang kotor, imunitas kucing yang lemah, hingga kontak langsung dengan kucing yang sedang terinfeksi. Beberapa langkah penyembuhannya adalah gunakan obat anti septik seperti selamectin dan ivermectin, gunakan shampo khusus yang dapat membantu membersihkan kerak, bersihkan lingkungan sekitar, dan isolasi kucing yang sedang terinfeksi. Selalu konsultasikan ke dokter hewan jika gejala semakin parah.",
  },
  RESULT_ALERGI: {
    result: "Meenurut diagnosis aku, kucing kamu hanya mengalami alergi makanan saja, namun jika ini dibiarkan terlalu lama bisa mengakibatkan luka lebih serius, beberapa langkah penanganannya adalah ganti konsumsi makanan kucing dan berikan obat seperti probiotik untuk membantu sistem pencernaan dan salep atau antihistamin jika terdapat luka dan gatal pada kucing, segera bawa ke dokter hewan secepatnya untuk penangan lebih lanjut.",
  },
  RESULT_BASAH: {
    result: "Berdasarkan data yang diberikan, kucing kamu mengalami gejala jamur basah dengan .",
  },
  RESULT_KERING: {
    result: "Berdasarkan data yang diberikan, kucing kamu mengalami gejala jamur kering dengan ciri-ciri bulu rontok dan kulit bersisik.",
  },
  RESULT_OK: {
    result: "Sepertinya kucing kamu dalam keadaan sehat, tingkah laku terlihat lebih agresif menunjukkan bahwa dia dalam keadaan senang.",
  },
  RESULT_UNKNOWN1: {
    result: "Kuucing kamu sepertinya hanya mengalami ketidaknyamanan, baik di kandang atau area sekitarnya, sehingga ia terlihat lebih sering menggaruk, ini umum terjadi pada kucing di area yang baru.",
  },
  RESULT_UNKNOWN: {
    result: "Yaahh mohon maaf aku belum bisa mendiagnosa penyakit pada kucing kamu karena keterbatasan data, aku sarankan kamu untuk berkonsultasi segera ke dokter hewan.",
  },
  END_HEALTHY: {
    result: "Yaahhh aku lagi males ngobrol, kita udahan ya. Bye!",
  },
};
