import type { GalleryBlock } from "@/data/projects";
import ImageFrame from "@/components/ui/ImageFrame";

export default function ProjectGallery({ blocks }: { blocks: GalleryBlock[] }) {
  return (
    <div className="space-y-12">
      {blocks.map((block, i) => (
        <figure key={i}>
          {block.type === "full" && (
            <ImageFrame src={block.image} alt={block.alt} aspect="aspect-[16/9]" />
          )}
          {block.type === "two" && (
            <div className="grid gap-6 md:grid-cols-2">
              {block.images.map((img) => (
                <ImageFrame
                  key={img.image}
                  src={img.image}
                  alt={img.alt}
                  aspect="aspect-[4/3]"
                />
              ))}
            </div>
          )}
          {block.type === "three" && (
            <div className="grid gap-6 sm:grid-cols-3">
              {block.images.map((img) => (
                <ImageFrame
                  key={img.image}
                  src={img.image}
                  alt={img.alt}
                  aspect="aspect-square"
                />
              ))}
            </div>
          )}
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
