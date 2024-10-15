import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const FAQList = [
    {
      question: "1. Apa itu Natasae Studio?",
      answer: "Natasae Studio adalah biro konsultan arsitek yang menyediakan layanan desain rumah, bangunan komersial, dan renovasi dengan pendekatan profesional dan berfokus pada kebutuhan klien.",
      value: "item-1",
    },
    {
      question: "2. Apa saja layanan yang ditawarkan oleh Natasae Studio?",
      answer:
        "Kami menawarkan berbagai layanan mulai dari desain fasad, perencanaan lengkap, visualisasi 3D, desain interior, hingga pengawasan dan pengadaan interior. Semua layanan dapat disesuaikan dengan kebutuhan Anda.",
      value: "item-2",
    },
    {
      question:
        "3. Apakah Natasae Studio memiliki garansi untuk layanan yang diberikan?",
      answer:
        "Ya, kami memberikan garansi siap bangun untuk seluruh paket perencanaan, termasuk perbaikan jika terdapat kesalahan dalam perencanaan.",
      value: "item-3",
    },
    {
      question: "4. Bagaimana proses konsultasi di Natasae Studio?",
      answer: "Anda dapat melakukan konsultasi secara online atau offline. Kami menyediakan layanan konsultasi melalui WhatsApp, Zoom, atau dengan mengunjungi kantor kami di lokasi yang telah ditentukan.",
      value: "item-4",
    },
    {
      question:
        "5. Apakah Natasae Studio menerima proyek desain secara online?",
      answer: "Ya, semua layanan kami dapat diakses secara online, sehingga Anda dapat berkonsultasi dan mendapatkan desain tanpa harus bertemu secara langsung.",
      value: "item-5",
    },
    {
      question:
        "6. Berapa lama waktu yang diperlukan untuk menyelesaikan sebuah proyek desain?",
      answer: "Waktu penyelesaian proyek desain bervariasi tergantung kompleksitas dan skala proyek. Tim kami akan memberikan estimasi waktu yang lebih jelas setelah konsultasi awal.",
      value: "item-6",
    },
    {
      question:
        "7. Apakah Natasae Studio bisa membantu dalam pengajuan IMB/PBG?",
      answer: "Tentu! Perencanaan yang kami buat akan disesuaikan agar dapat digunakan untuk pengajuan IMB/PBG, sesuai dengan ketentuan pemerintah yang berlaku.",
      value: "item-7",
    },
    {
      question:
        "8. Dapatkah saya memilih layanan tertentu sesuai kebutuhan?",
      answer: "Ya, Anda dapat memilih layanan secara terpisah atau menyeluruh sesuai kebutuhan Anda, mulai dari gambar kerja, RAB, hingga desain interior.",
      value: "item-8",
    },
    {
      question:
        "9. Bagaimana cara menghubungi Natasae Studio untuk konsultasi atau pertanyaan lebih lanjut?",
      answer: "Anda dapat menghubungi kami melalui nomor telepon atau email yang tertera di website. Tim kami siap membantu Anda dengan pertanyaan dan permintaan informasi lebih lanjut.",
      value: "item-9",
    },
    {
      question:
        "10. Apakah ada testimoni dari klien sebelumnya?",
      answer: "Ya, kami memiliki banyak testimoni positif dari klien yang telah menggunakan jasa kami. Anda dapat melihat ulasan dan pengalaman mereka di bagian testimoni di website kami.",
      value: "item-10",
    },
  ];
  
  const FAQSection = () => {
    return (
      <section id="faq" className="container md:w-[900px] py-24 sm:py-32">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>
  
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>
  
        <Accordion type="single" collapsible className="AccordionRoot space-y-2">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem 
            key={value} 
            value={value}
            className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  };
  
  export default FAQSection;
  