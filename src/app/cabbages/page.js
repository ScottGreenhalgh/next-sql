import Image from "next/image";
import cabbage from "@/../public/cabbage.jpeg";
import { inter } from "../layout";
import Link from "next/link";

export default function CabbagePage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Image
        src={`https://www.butter-n-thyme.com/wp-content/uploads/2022/08/Parel-Cabbage-Types-of-Cabbage-1536x1152.jpg`}
        alt={`web cabbage image`}
        height={1536}
        width={1152}
      />
      <Image src={cabbage} alt={`local cabbage image`} placeholder="blur" />
      <h1 className={`${inter.className} text-3xl`}>Cabbages</h1>
      <h2 className="text-2xl">Information about cabbages </h2>
      <p>
        Cabbages are versatile vegetables that come in various colors, including
        green, purple, and white. They are rich in vitamins C and K, and are
        known for their crunchy texture and slightly <span>peppery flavor</span>
        . Whether eaten raw in salads, fermented into sauerkraut, or cooked in
        soups and stews, cabbages are a nutritious addition to any meal.
        Interestingly, cabbages have been cultivated for thousands of years and
        were a staple in the diets of ancient civilizations. Today, they
        continue to be a popular choice for their health benefits and culinary
        versatility.
      </p>
    </div>
  );
}
