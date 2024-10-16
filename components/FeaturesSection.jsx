import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

const featureList = [
  {
    id: "01",
    title: "Fleksibilitas output desain",
    description:
      "Paket dapat dipilih sesuai kebutuhan client untuk menyesuaikan budget,",
  },
  {
    id: "02",
    title: "Lifetime aftersales",
    description:
      "Layanan konsultasi online bersama natasae setelah proses design berlangsung hingga seumur hidup.",
  },
  {
    id: "03",
    title: "Mengedepankan Prinsip Vitruvius",
    description:
      "Mengoptimalkan desain terbaik susuai keinginan client tanpa mengesampingkan kaidah kaidah desain arsitektur dengan mengedepankan prinsip : Firmitas (Soliditas), Utilitas (Fungsi) dan Venustas (Keindahan). .",
  },
  {
    id: "04",
    title: "Mengoptimalkan Budget",
    description:
      "Design Natasae di sesuaikan dengan kebutuhan dan budget yang di miliki klien yang bertujuan untuk merealisasikan design menjadi hunian/bangunan sesuai dengan perencanaan yang ada.",
  },
  {
    id: "05",
    title: "Garansi Realisasi Design",
    description:
      "Seluruh paket perencanaan di natasae di berikan Garansi perbaikan bila terdapat kesalahan dari kami terkait teknis pada perencanaan.",
  },
  {
    id: "06",
    title: "Design yang mengedepankan kebutuhan pengguna",
    description:
      "Proses design di awali dengan cerita tentang kebutuhan dan kebiasaan pengguna di dalam hunian yang di tuangkan ke dalam design dan di sesuaikan dengan keinginan dalam fungsi ruang pada hunian.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg italic text-primary text-center mb-2 tracking-wider">
        Values
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Value yang di dapat dari natasae 
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 space-y-10 gap-6">
        {featureList.map(({ id, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background shadow-none border-0 flex flex-row items-center">
              <div className="text-6xl md:text-8xl text-neutral-600">{id}</div>
              <div className=" ">
                <CardHeader className="flex justify-center p-0 px-2 ">
                  <CardTitle className="text-xl pb-0 ">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground p-0 px-2">
                  {description}
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
