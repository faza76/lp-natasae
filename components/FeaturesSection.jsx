import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

const featureList = [
  {
    id: "01",
    title: "Desain Interior",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    id: "02",
    title: "Gambar Visual",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    id: "03",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    id: "04",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    id: "05",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    id: "06",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
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
