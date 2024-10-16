import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const PopularPlanType = {
  NO: 0,
  YES: 1,
};

const pricingList = [
  {
    title: "Basic",
    popular: PopularPlanType.YES,
    price: 70,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Konsultasi Sekarang",
    benefitList: [
      "Pra design",
      "Denah,Tampak,Potongan",
      "Skema Warna & Kode warna",
      "Persfektif Interior",
      "Persfektif Exterior",
    ],
  },
  {
    title: "Middle",
    popular: PopularPlanType.YES,
    price: 100,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Konsultasi Sekarang",
    benefitList: [
      "*Include Semua di paket Basic",
      "Rencana dan Detail pola lantai",
      "Rencana Kusen Pintu Jendela",
      "Rencana Detail Kusen pintu dan jendela",
      "Rencana Ruang & Skema Furnitur",
      "Rencana dan detail Pondasi",
      "Rencana dan detail Kolom",
      "Rencana dan detail Sloof & Balok",
      "Rencana Stop Kontak & Saklar",
      "Rencana Titik Lampu",
      "Rencana dan detail Septick Tank",
      "Rencana Anggaran Biaya (RAB ) Bangunan",
      "Output Softfile",
    ],
  },
  {
    title: "Exclusive",
    popular: PopularPlanType.YES,
    price: 170,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Konsultasi Sekarang",
    benefitList: [
      "*Include Semua di paket Middle",
      "Rencana dan Detail Toilet, Tangga, Prinsip, dan Atap",
      "Notasi dan Ukuran Furnitur",
      "Rencana Pelapis Lantai , Dinding, Atap",
      "Daftar Merk, Kode Material Ex Setara",
      "Rencana dan detail Plat Lantai",
      "Rencana detail Tangga",
      "Detail Pembesian",
      "Rencana Air panas, air hujan dan RWH",
      "Rencana Internet, CCTV dan AC",
      "Rencana Anggaran Biaya (RAB ) Interior",
      "Output Hardfile & Marchindise",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Pilihan 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Paket Desain{" "}
        </span>
        Rumah
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing) => (
          <Card
            key='{pricing.title}'
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader className='relative'>
              <CardTitle className="flex item-center justify-between">
                {/* {pricing.title} */}
                <div>
                  <span className="text-3xl font-bold">{pricing.price}K</span>
                  <span className="text-muted-foreground"> /meter²</span>
                </div>
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Penawaran Terbatas
                  </Badge>
                ) : null}
              </CardTitle>
              {/* <CardTitle className='text-center absolute -top-3 right-0 left-0'> */}
              <CardTitle className='flex justify-center item-center'>
                <div className="bg-white absolute -top-3 px-4">
                    {pricing.title}
                </div>
              </CardTitle>
              {/* <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div> */}
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>
            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
