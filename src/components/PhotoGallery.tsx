import ImagePlaceholder from "./ImagePlaceholder";

export default function PhotoGallery({
  images,
}: {
  images: { label: string; src?: string }[];
}) {
  return (
    <section className="py-4">
      <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 lg:grid-cols-5">
        {images.map((img) => (
          <ImagePlaceholder
            key={img.label}
            label={img.label}
            src={img.src}
            aspect="aspect-square"
            className="rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}
