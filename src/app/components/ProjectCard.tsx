"use client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
};

export default function ProjectCard({ title, description, image, href, external }: Props) {
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Link href={href} {...linkProps} className="card overflow-hidden group">
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold underline-offset-4 group-hover:underline">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{description}</p>
      </div>
    </Link>
  );
}
