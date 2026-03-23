import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Artwork } from "@/data/artworks";

interface ArtworkModalProps {
  artwork: Artwork | null;
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ArtworkModal({ artwork, open, onClose, onPrev, onNext }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 bg-black/95 border-none overflow-hidden [&>button]:hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Prev / Next */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight size={32} />
          </button>
        )}

        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 md:p-12">
          <img
            src={artwork.image}
            alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
            className="object-contain max-h-[75vh] max-w-[85vw]"
          />
          <div className="mt-6 text-center">
            <h2 className="font-serif text-xl font-light text-white">{artwork.title}</h2>
            <p className="text-sm text-white/50 mt-1">
              {artwork.year} · {artwork.medium} · {artwork.size}
            </p>
            <span className={`text-xs tracking-widest uppercase font-sans mt-2 inline-block ${
              artwork.status === "Available" ? "text-white/70" : "text-white/40"
            }`}>
              {artwork.status}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
