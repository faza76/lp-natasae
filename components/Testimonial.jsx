"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Testimoni_1 from "@/public/Testimoni/testimoni_1.jpeg";
import Testimoni_2 from "@/public/Testimoni/testimoni_2.jpeg";
import Testimoni_3 from "@/public/Testimoni/testimoni_3.jpeg";
import Testimoni_4 from "@/public/Testimoni/testimoni_4.jpg";
import Testimoni_5 from "@/public/Testimoni/testimoni_5.jpeg";
import Testimoni_6 from "@/public/Testimoni/testimoni_6.jpeg";
import Testimoni_7 from "@/public/Testimoni/testimoni_7.jpeg";



const reviewList = [
  {
    image: Testimoni_1.src,
    name: "Ditra",
    userName: "Executive muda",
    comment:
      "Saya sangat puas dengan pelayanan yang diberikan oleh Natasae Studio sebagai konsultan arsitek. Mereka sangat responsif dalam menanggapi kebutuhan dan permintaan saya.",
    rating: 5.0,
  },
  {
    image: Testimoni_2.src,
    name: "Edy",
    userName: "ASN",
    comment:
      "Natasae Studio memiliki tim yang sangat profesional dan berpengalaman. Mereka mampu menghasilkan desain arsitektur yang sesuai dengan visi dan gaya hidup saya.",
    rating: 4.8,
  },
  {
    image: Testimoni_3.src,
    name: "Salsabila",
    userName: "Wedding Organizer",
    comment:
      "Proses kerja dengan Natasae Studio sangat efisien dan terstruktur. Mereka mampu mengatur jadwal dan anggaran proyek dengan baik sehingga proyek berjalan lancar.",
    rating: 4.9,
  },
  {
    image: Testimoni_4.src,
    name: "Henry",
    userName: "Pengusaha",
    comment:
      "Saya terkesan dengan kreativitas dan inovasi yang ditunjukkan oleh Natasae Studio dalam desain arsitektur. Mereka mampu menghadirkan solusi yang unik dan menarik.",
    rating: 5.0,
  },
  {
    image: Testimoni_5.src,
    name: "Mustika",
    userName: "ASN",
    comment:
      "Natasae Studio memiliki kemampuan komunikasi yang baik. Mereka mendengarkan dengan teliti keinginan dan harapan saya, dan mengintegrasikannya ke dalam desain mereka.",
    rating: 5.0,
  },
  {
    image: Testimoni_6.src,
    name: "Nanda & Dian",
    userName: "Pasangan Muda",
    comment:
      "Saya merasa aman dan tenang bekerja dengan Natasae Studio. Mereka sangat memperhatikan detail dan kualitas dalam setiap aspek desain.",
    rating: 4.9,
  },
  {
    image: Testimoni_7.src,
    name: "Nanjar",
    userName: "Ibu Rumah Tangga",
    comment:
      "Natasae Studio memiliki jaringan yang luas dengan pemasok material terpercaya. Hal ini memudahkan proses pengadaan material proyek.",
    rating: 4.9,
  },
  {
    image: Testimoni_1.src,
    name: "Ditra",
    userName: "Executive Muda",
    comment:
      "Saya mendapatkan nilai tambah yang besar dari kerja sama dengan Natasae Studio. Mereka memberikan saran dan rekomendasi yang cerdas untuk meningkatkan nilai estetika dan fungsionalitas proyek.",
    rating: 4.9,
  },
  {
    image: Testimoni_2.src,
    name: "Edy",
    userName: "ASN",
    comment:
      "Natasae Studio tidak hanya menghasilkan desain yang indah, tetapi juga memperhatikan keberlanjutan dan ramah lingkungan. Mereka menerapkan solusi hijau dalam setiap proyek mereka.",
    rating: 4.9,
  },
  {
    image: Testimoni_3.src,
    name: "Salsabilla",
    userName: "Wedding Organizer",
    comment:
      "Saya sangat merekomendasikan Natasae Studio sebagai konsultan arsitek. Mereka adalah mitra yang handal dan dapat diandalkan untuk menciptakan ruang hidup yang memukau dan nyaman.",
    rating: 4.9,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Testimoni Natasae
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Dengar apa kata klien kami
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: "true"
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
